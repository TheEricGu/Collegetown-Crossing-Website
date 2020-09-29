$('a[href*="#"]')
  .on('click', function (event) {
    if (this.hash !== "") {
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 100
      }, 800, function () {
        if (history.pushState) {
          history.pushState(null, null, hash);
        } else {
          window.location.hash = hash;
        }
      });
      return false;
    }
  });