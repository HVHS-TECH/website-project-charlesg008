/***************************************************************/
// fbinitialise
// handles initialising firebase
/**************************************************************/

/***************************************************************/
// fb_initialise
// initialise firebase
/**************************************************************/
function fb_initialise() {
    console.log('fb_initialise()');

    const firebaseConfig = {

        apiKey: "AIzaSyDYCqcJ3dc1M7sk0GsP_aw4IXrwd-1Jspk",

        authDomain: "dtech-2025-charles-gray.firebaseapp.com",

        databaseURL: "https://dtech-2025-charles-gray-default-rtdb.firebaseio.com",

        projectId: "dtech-2025-charles-gray",

        storageBucket: "dtech-2025-charles-gray.firebasestorage.app",

        messagingSenderId: "720934003807",

        appId: "1:720934003807:web:14de4fc1350cc1142a67ea",

        measurementId: "G-7RR3CXBBG8"

    };

    // Check if firebase already initialised
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}
fb_initialise();
