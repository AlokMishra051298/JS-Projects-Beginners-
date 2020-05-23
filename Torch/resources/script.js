function changeColor(){
  var btn = document.querySelector("button");
  const btnClass = btn.getAttribute("class");
  if(btnClass === "btn-on"){
 btn.innerText = "ON";
    document.querySelector("body").setAttribute("class", "light");
      btn.setAttribute("class", "btn-off");
    }
    else{
      document.querySelector("body").setAttribute("class", "dark");
      btn.setAttribute("class", "btn-on");
      btn.innerText = "OFF";
    }
}
