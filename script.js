const fname = document.querySelector('.fname');
const lname = document.querySelector('.lname');
const gmail = document.querySelector('.gmail');
const pass = document.querySelector('.pass');
const start = document.querySelector('.start')
const check = document.querySelector('.check')
const sUp = document.querySelector('.sUp')
const modalWindow = document.querySelector('.window')
let firstName = false;
let LasttName = false;
let gmailAddress = false;
let password = false;
fname.addEventListener('input', () => {
    let nameValue = document.querySelector('.fname').value;
    const nameRegExp = /\w{2,}/
    if(nameRegExp.test(nameValue)){
        fname.style.border = '1px solid green'
        let krest = document.querySelectorAll('.krest')
        let galka = document.querySelectorAll('.galka')
        galka[0].style.display = 'initial'
        krest[0].style.display = 'none'
        firstName = true
    } else {
        fname.style.border = '1px solid red'
        let galka = document.querySelectorAll('.galka')
        let krest = document.querySelectorAll('.krest')
        krest[0].style.display = 'initial'
        galka[0].style.display = 'none'
    }
})
lname.addEventListener('input', () => {
    let lNameValue = document.querySelector('.lname').value;
    const nameRegExp = /\w{2,}/
    if(nameRegExp.test(lNameValue)){
        lname.style.border = '1px solid green'
        let krest = document.querySelectorAll('.krest')
        let galka = document.querySelectorAll('.galka')
        galka[1].style.display = 'initial'
        krest[1].style.display = 'none'
        LasttName = true
    } else {
        lname.style.border = '1px solid red'
        let galka = document.querySelectorAll('.galka')
        let krest = document.querySelectorAll('.krest')
        krest[1].style.display = 'initial'
        galka[1].style.display = 'none'
    }
})
gmail.addEventListener('input', () => {
    let gmailValue = document.querySelector('.gmail').value;
    const gmailRegExp = /\w@gmail.com$/
    if(gmailRegExp.test(gmailValue)){
        gmail.style.border = '1px solid green'
        let krest = document.querySelectorAll('.krest')
        let galka = document.querySelectorAll('.galka')
        galka[2].style.display = 'initial'
        krest[2].style.display = 'none'
        gmailAddress = true
    } else {
        gmail.style.border = '1px solid red'
        let galka = document.querySelectorAll('.galka')
        let krest = document.querySelectorAll('.krest')
        krest[2].style.display = 'initial'
        galka[2].style.display = 'none'
    }
})
pass.addEventListener('input', () => {
    let lNameValue = document.querySelector('.pass').value;
    const passRegExt = /\w{5,}/
    if(passRegExt.test(lNameValue)){
        pass.style.border = '1px solid green'
        let krest = document.querySelectorAll('.krest')
        let galka = document.querySelectorAll('.galka')
        galka[3].style.display = 'initial'
        krest[3].style.display = 'none'
        password = true
    } else {
        pass.style.border = '1px solid red'
        let galka = document.querySelectorAll('.galka')
        let krest = document.querySelectorAll('.krest')
        krest[3].style.display = 'initial'
        galka[3].style.display = 'none'
    }
})
check.addEventListener('click', () => {
    check.checked && firstName && LasttName && gmailAddress && password ? sUp.disabled = false : sUp.disabled = true
})
sUp.addEventListener('click', () => {
    modalWindow.style.display = 'block';
    document.querySelector('body').style.backgroundColor = 'gray'
})
start.addEventListener('click', () => {
    modalWindow.style.display = 'none';
    document.querySelector('body').style.backgroundColor = 'white'
    document.querySelector('.fname').value = ''
    document.querySelector('.lname').value = ''
    document.querySelector('.gmail').value = ''
    document.querySelector('.pass').value = ''
    check.checked = false
    document.querySelectorAll('.galka').forEach((e) => e.style.display = 'none')
    fname.style.border = '1px solid black'
    lname.style.border = '1px solid black'
    gmail.style.border = '1px solid black'
    pass.style.border = '1px solid black'
})
