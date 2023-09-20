class ProductFilter {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
    // Constructor içeriğini buraya ekleyin
  }


  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: 'i'
          }
        }
      : {};
  
    this.query = this.query.find({ ...keyword });
    return this;  // Bu kısım, muhtemelen this'i döndürmeye çalışıyorsunuz.
  }
  
  filter() {
    // Kopyasını alınan queryStr'i JSON formatına dönüştürün
    const queryCopy = { ...this.queryStr };
    const deleteArea = ["keyword", "page", "limit"];
  
    // Operatörleri düzenleyin
    const queryStr = JSON.stringify(queryCopy)
      .replace(/\b(gt|gte|lt|lte)\b/g, key => `$${key}`);
  
    deleteArea.forEach(item => {
      delete queryCopy[item];
    });
  
    // Query'yi filtreleyin ve güncelleyin
    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }
  Değişiklikler:
  
  queryStr değişkenini const olarak tanımlamak yerine let olarak tanımlanmalıdır, çünkü bu değişkenin içeriğini sonradan değiştiriyoruz.
  Operatörleri düzenlemek için regex ifadesini düzeltilmiş ve optimize edilmiş şekilde güncelledik.
  this.query üzerindeki find işlevini kullanarak sorguyu filtreledik ve güncelledik.
  Bu düzeltilmiş versiyon ile kodunuzun çalışması beklenir ve query'yi belirtilen alanlara göre filtreleyerek güncellemesi sağlanmış olacaktır.
  
  
  
  
  
  
  
  pagination(resultPerPage){



  }
}
module.exports = ProductFilter