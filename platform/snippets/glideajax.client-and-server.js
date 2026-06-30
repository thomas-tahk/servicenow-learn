// WHAT: A Client Script can't query the database (it's in the browser). When it needs
//       server data it calls a Script Include via GlideAjax. This pairing is heavily tested.
// Two pieces below — paste each into the place noted.

// ===========================================================================
// PIECE 1 — SERVER: a client-callable Script Include.
// WHERE: Script Include named 'IncidentUtils', "Client callable" checked.
// ===========================================================================
var IncidentUtils = Class.create();
IncidentUtils.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {

  getOpenCountForCaller: function() {
    var caller = this.getParameter('sysparm_caller');   // value sent by the client
    var ga = new GlideAggregate('incident');            // efficient COUNT, no row loop
    ga.addQuery('caller_id', caller);
    ga.addQuery('active', true);
    ga.addAggregate('COUNT');
    ga.query();
    return ga.next() ? ga.getAggregate('COUNT') : '0';  // returned to the client
  },

  type: 'IncidentUtils'
});

// ===========================================================================
// PIECE 2 — BROWSER: a Client Script that calls it.
// WHERE: Client Script, Type: onChange, Field: caller_id, Table: incident.
// ===========================================================================
function onChange(control, oldValue, newValue, isLoading) {
  if (isLoading || newValue === '') return;

  var ga = new GlideAjax('IncidentUtils');              // name of the Script Include
  ga.addParam('sysparm_name', 'getOpenCountForCaller'); // method to run
  ga.addParam('sysparm_caller', newValue);              // arg -> this.getParameter(...)
  ga.getXMLAnswer(function(answer) {                    // async — runs when the server replies
    if (parseInt(answer, 10) > 5) {
      g_form.addInfoMessage('Heads up: this caller already has ' + answer + ' open incidents.');
    }
  });
}

// Gotchas:
//  (1) Custom param names MUST start with sysparm_.
//  (2) In a SCOPED app, extend global.AbstractAjaxProcessor (cross-scope), as shown.
//  (3) GlideAjax is ASYNC — handle the result in the callback, not on the next line.
