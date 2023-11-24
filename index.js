function getEmail(){
    let Em = document.getElementById("emailss").value
    let Pass = document.getElementById("pass").value
    let ConPass = document.getElementById("conpass").value
    let Account = {}
    if (ConPass = Pass) {
        

        Account = {
            Name: Em,
            Password: Pass,
            
        }

        window.location.replace("Main.html")
        return Account
    };
}
