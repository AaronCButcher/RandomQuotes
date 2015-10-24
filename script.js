var arr= new Array();
arr.push("Vanilla Ice is so coool Bro  "+ " : Aaron");
arr.push("I pity the fool that doesn't like cracker jacks " + " : Aaron");
arr.push("Ever danced with the devil in the pale moon light " + " : Batman 1989");
arr.push("Soo hot want to touch the hinny    " + " : Billy Madison");
arr.push("I was inverted    " + " : Mavrick");
arr.push("Lets see if you assholes can do 90    " + " : Marty McFly");
arr.push("Nice @$#%ing model    " + " : Beetlejuice");
function rotate()
{
var num= Math.round(Math.random()*6);
add(num);
}
function add(i)
{
var chi = document.createTextNode(arr[i]);
var tab1 = document.getElementById("add1");
while(tab1.hasChildNodes())
{
tab1.removeChild(tab1.firstChild);
}
tab1.appendChild(chi);
}
twttr.ready
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
 
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
 
  return t;
}(document, "script", "twitter-wjs"));
