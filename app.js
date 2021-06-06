const btns = document.querySelectorAll('.form-btn')
const form = document.querySelector('.form-container')
const closeBtn = document.querySelector('.close-btn')
const closeMenu = document.querySelector('.close')
const burger = document.querySelector('.burger')
const navMenu = document.querySelector('.nav-list')
console.log(btns)
btns.forEach(btn => {
    btn.addEventListener('click',()=>{
        form.classList.add('show-form')
    })
})
closeBtn.addEventListener('click',()=> {
    form.classList.remove('show-form')
})

burger.addEventListener('click',() =>{
    navMenu.style.display = 'flex'
    burger.style.display = 'none'
    closeMenu.classList.add('close-show')
})
closeMenu.addEventListener('click',()=> {
    closeMenu.classList.remove('close-show')
    burger.style.display = 'block'
    navMenu.style.display = 'none'
})