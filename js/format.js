module.exports = {
  formatArray : function (obj) {
    var new_array = [];
    var array_of_values = Object.keys(obj);
    array_of_values.forEach(function(value){
      new_array.push(obj[value][0]);
    });
    return new_array;
  },
  leadsProp: function (arr) {
    var object = {};
    object.leads = arr;
    return JSON.stringify(object);
  },
  formatRemovals : function (obj) {
    var array = [];
    for (var keys in obj) {
      obj[keys].forEach(function(deletedEntry) {
        array.push(deletedEntry);
      })
    }
    return array;
  }
}
