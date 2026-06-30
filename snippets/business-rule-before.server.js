// WHERE: A Business Rule on table 'incident'. When: before. Insert/Update: checked.
// WHAT:  Server-side logic that runs AROUND a database write.
//        'current' = the record being saved; 'previous' = its prior state.
// WHEN options: before | after | async | display

(function executeRule(current, previous /*, gs */) {

  if (current.priority == 1) {
    current.work_notes = 'Auto-flagged as P1 by a business rule.';
  }
  // No current.update() here — a 'before' rule rides along with the save.

})(current, previous);

// Recursion trap: calling current.update() inside an AFTER rule on the same
// record re-triggers the rules -> infinite loop. In a BEFORE rule you never need it.
