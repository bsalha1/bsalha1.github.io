
const USERNAME_TAKEN = 1;
const EMAIL_TAKEN = 2;
const PASSWORD_MISMATCH = 3;

function countCharLeft(val, target)
{
    const len = val.value.length;
    $(target).text((val.maxLength - len) + " characters left");
}

//
function handleErrors(errors, username, email)
{
    let emailField = $('#email');
    let usernameField = $('#username');

    usernameField.attr("value", username);
    emailField.attr("value", email);

    if(errors.indexOf(USERNAME_TAKEN) > -1)
    {
        console.log("username taken");
        usernameField.attr("value", "");
    }

    if(errors.indexOf(EMAIL_TAKEN) > -1)
    {
        console.log("email taken");
        emailField.attr("value", "");
    }
}

function gotoWebpage(link)
{
    window.location.href = link;
}

function gotoNewTab(link)
{
    window.open(link, '_blank')
}

