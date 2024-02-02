
const navbar = document.getElementById('nav-bar')
window.addEventListener('scroll', () => {
    if (window.scrollY > 120) {
        navbar.style.backgroundColor = `rgb(${6}, ${1}, ${7})`
        
    } else {
        navbar.style.backgroundColor = 'transparent'
    }
})

const icon = document.querySelector('.icon');
icon.addEventListener('click',function() {
    if (document.body.style.backgroundColor=='rgb(17, 17, 17)') {
        document.body.style.backgroundColor = 'white'
    }
    else {
        document.body.style.backgroundColor = 'rgb(17, 17, 17)'
    }
})
// const bgColor = document.querySelector(bgColor);
const icon1 = document.querySelector('.icon1');
icon1.addEventListener('click',function() {
    if (document.body.style.backgroundColor=='bgSecondaryColor') {
        document.body.style.backgroundColor = 'white'
        console.log('goed');
    }
    else {
        document.body.style.backgroundColor = 'bgSecondaryColor'
    }
})