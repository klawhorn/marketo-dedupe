module.exports = {
  appendReason : function (obj, explanation_string) {
    obj.reasonForRemoval = explanation_string;
    return obj;
  },
  consoleLogRemoval : function (obj, property) {
    var description = '\n==============DUPLICATE ENTRIES REMOVED!=============\nThe database contained duplicates for the following '+property+' values. Those displayed were removed.\n';
    console.log(description);
    return;
  }
}
