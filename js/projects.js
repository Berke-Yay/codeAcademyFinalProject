function showDialog(show, index){
  let dialog =  document.querySelectorAll(".project > dialog")[index];
  show? dialog.showModal() : dialog.close();
}

let allRunProjectButtons =  document.querySelectorAll(".project > a");

allRunProjectButtons.forEach((button)=>{
  button.addEventListener('click', ()=>{
    document.getElementById(button.id+'-css').media = "all";
  });
});