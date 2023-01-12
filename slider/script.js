const imagelIST = ["https://bit.ly/3ErcUSy",
"https://bit.ly/3MbRAlX", 
"https://bit.ly/3ylAwUY",
"https://bit.ly/3CI0xQR",
"https://bit.ly/3fMKyI9", 
]
for(let i = 0; i < imagelIST.length; i++){
    const slide = document.createElement('div');
    slide.classList.add("slide")
    slide.style.backgroundImage = `url(${imagelIST[i]})`
    document.getElementById("container").appendChild(slide)    
}
const body = document.body
const slides = document.querySelectorAll('.slide')
const leftbtn = document.getElementById('left')
const rightbtn = document.getElementById('right')




let count = 0

rightbtn.addEventListener('click',()=>{
    count++
    if(count>slides.length-1){
        count = 0
    }
    setbg()
    setActive()
})
leftbtn.addEventListener('click',()=>{
    count--
    if(count<0){
        count = slides.length - 1
    }
    setbg()
    setActive()
})

function setbg() {
    body.style.backgroundImage = slides[count].style.backgroundImage
}

function setActive(){
    slides.forEach(slide => {
        slide.classList.remove('active')
    })
    slides[count].classList.add('active')
}