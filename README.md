# marketo-dedupe

WELCOME TO THE JSON DEDUPLICATION MACHINE!

1. Create an empty folder on your machine, open terminal and cd into the empty folder.
3. To clone the repository, run in console: git clone 
4. Run in console: cd marketo-dedupe
5. Run in console: npm install
6. Run in console: node app.js <=<=<=insert absolute path to JSON file to deduplicate=>=>=>
7. To see example, run in console: node app.js leads.json
8. For test coverage run in console: npm run test

::Challenge Given::
Programming Challenge:
 Take a variable number of identically structured json records and de-duplicate the set.
 An example file of records is given in the accompanying 'leads.json'. Output should be same format, with dups reconciled according to the following rules:
  1. The data from the newest date should be preferred
  2. duplicate IDs count as dups. Duplicate emails count as dups. Both must be unique in our dataset. Duplicate values elsewhere do not count as dups.
  3. If the dates are identical the data from the record provided last in the list should be preferred

 Simplifying assumption: the program can do everything in memory (don't worry about large files)
 The application should also provide a log of changes including some representation of the source record, the output record and the individual field changes (value from and value to) for each field.
 Please implement as a command-line java program, or a javascript program.
