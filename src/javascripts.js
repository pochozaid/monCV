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
var levels = {
  J2e : 3,
  Java : 5,
  C : 5,
  Python : 3,
  htmlcssjs : 4,
  PHP : 4,
  TSQLSQL : 5
};

for (field in levels) {
  var stars = document.getElementsByClassName(field).item(0);
  var children = stars.children;
  for (var i = 0; i < levels[field]; i++) {
    var star = children.item(i);
    star.className = "fas fa-star";
  }
}