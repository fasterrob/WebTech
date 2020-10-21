var firebaseConfig = {
    apiKey: "AIzaSyBWQv8Xm5BrUyPD22Vh1S6anl18ejPNYKo",
    authDomain: "webtechproject-d52ca.firebaseapp.com",
    databaseURL: "https://webtechproject-d52ca.firebaseio.com",
    projectId: "webtechproject-d52ca",
    storageBucket: "webtechproject-d52ca.appspot.com",
    messagingSenderId: "472941014292",
    appId: "1:472941014292:web:9451120eed003e99392601",
    measurementId: "G-4VYSRDCW31"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();


function typeMovies() {
    movietype = document.getElementById("typeMovie").value
    checkseasons = document.getElementById("seasons")
    episode = document.getElementById("episode")

    if (movietype == "series") {
        checkseasons.style.display = "inline"
        episode.style.display = "inline"
    } else if (movietype == "movie") {
        checkseasons.style.display = "none"
        episode.style.display = "none"
    }
}


function pushfirebase() {
    let ttitle = document.getElementById('title').value;
    let yyear = document.getElementById('year').value;
    let dduration = document.getElementById('duration').value;
    let aage = document.getElementById('age').value;
    let ttypeMovie = document.getElementById('typeMovie').value;
    let sseasons = document.getElementById('textseasons').value;
    let eepisode = document.getElementById('textepisode').value;
    let rrecap = document.getElementById('recap').value;
    let ccreators = document.getElementById('creators').value;
    let ccheck1 = document.getElementById('check1').checked;
    let ccheck2 = document.getElementById('check2').checked;
    let ccheck3 = document.getElementById('check3').checked;
    let ccheck4 = document.getElementById('check4').checked;
    let ccheck5 = document.getElementById('check5').checked;
    let ccheck6 = document.getElementById('check6').checked;
    let ccheck7 = document.getElementById('check7').checked;
    let ccast = document.getElementById('cast').value;
    let uurlpost = document.getElementById('urlpost').value;
    let uurlyoutube = document.getElementById('urlyoutube').value;



    var arraycheckbox = [];
    if (ccheck1 == true || ccheck2 == true || ccheck3 == true || ccheck4 == true || ccheck5 == true || ccheck6 == true || ccheck7 == true) {
        if (ccheck1 == true) {
            arraycheckbox.push("Action")
        }
        if (ccheck2 == true) {
            arraycheckbox.push("Comedies")
        }
        if (ccheck3 == true) {
            arraycheckbox.push("Dramas")
        }
        if (ccheck4 == true) {
            arraycheckbox.push("Sci-Fi")
        }
        if (ccheck5 == true) {
            arraycheckbox.push("History")
        }
        if (ccheck6 == true) {
            arraycheckbox.push("Horror")
        }
        if (ccheck7 == true) {
            arraycheckbox.push("Crime")
        }
    }
    firebase.database().ref('movie/' + ttitle).set({
        title: ttitle,
        year: yyear,
        dduration: dduration,
        age: aage,
        typeMovie: ttypeMovie,
        seasons: sseasons,
        episode: eepisode,
        recap: rrecap,
        creators: ccreators,
        Genres: arraycheckbox,
        cast: ccast,
        urlpost: uurlpost,
        urlyoutube: uurlyoutube

    });
}