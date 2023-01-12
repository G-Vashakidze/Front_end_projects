const imagelIST = ["https://bit.ly/3ErcUSy",
"https://bit.ly/3MbRAlX", 
"https://bit.ly/3ylAwUY",
"https://bit.ly/3CI0xQR",
"https://bit.ly/3fMKyI9", 

]

const leftSide = document.querySelector(".leftDiv")
const rightSide = document.querySelector(".rightDiv")
const next = document.getElementById("right")
const prev = document.getElementById("left")
const imgs = document.querySelector(".image-container")

for(let i = 0; i < imagelIST.length; i++){
    const MyImage = document.createElement('img');
    MyImage.setAttribute('src', imagelIST[i]);
    MyImage.classList.add("img", `${i+1}`)
    document.getElementById("images").appendChild(MyImage)    
}

let count = 0

function change(){
    
    if(count > imagelIST.length -1){
        count = 0
    }else if(count < 0){
        count = imagelIST.length-1
    }
    imgs.style.transform = `translateX(${-count*800}px)`
}

next.onclick = ()=>{
    count+=1
    change()   
}

prev.onclick = ()=>{
    count-=1
    change()    
}

leftSide.onclick = ()=>{
    count-=1
    change()    
}

rightSide.onclick = ()=>{
    count+=1
    change()   
}




