//navbar active link
$(document).ready(function () {

           $('ul.nav-list> li')
                   .click(function (e) {
               $('ul.nav-list> li')
                   .removeClass('active');
               $(this).addClass('active');
           });
       });


//loop of job-roles
var example = ['an undergraduate student.',
  'a front-end developer.',
  'a back-end developer.',
  'a full-stack developer.',
  'a mobile app developer.'
];
textSequence(0);

function textSequence(i) {

  if (example.length > i) {
    setTimeout(function() {
      $(".role").text("I am " + example[i]);
      textSequence(++i);
    }, 1500); // 1 second (in milliseconds)

  } else if (example.length == i) { // Loop
    textSequence(0);
  }

}
