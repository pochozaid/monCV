function affiche(id)
{  var elements;
  elements = document.getElementsByClassName("tout");
  if(document.getElementById(id).style.display==="none")
  {
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "none" ;
    }
    document.getElementById(id).style.display="block";
  }
  else
  {
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "none" ;
    }
    document.getElementById(id).style.display="none";
  }
  return true;
}
function Progressive(id) {
  var divid=document.getElementById(id);
  var list = document.getElementsByClassName("p2");
  [].forEach.call(list, function (i) {i.classList.remove("p2");
  if(i!==divid)
  i.style.display="none";
  });
  if(divid.style.display == 'none'){
  divid.classList.add("p2");
  divid.style.display='inline';
  }
  else{
  divid.style.display='none';
  } 
  var myAwesomeVar = 2;
  //let timerId = setInterval(function (){var liste = document.getElementsByClassName("p2");liste[0].style.fontSize= myAwesomeVar++ + "px";}, 50);

  //let timerId = setInterval(function (){[].forEach.call(list, function (i) {i.style.fontSize= myAwesomeVar + "px";myAwesomeVar++;})}, 150);

  let timerId = setInterval(function (){var i=0;list[i].style.fontSize= myAwesomeVar++ + "px";i++;}, 70);
  // after 2 seconds stop
  setTimeout(() => { clearInterval(timerId);}, 1000);
}