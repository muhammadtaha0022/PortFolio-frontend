const navLinks = document.querySelectorAll('header nav a ');
const logoLink = document.querySelector('.logo');
const section = document.querySelectorAll('section');
const menuicon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuicon.addEventListener('click', () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

const activepage = () => {
    const header = document.querySelector('header');
    const barsbox = document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    navLinks.forEach(link => {
    link.classList.remove ('active');
    });

    barsbox.classList.remove('active');
    setTimeout(() => {
        barsbox.classList.add('active');
    }, 1100);

    section.forEach(section => {
        section.classList.remove ('active');
        });
}
navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activepage();
            
            link.classList.add('active');

            setTimeout(() => {
                section[idx].classList.add('active');
            }, 1100);
        }
    });
});

logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activepage();
        navLinks[0].classList.add('active');

        setTimeout(() => {
            section[0].classList.add('active');
        }, 1100);
    }
})

const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) =>{
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll(".resume-detail");

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    })
})

const arrowright = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowleft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgslide = document.querySelector('.portfolio-carousel .img-slide');
    const portfoliodetail = document.querySelectorAll('.portfolio-detail');

    imgslide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
   
    portfoliodetail.forEach(detail =>{
        detail.classList.remove('active');
    });
    
    portfoliodetail[index].classList.add('active');

}

arrowright.addEventListener('click', () => {
    if (index < 4) {
        index++;
        arrowleft.classList.remove('disabled');
    }
    else {
        index = 5;
        arrowright.classList.add('disabled');
    }
    activePortfolio();
});

arrowleft.addEventListener('click', () => {
    if (index > 1) {
        index--;
        arrowright.classList.remove('disabled');
    }
    else {
        index = 0;
        arrowleft.classList.add('disabled');
    }
    activePortfolio();
});

const barsbox = document.querySelector('.bars-box');

barsbox.classList.remove('active');
    setTimeout(() => {
        barsbox.classList.add('active');
    }, 1100);