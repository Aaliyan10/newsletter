var defaul = document.querySelector(".default");
var success = document.querySelector(".success");
var email = document.querySelector("#mail");
document.querySelector("#submit").addEventListener("click", function () {
  var textBox = document.querySelector("#email-content");
  var errors = document.querySelector(".error");
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var text = textBox.value;
  if (text == "" || text == null) {
    errors.innerHTML = "No email entered";
  } else if (!emailPattern.test(text)) {
    errors.innerHTML = "Valid email required";
  }
  if (errors.innerHTML != "") {
    textBox.classList.add("fail");
  }
  if (text != "" && text != null && emailPattern.test(text)) {
    defaul.style.display = "none";
    success.style.display = "flex";
    email.innerHTML = "<b>" + text + "</b>";
    textBox.classList.remove("fail");
    errors.innerHTML="";
    textBox.value="";
  }
});
document.querySelector("#dismiss").addEventListener("click", function () {
  defaul.style.display = "flex";
  success.style.display = "none";
});
