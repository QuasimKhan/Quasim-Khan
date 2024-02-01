function sendEmail(){
    Email.send({
     SecureToken : "6b7a42ae-2d70-491b-b3d5-0575055e956d",
        To : "quasimkhanpersonl+education@gmail.com",
        From : "quasimkhanpersonal@gmail.com",
        // From : document.getElementById("email").value,
        Subject : "Enquiry Form From the Website",
        Body : "Name : " + document.getElementById("name").value 
        + "<br> Mobile Number : " + document.getElementById("number").value 
        + "<br> Message : " + document.getElementById("message").value 
    }).then(
      message => alert("Messege sent Sucessfully !")
    );
}