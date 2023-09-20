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

    const queryStr = JSON.stringify(queryCopy)
    queryStr = queryStr.replace(/\)
  
    deleteArea.forEach(item => {
      delete queryCopy[item];
    });

    this.query = this.query.find(queryCopy)
  
    // Further code to use the filtered queryCopy or return it if needed
  }
  
  pagination(){

  }
}
module.exports = ProductFilter