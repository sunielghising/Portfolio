// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


//navbar active link
$(document).ready(function () {

           $('li.nav-item>a')
                   .click(function (e) {
               $('li.nav-item>a')
                   .removeClass('active');
               $(this).addClass('active');
           });
       });

//loop of job-roles
var example = [
  'front-end',
  'back-end',
  'full-stack',
  'mobile app'
];
textSequence(0);

function textSequence(i) {

  if (example.length > i) {
    setTimeout(function() {
      $(".role").text(example[i]);
      textSequence(++i);
    }, 1500); // 1 second (in milliseconds)

  } else if (example.length == i) { // Loop
    textSequence(0);
  }

}
