const tagsEl = document.getElementById('tags')
const texarea = document.getElementById('textarea')


texarea.focus()

texarea.addEventListener('keyup',(e)=>{
    createTags(e.target.value)
    if(e.key === "Enter"){
        setTimeout(()=>{
            e.target.value=""
        }, 10)
        randomselect()
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim()!== "").map(tag=>tag.trim())
    tagsEl.innerHTML = ''
    tags.forEach(tag => {
        const tagEL = document.createElement('span')
        tagEL.classList.add('tag')
        tagEL.innerHTML = tag
        tagsEl.appendChild(tagEL)
        
    });
  }

function randomselect(){
    const times = 30 
    const interval = setInterval(()=>{
        const randomtag = pickrandomtag()
        highlighttag(randomtag)
        setTimeout(()=>{
            unhighlighttag(randomtag)

        },100)
        
    },100);
    setTimeout(()=>{
        clearInterval(interval)
        setTimeout(()=>{
            const randomtag = pickrandomtag()
            highlighttag(randomtag)
        },100)

    },times*100)
    

}

function pickrandomtag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random()*tags.length)]
}

function highlighttag(tag){
    tag.classList.add("highlight")
}

function unhighlighttag(tag){
    tag.classList.remove("highlight")
}