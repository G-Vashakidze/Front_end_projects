const smalls = document.querySelectorAll(".glass-small")
const liters = document.getElementById('litter')
const prc = document.getElementById('percentage')
const remained = document.getElementById('remained')




smalls.forEach((glass,idx)=>{
    glass.addEventListener('click', ()=>highlightglass(idx))
})

function highlightglass(idx) { 
    console.log(idx)
    if(smalls[idx].classList.contains('full') &&  smalls[idx].nextElementSibling===null){
        idx--
    }
    if(smalls[idx].classList.contains('full') && ! smalls[idx].nextElementSibling.classList.contains('full')){
        idx--
    }
    
    smalls.forEach((glass, indx)=>{
        if(indx <= idx){
            glass.classList.add('full')
        }else{
            glass.classList.remove('full')
        }
    })
    updateBigGlass()
 }

function updateBigGlass() {
    const fullgl = document.querySelectorAll('.glass-small.full').length
    const allofthem = smalls.length
    if(fullgl===0){
        prc.style.visibility = 'hidden'
        prc.style.height = 0

    }else{
        prc.style.visibility = 'visible'
        prc.style.height = `${fullgl/allofthem*330}px`
        prc.innerText = `${fullgl/allofthem*100}%`
    }
    if(fullgl===allofthem){
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    }else{
        remained.style.visibility = 'visible'
        liters.innerText = `${2-(250*fullgl/1000)}liters`
    }
}