//Smooth scroll down to section thats clicked in nav-bar.

  document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.navList a');

    navLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();

        var targetId = link.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
