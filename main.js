function printValue(){
  var input = document.getElementById('input');
  var input1 = document.getElementById('input1');
  var input2 = document.getElementById('input2');
  var container = document.getElementById('container');

  container.innerHTML ="<h1>"+ input.value+"</br>"+input1.value+"</br>"+
  input2.value+"</h1>" ;
}
