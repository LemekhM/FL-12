const user = 'user@gmail.com';
let uPass = 'UserPass'
const admin = 'admin@gmail.com';
let aPass = 'AdminPass';
let password = '';
let changePass = '';
const visitor = prompt('Input email');

if (visitor === null || visitor === '') {
    alert('Canceled')
} else if (visitor.length < 5) {
    alert('I don’t know any emails having name length less than 5 symbols')
} else if (visitor === user || visitor === admin) {
    password = prompt('Input password')
} else {
    alert('I don’t know you')
}

if (visitor === user || visitor === admin) {
    if (password === null || password === '') {
        alert('Canceled')
    } else if (visitor === user && password === uPass || visitor === admin && password === aPass) {
        changePass = confirm('Do you want to change your password?')
    } else {
        alert('Wrong password')
    }
}

if (visitor === user && password === uPass || visitor === admin && password === aPass) {
    if (changePass === true) {
        password = prompt('Input old password');
        if (password === null || password === '') {
            alert('Canceled')
        } else if (visitor === user && password === uPass) {
            uPass = prompt('Input new password');
            let repeatPass = ''
            if (uPass === null || uPass === '') {
                alert('Canceled')
            } else if (uPass.length < 6) {
                alert('It’s too short password. Sorry.')
            } else {
                repeatPass = prompt('Enter it again')
            }
            if (repeatPass === uPass) {
                alert('You have successfully changed your password.')
            } else {
                alert('You wrote the wrong password.')
            }
        } else if (visitor === admin && password === aPass) {
            aPass = prompt('Input new password');
            let repeatPass = ''
            if (aPass === null || aPass === '') {
                alert('Canceled')
            } else if (aPass.length < 6) {
                alert('It’s too short password. Sorry.')
            } else {
                repeatPass = prompt('Enter it again')
            }
            if (repeatPass === aPass) {
                alert('You have successfully changed your password.')
            } else {
                alert('You wrote the wrong password.')
            }
        } else {
            alert('Wrong password')
        }
    } else if (changePass === false) {
        alert('You have failed the change.')
    }
}



