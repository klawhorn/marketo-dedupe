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
          //existing one = obj[entry._id][0][entryDate]
          //current one we are comparing against = entry.entryDate
          console.log('==================existing new obj=================='+obj);
          console.log('==================exiting entry on new obj=================='+obj[entry._id][0]);
          console.log('==================exiting entry entryDate on new obj=================='+obj[entry._id][0].entryDate);
          console.log('==================entry we are currently on in loop=================='+entry);
          console.log('==================entry entryDate we are currently on in loop=================='+entry.entryDate);
          //SUCCESSFULLY GRABBING ENTRY DATE AND READY TO PLUG IN COMPARISON 
          compareValues(obj[entry._id][0].entryDate, entry.entryDate);

          obj[entry._id].push(entry);
        }
      });
      return obj;
    }
    return reorder(array);
  }
}
