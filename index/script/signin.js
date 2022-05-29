document.querySelector("button").addEventListener("click", signin);
var regdUser = JSON.parse(localStorage.getItem("userData"));
function signin() {
  var email = document.querySelector("#email").value;
  var pass = document.querySelector("#pass").value;
  for (var i = 0; i < regdUser.length; i++) {
    if (regdUser[i].emailAddress == email && regdUser[i].passWord == pass) {
      window.location.href = "product.html";
    }
  }
}