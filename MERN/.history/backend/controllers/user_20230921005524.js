const user = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cloudinary = require('cloudinary').v2;
const crypto = require('crypto');
const nodemailer = require("nodemailer");


const register = async (req, res) => {
  try {
    const avatar = await cloudinary.uploader.upload(req.body.avatar, {
      folder: "avatars",
      width: 130,
      crop: "scale"
    });

    const { name, email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Böyle bir kullanıcı zaten var" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Şifre 6 karakterden küçük olamaz" });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: passwordHash,
      avatar: {
        public_id: avatar.public_id,
        url: avatar.secure_url
      }
    });

    const token = jwt.sign({ id: newUser._id }, "SECRETTOKEN", {
      expiresIn: "1h"
    });

    const cookieOptions = {
      httpOnly: true,
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // Expires in 30 days
    };

    res
      .status(201)
      .cookie("token", token, cookieOptions)
      .json({
        user: newUser,
        token
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Böyle bir kullanıcı bulunamadı" });
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
      return res.status(400).json({ message: "Yanlış şifre girdiniz" });
    }

    const token = jwt.sign({ id: user._id }, "SECRETTOKEN", {
      expiresIn: "1h"
    });

    const cookieOptions = {
      httpOnly: true,
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // Expires in 30 days
    };

    res
      .status(200)
      .cookie("token", token, cookieOptions)
      .json({
        user,
        token
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const logout = async (req, res) => {
  const cookieOptions = {
    httpOnly: true,
    expires: new Date(0) // Expire immediately
  };

  res.status(200).cookie("token", null, cookieOptions).json({
    message: "Çıkış işlemi başarılı"
  });
};

const updatePassword = async (req, res) => {
  try {
    const { userId, currentPassword, newPassword } = req.body;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    }

    const comparePassword = await bcrypt.compare(currentPassword, user.password);

    if (!comparePassword) {
      return res.status(400).json({ message: "Geçerli şifreyi yanlış girdiniz" });
    }

    const newPasswordHash = await bcrypt.hash(newPassword, 10);

    user.password = newPasswordHash;
    await user.save();

    res.status(200).json({ message: "Şifre başarıyla güncellendi" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const forgotPassword = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({ message: "Böyle bir kullanıcı bulunamadı" });
    }

    const resetToken = crypto.randomBytes(16).toString('hex');
    user.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    user.resetPasswordExpire = Date.now() + 5 * 60 * 1000; // Adding 5 minutes in milliseconds

    await user.save({ validateBeforeSave: false });

    const passwordUrl = `${req.protocol}://${req.get('host')}/reset/${resetToken}`;

    const message = `Şifreni sıfırlamak için kullanacağın link: ${passwordUrl}`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "your-email@gmail.com", // Replace with your email
        pass: "your-email-password", // Replace with your email password or generate an app password for security
      },
    });

    const mailData = {
      from: 'your-email@gmail.com', // Sender address
      to: req.body.email, // Receiver address
      subject: 'Şifre Sıfırlama',
      text: message
    };

    await transporter.sendMail(mailData);
    res.status(200).json({ message: "Şifre sıfırlama linki mail olarak gönderildi" });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    res.status(500).json({ message: error.message });
  }
};

const resetPassword = async (req, res) => {

  
};

module.exports = { register, forgotPassword, resetPassword, login, logout, updatePassword };
