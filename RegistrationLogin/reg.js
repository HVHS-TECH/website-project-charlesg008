var uid = sessionStorage.getItem("uid");
/*************************************************************/
//
//
/*************************************************************/
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    const form = event.target; // Get the form that triggered the event
    if (!form.checkValidity()) {
        form.reportValidity();
        event.preventDefault(); // Prevent form submission if invalid
        return;
    }

    var city = document.getElementById("city").value;
    var piuUsername = document.getElementById("piuUsername").value;
    var bracket = document.getElementById("bracket").value;

    var uid = sessionStorage.getItem("uid");

    if (!uid) {
        //if user came through reg button, trigger google login
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            uid = result.user.uid;
            sessionStorage.setItem("uid", uid);
            saveRegistration(uid, city, piuUsername, bracket)
        })
        .catch(function(error) {
            console.error("login error: ", error.message);
        });
    } else {
        //user went through login button, proceed with reg
        saveRegistration(uid, city, piuUsername, bracket);
    }

    event.preventDefault(); // Prevent the default page reload on form submission
});

function saveRegistration(uid, city, piuUsername, bracket) {
    firebase.database().ref("userDetails/" + uid).set({
        city: city,
        piuUsername: piuUsername,
        bracket: bracket
    }).then(function() {
        return firebase.database().ref('tournament/brackets/' + bracket + '/' +uid).set({
            piuUsername: piuUsername,
            city: city
        });
    }).then(function() {
        window.location.href = "../Homepage/homepage.html";
    }).catch(function(error){
        console.error("registration error: ", error.message);
    });
}



