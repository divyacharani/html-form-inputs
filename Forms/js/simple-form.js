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
