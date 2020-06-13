const drags = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

drags.forEach(drager => {
    drager.addEventListener('dragstart', () => {
        drager.classList.add('dragging')
    })
    drager.addEventListener('dragend', () => {
        drager.classList.remove('dragging')
    })
})

containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault()
        const drag = document.querySelector('.dragging')
        container.appendChild(drag)
    })
})

