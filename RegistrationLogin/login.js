
const userData = {};

/**************************************************************/
//fb_Googlelogin()
//input: 
//return:  
/**************************************************************/
function fb_Googlelogin() {
    console.log('fb_login()');
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log('user signed in: ', user.uid);
            processUser(user)
        } else {
            console.log('no user signed in');
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider)
            .then(function(result){
                console.log('signed in via popup: ', result.user.uid);
                processUser(result.user);
            })
            .catch(function(error){
                console.log('login error: ', error.message);
                alert('login failed: ' + error.message)
            });
        }
    });
}
/**************************************************************/
//fb_logout
//input: 
//return:  
/**************************************************************/
function fb_Googlelogout() {
    firebase.auth().signOut();
    location.reload();
}

/***************************************************************/
// processUser
// called by fb_Googlelogin
// Process login result or display error if any
/**************************************************************/
function processUser(user) {
    var uid = user.uid;
    userData.uid = uid;
    userData.email = user.email;
    userData.displayName = user.displayName;
    userData.photoURL = user.photoURL;

    sessionStorage.setItem("uid", uid);
    sessionStorage.setItem("email", user.email);
    sessionStorage.setItem("displayName", user.displayName);
    sessionStorage.setItem("photoUrl", user.photoURL);

    firebase.database().ref('userDetails/' + uid).once('value')
    .then(function(snapshot){
        if (snapshot.exists()) {
            var data = snapshot.val();
            userData.piuUsername = data.piuUsername;
            sessionStorage.setItem("piuUsername", data.piuUsername)

            console.log('user exists');
        } else {
            console.log('new user detected')
            window.location.href = 'registration.html';
        }
    })
    .catch(function(err) {
        console.error('error fetching user data: ', err.message);
    });
}