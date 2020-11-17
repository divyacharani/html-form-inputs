{
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    });
}
{
    const name = document.querySelector('#name');
    const NameError = document.querySelector('.name-error');
    name.addEventListener('input', function () {
        let nameRegex = RegExp('^[A-Z][a-z]{2,}$');
        if (nameRegex.test(name.value))
            NameError.textContent = "";
        else
            NameError.textContent = "Name is Incorrect!";
    });
}
{
    const email = document.querySelector('#email');
    const emailError = document.querySelector('.email-error');
    email.addEventListener('input', function () {
        let emailRegex = RegExp('[\\w+_-]+(?:\\.[\\w_-]+)*@(?:[\\w]+\\.){1,2}[a-zA-Z]{2,}');
        if (emailRegex.test(email.value))
            emailError.textContent = "";
        else
            emailError.textContent = "Email is Incorrect!";
    });
}
