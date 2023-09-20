const user = require('../mode');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  try {
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
      password: passwordHash
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
  // Parola sıfırlama işlemleri
};

const resetPassword = async (req, res) => {
  // Parola sıfırlama işlemleri
};

module.exports = { register, forgotPassword, resetPassword, login, logout, updatePassword };
