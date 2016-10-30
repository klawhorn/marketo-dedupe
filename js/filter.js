var choose = require('./chooseValue.js');
var reset = require('./resetFormat.js');

module.exports = {
  reOrder: function (array, property) {
    function reorder (arr) {
      //create an empty object for what we will keep
      var obj = {};
      //big array of data objects, for each source object
      arr.forEach(function (entry) {
        //if the new object doesn't already have a property with the id, put it in there
        if (!obj[entry[property]]) {
          obj[entry[property]] = [];
          obj[entry[property]].push(entry);
        } else {
          //if it's already there, look at the existing one's date and the current one's date.
          var existing = obj[entry[property]][0].entryDate;
          var current= entry.entryDate;
          //if the entry date are the same, current is lower on the list than existing, so pop out the existing entry and push the current one in.
          if (choose.isSame(existing, current) || choose.isBefore(existing, current)) {
            //THIS IS WHERE WE DEDUPLICATE, NEED TO STORE obj[entry[property]][0] SOMEWHERE.
            console.log("Deleting record due to duplicate " + property+ " entry: \n"+entry);
            obj[entry[property]].pop();
            obj[entry[property]].push(entry)
          } else {
            //THIS IS WHERE WE DEDUPLICATE, NEED TO STORE CURRENT ENTRY SOMEWHERE (entry).
            return;
          }
        }
      });
      return obj;
    }
    return reorder(array);
  }
}
