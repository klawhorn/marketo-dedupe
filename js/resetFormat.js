module.exports = {
  resetFormat : function (obj) {
    var new_array = [];
    var array_of_ids = Object.keys(obj);
    array_of_ids.forEach(function(entryid){
      new_array.push(obj[entryid][0]);
    });
    // console.log(new_array);
    return new_array;
  }
}
