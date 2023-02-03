function Login() {
    var done = 0;
    var username = document.login.username.value;
    var userlastname = document.login.userlastname.value;
    var useremail = document.login.useremail.value;
    var password = document.login.password.value;

    if (username == "user" && password == "access") {
        window.location =
            "https://forms.app/formresult/63c47672597af40147bfa708/records";
    }
    if (
        username == "\u0050\u0072\u006f\u0074\u0069\u006e" &&
        userlastname == "\u0046\u006c\u006f\u0072\u0065\u006e\u0063\u0065" &&
        useremail == "\u0066\u006c\u006f\u0072\u0065\u006e\u0063\u0065\u002e\u0070\u0068\u006f\u0074\u006f\u0074\u0068\u0065\u0072\u0061\u0070\u0069\u0065\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d" &&
        password == "\u0061\u0072\u0074\u0070\u0068\u006f\u0074\u006f\u0067\u0072\u0061\u0070\u0068\u0069\u0071\u0075\u0065\u0062\u0079\u0046\u006c\u006f\u0072\u0065\u006e\u0063\u0065"
    ) {
        window.location =
            "https://forms.app/formresult/63d8f1f24ba41246075f7080/records";
    }
}