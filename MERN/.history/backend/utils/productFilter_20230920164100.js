class ProductFilter {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
    // Constructor içeriğini buraya ekleyin
  }


  search() {
    const keyword = this.queryStr.keyword ? (
      name : {
        $regex:this.queryStr.keyword,
        $options: "i"
      }


    ): {}
    this.query = this.query.find({...keyword})
    return this:
  }
  
  filter(){

  }
  pagination(){

  }
}
m