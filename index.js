//document.getElementById('count-el').innerHTML =5;


let count = 0;
let countEl = document.getElementById("count-el")
let saveparEl = document.getElementById("save-par")

function setcount(){
    count= count+1
    countEl.innerText=count

}

function save(){
 let countStr = count + " - "
 saveparEl.textContent += countStr
 count=0;
 countEl.textContent =count
}

