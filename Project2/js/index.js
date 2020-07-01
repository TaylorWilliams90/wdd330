let submit = document.getElementById('submit')

let challengers = []

submit.addEventListener("click", addChallenger)

function addChallenger(){

    //get the values
    let name = document.getElementById('name').value
    let socialMedia = document.getElementById('socialMedia').value

    challengers.push(name)
    localStorage.setItem('list', JSON.stringify(challengers))
    let list = localStorage.getItem('myDataKey');

}

console.log(list)