function sendMail(){
    if(document.getElementById("fName").value == ""){
        document.getElementById("fNameErr").innerHTML = "<p class='text-dark fw-bold'>Invalid first name</p>";
    }
    else{
        document.getElementById("fNameErr").innerHTML = "";
    }

    if(document.getElementById("email").value == "" || isValidEmail(document.getElementById("email").value) == false){
        document.getElementById("emailErr").innerHTML = "<p class='text-dark fw-bold'>Invalid email address</p>";
    }
    else{
        document.getElementById("emailErr").innerHTML = "";
    }

    if(document.getElementById("service").value == ""){
        document.getElementById("serviceErr").innerHTML = "<p class='text-dark fw-bold'>Invalid service</p>";
    }
    else{
        document.getElementById("serviceErr").innerHTML = "";
    }

    if(document.getElementById("fName").value != "" && document.getElementById("email").value != "" && document.getElementById("service").value != ""){
        var params = {
            fName: document.getElementById("fName").value,
            lName: document.getElementById("lName").value,
            email: document.getElementById("email").value,
            service: document.getElementById("service").value,
            message: document.getElementById("message").value,
        };
    
        document.getElementById("fName").value = "";
        document.getElementById("lName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("service").value = "";
        document.getElementById("message").value = "";
            
        const serviceID = "service_20ayxs6";
        const templateID = "template_jadsksr";
        
        emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("response").innerHTML = "<div class='alert alert-success' role='alert'>Thank you for your message!</div>";
        })
        .catch((err) => console.log(err));
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}