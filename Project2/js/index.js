const submit = document.querySelector('#submit')
const chalList = document.querySelector('.challangers')
const inputName = document.querySelector('#name')
const socialMedia = document.querySelector('#socialMedia')
const stat = document.querySelector('.stat')
const containers = document.querySelectorAll('.container')
const drags = document.querySelectorAll('.draggable')
const start = document.querySelector('#start')



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

submit.addEventListener("click", addChallenger, false);


function template(data) {
    start.insertAdjacentHTML("afterbegin",`
        <div class="draggable" draggable="true">
            <div class="newChallanger">
                <img src="${data.avatar}" alt="${data.name}">
                <div class="chalName">${data.name}</div>
                <div class="chalSoical">@${data.social}</div>
            </div>
        </div>
    `)
}

function addChallenger(event){

    //get the values

    const data = {
        avatar: "img/account.png",
        name: inputName.value,
        social: socialMedia.value
    }

    event.preventDefault();

    //if (inputName.value.length < 1 || socialMedia.value.length > 1) return;

    template(data);

    // reset imputs
    inputName.value = "";
    socialMedia.value = "";

    // save the challengers to the localstorage

    localStorage.setItem('imputChallangers', chalList.innerHTML)

}

function changeStat(event){
    if (event.value = "Follow up"){
        this.value = "Talked to"
    }
}

  // get the local storage 

const saved = localStorage.getItem('imputChallangers')

  // putting that local storage into the page

if (saved) {
    chalList.innerHTML = saved
}

/*     challengers.name = name
    challengers.socialMedia = socialMedia 

    items.push(challengers)
    localStorage.setItem('list', JSON.stringify(items))
    let list = localStorage.getItem('list');

    console.log(list) */



