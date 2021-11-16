var button = document.getElementById("numero"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = count;
};

var menos = document.getElementById("menos"),
  count = 0;
menos.onclick = function() {
  count -= 1;
  button.innerHTML = count;
};

var reset = document.getElementById("reset"),
 count = 0;
reset.onclick = function() {
  count = 0;
  button.innerHTML = count;
};

var establecer = document.getElementById("establecer");
establecer.onclick = function() {
  var establecernro = document.getElementById("establecernro").value;
  count = Math.floor(establecernro);
  button.innerHTML = count;
};