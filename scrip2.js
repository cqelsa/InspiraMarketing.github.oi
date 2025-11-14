window.addEventListener('scroll', function() {

    let whatsappIcon = document.querySelector('.whatsapp-float');

    if (window.scrollY > 100) {

        whatsappIcon.style.opacity = "1";

        whatsappIcon.style.transform = "translateY(0)";

    } else {

        whatsappIcon.style.opacity = "0";

        whatsappIcon.style.transform = "translateY(100px)";

    }

});