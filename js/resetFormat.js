module.exports = {
  resetFormat : function (obj) {
    var new_array = [];
    //takes object with props, pushes each entry into a new array so that format is correct.
    var array_of_ids = Object.keys(obj);
    array_of_ids.forEach(function(entryid){
      new_array.push(obj[entryid][0]);
    });
    return new_array;
  }
}
