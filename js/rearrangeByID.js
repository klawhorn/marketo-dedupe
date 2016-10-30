var choose = require('./chooseValue.js');

module.exports = {
  reOrderID: function (array) {
    function reorder (arr) {
      //create an empty object
      var obj = {};
      //big array of data objects, for each source object
      arr.forEach(function (entry) {
        //if the new object doesn't already have a property with the id, put it in there
        if (!obj[entry._id]) {
          obj[entry._id] = [];
          obj[entry._id].push(entry);
        } else {
          //if it's already there, look at the existing one's date and the current one's date.
          var existing = obj[entry._id][0].entryDate;
          var current= entry.entryDate;
          console.log('==================on new obj =================='+obj[entry._id][0].entryDate);
          console.log('==================entry entryDate we are currently on in loop=================='+entry.entryDate);
          //SUCCESSFULLY GRABBING ENTRY DATE AND READY TO PLUG IN COMPARISON
          console.log('new obj is before current entry? '+choose.isBefore(existing, current));
          //if the entry date are the same, current is lower on the list than existing, so pop out the existing entry and push the current one in.
          if (choose.isSame(existing, current) || (choose.isBefore(existing, current)) {
            //THIS IS WHERE WE DEDUPLICATE, NEED TO STORE obj[entry._id][0] SOMEWHERE.
            obj[entry._id].pop();
            obj[entry._id].push(entry)
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
