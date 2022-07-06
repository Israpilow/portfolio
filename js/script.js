window.addEventListener('DOMContentLoaded', () => {
    //Гамбургер
    const hamburgerBtn = document.querySelector('.hamburger'),
          headerMobile = document.querySelector('.header-mobile');

    hamburgerBtn.addEventListener('click', () => {
        headerMobile.classList.toggle('header-mobile__active');
        hamburgerBtn.classList.toggle('hamburger__active');
    });

	//Аккордеон
    const privacyBtn = document.querySelectorAll('.privacy__item');
          
    privacyBtn.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target) {
                item.classList.toggle('active')
            }
            
        });
    });

    //Плавная прокрутка
    document.querySelectorAll('a.header__link').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            const href = item.getAttribute('href').substring(1);

            const scrollTarget = document.getElementById(href);

            const elementPosition = scrollTarget.getBoundingClientRect().top;

            const offsetPosition = elementPosition;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });

        });
    });

    // Mouse

    const curs = document.querySelector('.cursor');

    window.addEventListener('mousemove', (e) => {
        let x = e.pageX;
        let y = e.pageY;

        curs.style.left = (x - 22) + 'px';
        curs.style.top = (y - 22) + 'px';
    });


    //Перезагрузка без обновления страницы
    $('form').submit(function (e) { 
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "telegram.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.s').fadeOut();
    
            $('form').trigger('reset');
        });
        return false;
    });

});

