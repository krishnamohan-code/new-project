console.log(window.innerWidth); 
/* SKILLS page script Started */
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    // var element = document.getElementsByClassName("myBar");
    var java = document.getElementsByClassName("myBar")[0];
    var python = document.getElementsByClassName("myBar")[1];
    var c = document.getElementsByClassName("myBar")[2];
    var html = document.getElementsByClassName("myBar")[3];
    var css = document.getElementsByClassName("myBar")[4];
    var javascript = document.getElementsByClassName("myBar")[5];
    var angularjs = document.getElementsByClassName("myBar")[6];
    var spring = document.getElementsByClassName("myBar")[7];
    var django = document.getElementsByClassName("myBar")[8];
    //  console.log(element.length);
    //  console.log(elem1);
    //  console.log(elem2);
    var width = 5;
    var id = setInterval(frame, 30);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;

        html.style.width = width-10 + "%";
        html.innerHTML = width-10 + "%";

        css.style.width = width-10 + "%";
        css.innerHTML = width-10 + "%";

        javascript.style.width = width-20 + "%";
        javascript.innerHTML = width-20+ "%";

         java.style.width = width-20 + "%";
         java.innerHTML = width-20 + "%";

         python.style.width = width-15 + "%";
         python.innerHTML = width-15 + "%";

         c.style.width = width-20 + "%";
         c.innerHTML = width-20 + "%";

         angularjs.style.width = width-30 + "%";
         angularjs.innerHTML = width-30 + "%";
          
         spring.style.width = width-30 + "%";
         spring.innerHTML = width-30 + "%"
        
         django.style.width = width-40 + "%";
         django.innerHTML = width-40 + "%";
      }
    }
  }
}