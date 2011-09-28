var inputjaar    = prompt("Uw geboortejaar");
var inputmaand   = prompt("Uw geboortemaand");
var inputdag     = prompt("uw geboortedag");

var jaar         = parseInt(inputjaar);
var maand        = parseInt(inputmaand) - 1;                     
var dag          = parseInt(inputdag);

var inputDate = new Date(jaar, maand, dag);
alert(inputDate.toString());

var rightNow = new Date();

