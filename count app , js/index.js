let count = 0 
 let countEl = document.getElementById("count-el")

function increment() {
    count += 1
    countEl.textContent = count
    

}
let saveEl = document.getElementById("save-el")



function save() {
    let both = count +  " - "
    saveEl.textContent += both
    
   
    countEl.textContent = 0;
    count = 0



}



