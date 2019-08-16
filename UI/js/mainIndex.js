// OPEN/CLOSE MODAL

// Get modal elements
const signUpModalElements = document.getElementById('signUpModalElts');
const signInModalElements = document.getElementById('signInModal');


// Get open modal buttons
const signUpModalButtons = document.querySelectorAll('.signUpModal');
const signInModalButton = document.querySelector('.signInModal');


// Get close  mondal button
const closeMondalSignUpButton = document.querySelector('.closeModalButtonSignUp');
const closeMondalSignInButton = document.querySelector('.closeModalButtonSignIn');




//Fucntions to open modals
const openSignInModal = () =>{
    signInModalElements.style.display = 'block';
}
const openSignUpModal = () =>{
    signUpModalElements.style.display = 'block';
}

//Fucntions to close modals
const closeSignUpModal = () => {
    signUpModalElements.style.display = 'none';
}

const closeSignInModal = () => {
    signInModalElements.style.display = 'none';
}

const closeSignUpModalOut = (e) => {
    if (e.target == signUpModalElements) {
        signUpModalElements.style.display = 'none';
    }  
}

const closeSignInModalOut = (e) => {
    if (e.target == signInModalElements) {
        signInModalElements.style.display = 'none';
    }
}

// Listen upon click 
signUpModalButtons.forEach((item,index)=>{
    item.addEventListener('click', openSignUpModal);
});
signInModalButton.addEventListener('click', openSignInModal);
closeMondalSignUpButton.addEventListener('click', closeSignUpModal);
closeMondalSignInButton.addEventListener('click', closeSignInModal);
window.addEventListener('click', closeSignUpModalOut);
window.addEventListener('click', closeSignInModalOut);



