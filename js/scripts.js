/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    
    const now = new Date();
    const past = new Date('2021-04-15');
    const diff = Math.abs(now.getTime() - past.getTime());
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    const years = Math.ceil(diff / (1000 * 60 * 60* 24 * 365));
    const minuts = Math.ceil(diff / (1000));

    var tempo_nbs = document.getElementById("tempo-nbs");
    tempo_nbs.textContent = '2021 Presente('+years+' anos, '+  days+' dias)'
    
    function relogio() {
        var horaatual = document.getElementById("hora-atual");
        const hora = new Date()
        horaatual.textContent = hora.toLocaleString()
      }

      setInterval(relogio, 1000);

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
