module.exports = {
  reOrderID: function (array) {
    function reorder (arr) {
      var obj = {};
      arr.forEach(function (entry) {
        if (!obj[entry._id]) {
          obj[entry._id] = [];
          obj[entry._id].push(entry);
        } else {
          obj[entry._id].push(entry);
        }
      });
      return obj;
    }
    return reorder(array);
  }
}
