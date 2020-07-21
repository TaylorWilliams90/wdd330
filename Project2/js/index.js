let submit = document.getElementById('submit')

let challengers = {}
let items = []

submit.addEventListener("click", addChallenger)

function addChallenger(){

    //get the values
    let name = document.getElementById('name').value
    let socialMedia = document.getElementById('socialMedia').value
    challengers.name = name
    challengers.socialMedia = socialMedia 

    items.push(challengers)
    localStorage.setItem('list', JSON.stringify(items))
    let list = localStorage.getItem('list');

    console.log(list)

    
}

function listChallengers(list){


}

