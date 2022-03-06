function JAVASCRIPTTEST(){
    console.log("I AM SUIPPOSED TO PRINT YA KNOW");
    console.log("BLAME COLIN IF I DON'T PRINT");
}

function updateStudentInfo(){
    //alert("FIX ME FOR EACH STUDENT");

    var studentID = document.getElementById('Student_1');
    alert("Is this the student you clicked? " + studentID.id);

    var firstName = window.prompt("Enter student First Name");
    alert("Your name is " + firstName);

    var lastName = window.prompt("Enter student Last Name");
    alert("Your name is " + lastName);
    
   
}
//Need to make constructors and deconstructors to track how many