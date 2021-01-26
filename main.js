// get variables and inputs
let  uname = document.querySelector("#uname");
let  email = document.querySelector("#email");
let  pass1 = document.querySelector("#pass1");
let  pass2 = document.querySelector("#pass2");
let  age = document.querySelector("#Age");
let form = document.querySelector("#classmateform");
let error = document.querySelectorAll("p.error");
let errors = {
    unameerr: false,
    pass1err: false,
    pass2err: false,
    emailerr: false,
    age: false
};

// add event listener
form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkName();
    checkPass1();
    checkPass2();
    console.log("form submitted");
})

// Update DOM


// Perform function
function checkName() {
    if (uname.value.length < 5 || uname.value.length > 20) {
        errors.unameerr = true;
        error[0].style = "display: initial";
    } else {
        errors.unameerr = false;
        error[0].style = "display: none";
    }

    if (validEmail(email) == false) {
        errors.emailerr = true;
        error[1].style = "display: initial";
    } else if (validEmail(email) == true){
        console.log("valid email"); 
        errors.emailerr = false;
        error[1].style = "display: none";
    }

    
    
}

function checkPass1() {
    if (pass1.value.length < 10 || pass1.value.length > 20) {
        errors.pass1err = true;
        error[2].style = "display: initial";
    } else {
        errors.pass1err = false;
        error[2].style = "display: none";
    }
}

function checkPass2() {
    if (pass1.value.trim() != pass2.value.trim()) {
        errors.pass2err = true;
        error[3].style = "display: initial";
    } else {
        errors.pass2err = false;
        error[3].style = "display: none";
    }
}

function checkLength(){
    let passlen = pass1.value.length;
    let percent = (passlen / 10) * 100;
    let progressbar = document.querySelector(".progress-bar");
    progressbar.style = "width: " + percent + "%";
    if (percent >=   100 && percent <= 200) {
        progressbar.classList.add("bg-success");
        progressbar.classList.remove("bg-danger");
    } else if(percent > 200) {
        progressbar.classList.add("bg-danger");
        progressbar.classList.remove("bg-success");
    } else if (percent  )
    console.log(percent); 
}

function validEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}   

console.log("this is Trong");