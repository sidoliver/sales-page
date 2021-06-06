const btns = document.querySelectorAll('.form-btn')
const form = document.querySelector('.form-container')
const closeBtn = document.querySelector('.close-btn')
console.log(btns)
btns.forEach(btn => {
    btn.addEventListener('click',()=>{
        form.classList.add('show-form')
    })
})
closeBtn.addEventListener('click',()=> {
    form.classList.remove('show-form')
})