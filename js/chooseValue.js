var moment = require('moment');

module.exports = {
  isBefore : function (moment1, moment2) {
    return moment(moment1).isBefore(moment2);
  },
  isSame : function (moment1, moment2) {
    return moment(moment1).isSame(moment2);
  }
}
