function loadDoc(){
  const xhttp = new XMLHttpRequest();
  // xhttp.onload = function() {
  //   document.getElementById("demo").innerHTML = this.response;

  // }
  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200){
      console.log(this.getAllResponseHeaders());
    }
  }


  xhttp.open("POST", "http://localhost:5000/");
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
  xhttp.send("fname=Henry&lname=Ford");
}