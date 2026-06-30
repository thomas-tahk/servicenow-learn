// WHERE: A Client Script. Type: onChange. Field: priority. Table: incident.
// WHAT:  Runs in the USER'S BROWSER via g_form — reacts as the user edits the form.
// Client Script types: onLoad | onChange | onSubmit | onCellEdit

function onChange(control, oldValue, newValue, isLoading) {
  if (isLoading || newValue === '') return;   // skip the initial form load

  if (newValue == '1') {                       // Priority set to Critical
    g_form.setMandatory('work_notes', true);
    g_form.addInfoMessage('P1 selected — work notes are now required.');
  }
}

// Client Script vs UI Policy: if you only need show/hide/make-mandatory based on a
// field value, prefer a UI Policy (no code, easier to maintain). Use a Client Script
// only for logic a UI Policy can't express (calculations, server calls, conditional messages).
