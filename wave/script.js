const buttons = document.querySelectorAll('.ripple')

buttons.forEach(buttons => {
    buttons.addEventListener('click', function (e) {
        const x=e.clientX
        const y=e.clientyY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const x1 = x-buttonLeft
        const y1 = y-buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = y1 + 'px'
        circle.style.left = x1 + 'px'
        this.appendChild(circle)
        setTimeout(()=>circle.remove(), 500)
    })
})