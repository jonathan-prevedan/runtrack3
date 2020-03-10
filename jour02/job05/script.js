var footer = document.getElementById("footer")

window.onscroll = function() {progressscroll()};

function progressscroll() 
{
  var windowscroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (windowscroll / height) * 100;
  footer.style.width = scrolled + "%";

  console.log(document.documentElement.clientHeight);
}