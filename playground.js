var readFile = require('./js/dedupe.js');
var write = require('./js/writeFile.js');
var file = process.argv[2].toString();

write.writeFile('soureData.json', file);
readFile.deduplicate(file);

// var orderID = new Promise(function(resolve, reject) {
//   resolve(reorderID.reOrder(file_data, '_id'));
// });
//
// orderID.then(function(ordered_id_object) {
//   var filtered_by_id = reset.resetFormat(ordered_id_object);
//   return filtered_by_id;
// }).then(function(filtered_by_id) {
//   var ordered_email_object = reorderID.reOrder(filtered_by_id, 'email');
//   return ordered_email_object;
// }).then(function(ordered_email_object) {
//   var filtered_by_email = reset.resetFormat(ordered_email_object);
//   return filtered_by_email;
// }).then(function(filtered_by_email) {
//   write.writeFile('deduplicatedData.json', filtered_by_email);
// });
