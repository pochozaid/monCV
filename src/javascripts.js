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
  var elm=document.getElementById(id);
  var list = document.getElementsByClassName("agrandir");
  [].forEach.call(list, function (i) {i.classList.remove("agrandir");
  if(i!==elm)
  i.style.display="none";
  });
  if(elm.style.display == 'none'){
  elm.classList.add("agrandir");
  elm.style.display='inline';
  }
  else{
  elm.style.display='none';
  } 
  var myAwesomeVar = 1;

  let timerId = setInterval(function (){var i=0;list[i].style.fontSize= myAwesomeVar++ + "px";i++;}, 60);
  // after 2 seconds stop
  setTimeout(() => { clearInterval(timerId);}, 1000);
}