class Helper {

  getFormatedDate(date){
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0');
    var yyyy = date.getFullYear();

    date = yyyy + '-' + mm + '-' + dd;
    return date;
  }

}

module.exports = new Helper();