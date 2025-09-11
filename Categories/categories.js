
function switchBracket(bracketName, event) {
    var tabs = document.querySelectorAll('.tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');

    }

    event.target.classList.add('active');
    loadBracket(bracketName);
}

function loadBracket(bracketName) {
    console.log("Loading bracket:", bracketName);

    var display = document.getElementById('bracketDisplay');
    display.classList.remove('loaded');
    display.innerHTML = '';

    firebase.database().ref('tournament/brackets/' + bracketName).once('value')
        .then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var user = childSnapshot.val();

                var card = document.createElement('div');
                card.className = 'playerCard';

                var image = document.createElement('img')
                image.src = user.profilePic
                image.alt = user.piuUsername + "'s profile picture";

                var info = document.createElement('div')
                info.className = 'playerInfo';

                var username = document.createElement('div');
                username.className = 'username';
                username.textContent = user.piuUsername;

                var city = document.createElement('div')
                city.className = 'city';
                city.textContent = user.city;

                info.appendChild(username);
                info.appendChild(city);
                card.appendChild(image);
                card.appendChild(info);

                display.appendChild(card);
            });

            display.classList.add('loaded');
        })
        .catch(function (error) {
            console.error('eror loading data:', error.message);
        })
}

document.addEventListener('DOMContentLoaded', function () {
    loadBracket('Beginner');
});