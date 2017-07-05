var e_no=new Array();
var names=new Array();
var surname=new Array();
var myArray = [ e_no, names, surname ];
function insert(){
    var e_Value = document.getElementById('e_no').value;
    var e_name_Value = document.getElementById('e_name').value;
    var Sur_Value = document.getElementById('Surname').value;
    e_no[e_no.length]=e_Value;
    names[names.length]=e_name_Value;
    surname[surname.length]=Sur_Value;
  }
  function show() {
  var content="<b>All Elements of the Arrays :</b><br>";
  for(var i = 0; i < e_no.length; i++) {
     content +=e_no[i];
  }
  for(var i = 0; i < names.length; i++) {
     content +=names[i];
  }
  for(var i = 0; i < surname.length; i++) {
     content +=surname[i];
  }
  content= myArray;
  document.getElementById('display').innerHTML = myArray;

}
