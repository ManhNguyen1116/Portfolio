//initializes controllers
const initControllers = function(){
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", submitEvent);
}

//submit event -- set HTTP attributes for the contact form
const submitEvent = function(){
    const formData = new Object();
    formData[entry1] = document.getElementById("Name").value;
    formData[entry2] = document.getElementById("Email").value;
    formData[entry3] = document.getElementById("Message").value;

    postToGoogleDB(formData);
}

initControllers();