// WHERE: All -> Scripts - Background  (server-side scratchpad)
// WHAT:  GlideRecord is the platform ORM — query/insert/update/delete records.
// gs.info() writes to the script output / system log.

// --- Query many rows: every open P1 incident ---
var gr = new GlideRecord('incident');
gr.addQuery('priority', 1);     // priority = 1 (Critical)
gr.addQuery('active', true);    // still open
gr.query();                     // run it against the database
while (gr.next()) {             // step through each matching row
  gs.info('Open P1: ' + gr.getValue('number') + ' — ' + gr.getValue('short_description'));
}

// --- Get ONE row by a unique value, then update it ---
var one = new GlideRecord('incident');
if (one.get('number', 'INC0010001')) {  // returns a boolean; positions you on the row
  one.setValue('priority', 1);
  one.update();                         // persist the change
}

// Gotchas the exam loves:
//  (1) query() returns MANY (loop with next()); get() returns ONE (a boolean).
//  (2) Use getValue('field') for the raw stored value; reading gr.field returns an object.
//  (3) gr.setWorkflow(false) before an update suppresses business rules for that operation.
