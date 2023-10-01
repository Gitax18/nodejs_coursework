const doneBtn = document.querySelectorAll('.todo-done');
const hamMenuBtn = document.querySelector('.ham');
const navbar = document.querySelector('.nav-elements');

doneBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        if(btn.textContent === '✓') btn.textContent = '✗';
        else btn.textContent = '✓';
    
        btn.closest('.todo-item').classList.toggle('done')
    })
})


hamMenuBtn.addEventListener('click', ()=>{
    let type = hamMenuBtn.name;

    if (type === 'menu-outline') hamMenuBtn.name = 'close-outline';
    else hamMenuBtn.name = 'menu-outline';

    navbar.classList.toggle('active')
})

