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

//season
for (let i = 1; i <= 10; i++) {
    document.getElementById("seasons").innerHTML +=
        "<option value=\"" + i + "\">" + i + "</option>";
}
//episode
for (let j = 1; j <= 50; j++) {
    document.getElementById("episode").innerHTML +=
        "<option value=\"" + j + "\">" + j + "</option>";
}

//create episode
function check() {
    document.getElementById("name-episode").innerHTML = "";
    var num = document.getElementById("episode");
    for (let k = 1; k <= (num.value); k++) {
        document.getElementById("name-episode").innerHTML += "Episode " + k + " : <div><input class=\"form-control form-control-sm ipepisode\"></div>";
    }
    document.getElementById("lnepisode").style.display = "inline";
}

//check movie before send to database
function Checksend_movie() {
    var check = document.getElementById('movie-title').value;
    if (check.length != 0) {
        pushfirebase_movie()
        console.log("1")
    } else {
        alert("Please Enter Title")
    }
}

//check series before send to database
function Checksend_series() {
    var check = document.getElementById('series-title').value;
    if (check.length != 0) {
        pushfirebase_series()

    } else {
        alert("Please Enter Title")
    }
}

//push up to data firebase
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
        duration: dduration,
        age: aage,
        preview: ppreview,
        creators: ccreators,
        Genres: arraycheckbox,
        cast: ccast,
        urlpost: uurlpost,
        urlyoutube: uurlyoutube
    });

}

//Push up to data firebase 
function pushfirebase_series() {
    var ttitle = document.getElementById('series-title').value;
    var yyear = document.getElementById('series-year').value;
    var aage = document.getElementById('series-age').value;
    var ppreview = document.getElementById('series-preview').value;
    var ccreators = document.getElementById('series-creators').value;
    var ccast = document.getElementById('series-cast').value;
    var uurlpost = document.getElementById('series-urlpost').value;
    var uurlyoutube = document.getElementById('series-urlyoutube').value;
    var arraycheckbox1 = [];
    $("input:checkbox[name=type]:checked").each(function() {
        arraycheckbox1.push($(this).val());
    });
    firebase.database().ref('series/' + ttitle).set({
        title: ttitle,
        year: yyear,
        age: aage,
        preview: ppreview,
        creators: ccreators,
        Genres: arraycheckbox1,
        cast: ccast,
        urlpost: uurlpost,
        urlyoutube: uurlyoutube
    });
}