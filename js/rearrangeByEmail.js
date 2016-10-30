module.exports = {
  reOrderEmail: function (array) {
    function reorder (arr) {
      var obj = {};
      arr.forEach(function (entry) {
        if (!obj[entry.email]) {
          obj[entry.email] = [];
          obj[entry.email].push(entry);
        } else {
          obj[entry.email].push(entry);
        }
      });
      return obj;
    }
    return reorder(array);
  }
}
