let selector = document.querySelectorAll('input[type="tel"]');

let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);

let validateForms = function(selector, rules, successModal, yaGoal) {
    new window.JustValidate(selector, {
        rules: rules,
        messages: {
            email: {
                required: 'Это поле обязательно',
                email: 'Введите корректный email'
            },
            tel: {
                tel: 'Введите корректный номер',
                required: 'Это поле обязательно'
            }
        },
        submitHandler: function(form) {
            let formData = new FormData(form);

            let xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log('Отправлено');
                    }
                }
            }

            xhr.open('POST', 'mail.php', true);
            xhr.send(formData);

            form.reset();
        }
    });
}

validateForms('.form', {email: {required: true, email: true}, tel: {required: true}}, '.thanks-popup', 'send goal');