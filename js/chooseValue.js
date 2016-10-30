var moment = require('moment');

module.exports = {
  chooseByDate : function (obj) {
    console.log(obj);
    for (var key in obj) {
      //find objects that contain more than one entry
      if (obj[key].length > 1) {

          console.log(obj[key]);
      }
    }
  },
  compareDates : function () {
    return;
  }
}
