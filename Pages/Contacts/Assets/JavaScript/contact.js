$(document).ready(function () {
    //create date for form
    let today = new Date();
    let date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
    console.log(date);
    $('.date').val(date);
    $('.date').text(date);

    let config = {
        apiKey: "AIzaSyCw5YHiulXYVZzQZA1fmH2bTprNmF1uMMU",
        authDomain: "main-portfolio-message-drop.firebaseapp.com",
        databaseURL: "https://main-portfolio-message-drop.firebaseio.com",
        projectId: "main-portfolio-message-drop",
        storageBucket: "",
        messagingSenderId: "136917651014"
    };
    firebase.initializeApp(config);

    let database = firebase.database();

    $(".submit").on("click", function () {
        // event.preventDefault();
        database.ref().push({
            name: $('.username').val(),
            date: $('.date').val(),
            email: $('.userEmail').val(),
            message: $('.message').val()
        });
        alert('Your Message Has Been Sent');
    });

})