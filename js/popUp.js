let collectButton = document.querySelector('.collect');
let paymentPopUp = document.querySelector('.payment-method');
let collectCloseButton = document.querySelector('.close-collect');
let deletePopUp = document.querySelector('.delete-ticket');
let deleteButton = document.querySelector('.delete');
let deleteCloseButton = document.querySelector('.close-delete');

collectButton.addEventListener("click", () => {

    paymentPopUp.classList.add('active');

});

collectCloseButton.addEventListener("click", () => {
    
    paymentPopUp.classList.remove('active');

});


deleteButton.addEventListener("click", () => {

    deletePopUp.classList.add('active');

});

deleteCloseButton.addEventListener("click", () => {
    
    deletePopUp.classList.remove('active');

});
