function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// typeing effect
if ($('#typeWritten h2').length == 1) {
  var typed_strings = $('#typeWritten .typed-text').text();
  var typed = new Typed('#typeWritten h2', {
      strings: typed_strings.split(', '),
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true
  });
}