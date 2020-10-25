// const firebase = require("firebase");

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

function Checksend_movie() {
    var check = document.getElementById('movie-title').value;
    if (check.length != 0) {
        pushfirebase_movie()

    } else {
        alert("Please Enter Title")
    }
}

function pushfirebase_movie() {

    var ttitle = document.getElementById('movie-title').value;
    var yyear = document.getElementById('movie-year').value;
    var dduration = document.getElementById('movie-duration').value;
    var aage = document.getElementById('movie-age').value;
    var ppreview = document.getElementById('movie-preview').value;
    var ccreators = document.getElementById('movie-creators').value;
    var ccast = document.getElementById('movie-cast').value;
    var uurlpost = document.getElementById('movie-urlpost').value;
    var uurlyoutube = document.getElementById('movie-urlyoutube').value;

    var arraycheckbox = [];
    $("input:checkbox[name=type]:checked").each(function() {
        arraycheckbox.push($(this).val());
    });

    firebase.database().ref('movie/' + ttitle).set({
        title: ttitle,
        year: yyear,
        dduration: dduration,
        age: aage,
        preview: ppreview,
        creators: ccreators,
        Genres: arraycheckbox,
        cast: ccast,
        urlpost: uurlpost,
        urlyoutube: uurlyoutube

    });

}

function Checksend2() {
    var check = document.getElementById('series-title').value;
    if (check.length != 0) {
        pushfirebase_series()

    } else {
        alert("Please Enter Title")
    }
}

function pushfirebase_series() {

    var ttitle = document.getElementById('movie-title').value;
    var yyear = document.getElementById('movie-year').value;
    var dduration = document.getElementById('movie-duration').value;
    var aage = document.getElementById('movie-age').value;
    var ppreview = document.getElementById('movie-preview').value;
    var ccreators = document.getElementById('movie-creators').value;
    var ccast = document.getElementById('movie-cast').value;
    var uurlpost = document.getElementById('movie-urlpost').value;
    var uurlyoutube = document.getElementById('movie-urlyoutube').value;

    var arraycheckbox = [];
    $("input:checkbox[name=type]:checked").each(function() {
        arraycheckbox.push($(this).val());
    });

    firebase.database().ref('movie/' + ttitle).set({
        title: ttitle,
        year: yyear,
        dduration: dduration,
        age: aage,
        preview: ppreview,
        creators: ccreators,
        Genres: arraycheckbox,
        cast: ccast,
        urlpost: uurlpost,
        urlyoutube: uurlyoutube

    });

}