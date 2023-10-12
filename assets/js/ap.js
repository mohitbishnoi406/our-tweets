$('.slick').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '.btn-next',
    nextArrow: '.btn-prev',
    responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 840,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                speed: 1000,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        }
    ]
});
$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '.next',
    nextArrow: '.prev',
    responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 840,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                speed: 1000,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        }
    ]
});


$('.slick2').slick({
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: 'Linear',
    slidesToShow: 8,
    slidesToScroll: 1,

    responsive: [{
        breakpoint: 1100,
        settings: {
            slidesToShow: 7,
            slidesToScroll: 1,
            autoplaySpeed: 0,
            cssEase: 'Linear',
            infinite: true,
            dots: false,
        }
    },
    {
        breakpoint: 900,
        settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            cssEase: 'Linear',
            speed: 1000,
        }
    },
    {
        breakpoint: 650,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplaySpeed: 0,
            cssEase: 'Linear',
        }
    },
    {
        breakpoint: 580,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplaySpeed: 0,
            cssEase: 'Linear',
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplaySpeed: 0,
            cssEase: 'Linear',
        }
    }
    ]
});

  


let AddBtn = document.querySelector(".add");
let SubBtn = document.querySelector(".sub");
let p = document.querySelector(".counting");
AddBtn.addEventListener("click", function () { p.innerHTML = +p.innerHTML + 1; SaveBtn.classList.remove("btn-disabled"); })
SubBtn.addEventListener("click", function () { p.innerHTML = +p.innerHTML - 1; SaveBtn.classList.remove("btn-disabled"); })
let time = document.querySelector("time");

var countDownDate = new Date("october 24, 2023 13:37:25").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML = days + " : " + hours + " : "
        + minutes + "  : " + seconds + "  ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);