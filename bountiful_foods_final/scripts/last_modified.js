$(document).ready(function() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var lastMod = xhttp.getResponseHeader("Last-Modified");
      $("#last-modified").text("Last modified: " + lastMod);
    }
  };
  xhttp.open("HEAD", document.URL);
  xhttp.send();
});
