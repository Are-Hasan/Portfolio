const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset

    if(currentScroll <= 0) {
        body.classList.remove("scroll-up")
    }

    if(currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up")
        body.classList.add("scroll-down")
    }
    if(currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down")
        body.classList.add("scroll-up")
    }
// console.log(window.pageYOffset)


    lastScroll = currentScroll;
});


document.getElementById("btn").addEventListener('click',function() {
    document.querySelector('.container--form').style.display = 'flex';
})
document.getElementById("close").addEventListener('click',function() {
    document.querySelector('.container--form').style.display = 'none';
})

document.getElementById('icon').addEventListener('click', function(){
    document.querySelector('ul').classList.toggle('show');
})

//computer version
window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;
    let html = document.getElementById('html');
    if(window.innerWidth > 960 && scrollPos > 200){
        html.classList.add('active')
        return;
    }else{
        html.classList.remove('active')
        return;
    }
})
window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;
    console.log(scrollPos)
    let css = document.getElementById('css');
    if(window.innerWidth > 960 && scrollPos > 200){
        css.classList.add('active')
        return;
    }else{
        css.classList.remove('active')
        return;
    }
})
window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;
    // // console.log(scrollPos)
    let js = document.getElementById('js');
    if(window.innerWidth > 960 && scrollPos > 320){
        js.classList.add('is-active')
        return;
    }else{
        js.classList.remove('is-active')
        return;
    }
})
window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;
    // // console.log(scrollPos)
    let git = document.getElementById('git');
    if(window.innerWidth > 960 && scrollPos > 200){
        git.classList.add('active')
        return;
    }else{
        git.classList.remove('active')
        return;
    }
})

// mobile version
window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;
    // console.log(scrollPos)
    let html = document.getElementById('html');
    if(window.innerWidth < 960 && scrollPos > 360){
        html.classList.add('mobile-active')
        return;
    }else{
        html.classList.remove('mobile-active')
        return;
    }
})
window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;
    // // console.log(scrollPos)
    let css = document.getElementById('css');
    if(window.innerWidth < 960 && scrollPos > 380){
        css.classList.add('mobile-active')
        return;
    }else{
        css.classList.remove('mobile-active')
        return;
    }
})
window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;
    // // console.log(scrollPos)
    let js = document.getElementById('js');
    if(window.innerWidth < 960 && scrollPos > 390){
        js.classList.add('mobile-is-active')
        return;
    }else{
        js.classList.remove('mobile-is-active')
        return;
    }
})
window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;
    // // console.log(scrollPos)
    let git = document.getElementById('git');
    if(window.innerWidth < 960 && scrollPos > 400){
        git.classList.add('mobile-active')
        return;
    }else{
        git.classList.remove('mobile-active')
        return;
    }
})