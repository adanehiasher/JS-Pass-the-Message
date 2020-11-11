let formBox = document.querySelector('#input-text');
let status = document.querySelector('.status');
const submitBtn = document.querySelector('#submit-btn');

//console.log(formBox);  //Get the txt content of the input form...


submitBtn.addEventListener('click', function(event){ 
    event.preventDefault();
  

    let value = formBox.value;

    if(value){
        status.innerText = formBox.value;
        formBox.value = "";
    }else if(value == ""){
        
        status.innerText = "shut tf up, type in the box";
    }
    

    //console.log('Jumanji');
})
