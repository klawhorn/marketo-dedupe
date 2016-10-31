var choose = require('./chooseValue.js');
var log = require('./logging.js');

module.exports = {
  filterForDupes : function (arr, prop, id) {
    var obj, reason, dupe_string, object_property;
    if (id===true) {
      obj = {
        'output_data_id' : {},
        'duplicate_id_data' : {}
      };
      reason = "MORE RECENT ENTRY WITH SAME ID IN DATABASE";
      dupe_string = 'duplicate_id_data';
      object_property = 'output_data' + prop;
    } else {
      obj = {
        'output_data_email' : {},
        'duplicate_data' : {}
      };
      reason = "MORE RECENT ENTRY WITH SAME EMAIL IN DATABASE";
      dupe_string = 'duplicate_data';
      object_property = 'output_data_' + prop;
    }
    arr.forEach(function (entry) {
      function filter () {
        log.appendReason(obj[object_property][entry[prop]][0], reason);
        log.duplicateEntry(prop, existing, current, entry[prop]);
        obj[dupe_string][entry[prop]].push(obj[object_property][entry[prop]].pop());
        obj[object_property][entry[prop]].push(entry);
      }
      if (!obj[object_property][entry[prop]]) {
        obj[object_property][entry[prop]] = [];
        obj[object_property][entry[prop]].push(entry);
      } else {
        var existing = obj[object_property][entry[prop]][0].entryDate;
        var current= entry.entryDate;
        if (choose.isSame(existing, current) || choose.isBefore(existing, current)) {
          if (obj[dupe_string][entry[prop]]) {
            filter();
          } else {
            obj[dupe_string][entry[prop]] = [];
            filter();
          }
        } else {
          log.appendReason(entry, reason);
          log.duplicateEntry(prop, existing, current, entry[prop]);
          obj[dupe_string][entry[prop]].push(entry);
          return;
        }
      }
      });
      return obj;
  }
}
