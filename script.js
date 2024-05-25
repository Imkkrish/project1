
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const svgContainer = document.querySelector('.svg-container');
    const svgElement = document.getElementById('mySVG');
    const navButtons = document.querySelector('.nav-buttons');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (Math.abs(scrollTop - lastScrollTop) >= 80) {
        if (scrollTop < lastScrollTop) {
            document.body.classList.add('scrolled-up');
            svgElement.src = 'logo.svg';
            svgContainer.style.top = '50%';
            svgContainer.style.left = '50%';
            svgContainer.style.transform = 'translate(-50%, -50%)';
            svgContainer.style.width = '200px';
            svgContainer.style.height = '22px';
            navButtons.style.display = 'none'; 
        } else {
            document.body.classList.remove('scrolled-up');
            svgElement.src = 'navlogo.svg';
            svgContainer.style.top = '20px';
            svgContainer.style.left = '20px';
            svgContainer.style.transform = 'translate(0, 0)';
            svgContainer.style.width = '20px';
            svgContainer.style.height = '26px';
            navButtons.style.display = 'block'; 
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
    }
});
