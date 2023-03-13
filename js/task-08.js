const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElrments = event.currentTarget.elements;
    
    const email = formElrments.email.value;
    const password = formElrments.password.value;

    if (email == "" || password == "") {
    return alert('Всі поля мають бути заповнені')};
    
    const formData = {
        email,
        password,
    };

    console.log(formData);

    event.currentTarget.reset();
}

