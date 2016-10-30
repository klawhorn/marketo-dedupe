module.exports = {
  formatArray : function (obj) {
    var new_array = [];
    //takes object with props, pushes each entry into a new array so that format is correct.
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
  }
}
