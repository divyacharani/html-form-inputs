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
            NameError.textContent = "Name is Invalid!";
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
            emailError.textContent = "Email is Invalid!";
    });
}

{
    const tel = document.querySelector('#tel');
    const telError = document.querySelector('.tel-error');
    tel.addEventListener('input', function () {
        let phoneRegex = RegExp('^[0-9]{2}[\\s][0-9]{10}$');
        if (phoneRegex.test(tel.value))
            telError.textContent = "";
        else
            telError.textContent = "Telephone number is Invalid!";
    });
}

{
    const pwd = document.querySelector('#pwd');
    const pwdError = document.querySelector('.pwd-error');
    pwd.addEventListener('input', function () {
        let passwordRegex = RegExp('(?=\\S{8,})(?=\\S*[0-9])(?=\\S*[A-Z])[\\w]*[^\\w\\s][\\w]');
        if (passwordRegex.test(pwd.value))
        pwdError.textContent = "";
        else
        pwdError.textContent = "Password is Invalid!";
    });
}
