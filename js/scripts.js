console.log("Hello world");

const data={
    email: ""
}
//Select id to listen
const email_input = document.querySelector('#email');

//Select id to edit
const email_field = document.querySelector('.field');
//read input while writing
email_input.addEventListener('input', readText);

function readText(event){
    data[event.target.id] = event.target.value;

}

//select form
const form=document.querySelector('.form');

//wait for submit buton pressed
form.addEventListener('submit', function(event){
    event.preventDefault();

    //validate form
    const {email} =data;
    const at = email.lastIndexOf('@');
    const dot = email.lastIndexOf('.');

    if (email ===''){
        showAlert('Whoops! It looks like you forgot to add your email');   
        return;
    }else if(at <= 0 || dot < (at + 1) || dot >= (email.length - 1)){
        showAlert('Please provide a valid email address');
        return;
    }
    console.log('Sending message');
});

function showAlert(error){

    //create Alert
    const alert = document.createElement('P');
    alert.textContent= error;
    alert.classList.add('error_text');
    email_input.classList.add('border_error')
    email_field.appendChild(alert);

    setTimeout(() => {
        alert.remove();
        email_input.classList.remove('border_error')            
    }, 3000);

}