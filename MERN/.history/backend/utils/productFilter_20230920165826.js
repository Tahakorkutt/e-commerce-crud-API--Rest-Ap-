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
    const queryCopy = { ...this.queryStr };
    const deleteArea = ["keyword", "page", "limit"];
    deleteArea
  
    const queryStr = JSON.stringify(queryCopy)
      .replace(/\b(gt|gte|lt|lte)\b/g, key => `$${key}`);
  
    deleteArea.forEach(item => {
      delete queryCopy[item];
    });
  
    // Query'yi filtreleyin ve güncelleyin
    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }
  
  pagination(resultPerPage){



  }
}
module.exports = ProductFilter