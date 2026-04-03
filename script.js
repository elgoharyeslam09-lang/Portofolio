const skillFills = document.querySelectorAll('.progress-line span');

window.addEventListener('load', () => {
    skillFills.forEach(skill => {
        const targetWidth = skill.style.width;
        skill.style.width = '0';
        
        setTimeout(() => {
            skill.style.width = targetWidth;
        }, 500);
    });
});

const darkModeBtn = document.querySelector('.dark-mode-toggle');
const body = document.body;

darkModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    const icon = darkModeBtn.querySelector('i');
    if(body.classList.contains('dark-theme')) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});