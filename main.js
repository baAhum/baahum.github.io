var num_random_img = 103;

var collage_divs = document.getElementsByClassName("MarneMemories");
var imgAr = [70, 24, 31, 88, 25, 80, 44, 62, 49, 27, 35, 55, 29, 18, 7, 12, 84, 21, 30, 72, 48, 1, 59, 77];

var last_changed = [1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000];
var last_changed_pos = 0;

var audioEl = document.getElementById("songs"); 
var audioName = document.getElementById('audioDesc');
var audioIco = document.getElementById('audioIco');

var newSong = "none";

var songs_dict = new Object();

songs_dict["Gabby"] = "Wild Heart - Daughtry";
songs_dict["Charlize"] = "none";
songs_dict["Symeion"] = "Ride It Out - Jaden Hamilton";
songs_dict["Matt"] = "Just The Way You Are - Bruno Mars";
songs_dict["Janre"] = "none";
songs_dict["Ma"] = "none";
songs_dict["Hannah"] = "none";
songs_dict["Pa"] = "none";


function getRandomImage(imgAr, num_random_img, elements, element_num) {
    path = "url('./MarneOnly/"; // default path here
    var num = Math.floor( Math.random() * num_random_img )+1;
    while(imgAr.includes(num)) {
        num = Math.floor( Math.random() * num_random_img )+1;
    }
    imgAr[element_num] = num;
    var img = path+"Marne_"+num.toString()+".png')";
    elements[element_num].style.backgroundImage = img;
}

function assign_random() {
    var num = Math.floor( Math.random() * 20 );
    var img_div = [1000,1000,1000,1000];
    var amount_to_change = 4;

    if (num<10) {
        amount_to_change = 4;
    } else if (num<16) {
        amount_to_change = 5;
    } else if (num<18) {
        amount_to_change = 6;
    } else {
        amount_to_change = 7;
    }

    for (var i = 0; i < amount_to_change; i++) {
        var temp_Var = Math.floor( Math.random() * 24);
        while ((img_div.includes(temp_Var)) | (last_changed.includes(temp_Var))) {
            temp_Var = Math.floor( Math.random() * 24);
        }
        img_div[i] = temp_Var;
        last_changed[last_changed_pos] = temp_Var;
        last_changed_pos += 1;
        if (last_changed_pos==14) {
            last_changed_pos = 0;
        }
        getRandomImage(imgAr, num_random_img, collage_divs, temp_Var);
      }
}

setInterval(function() {
    assign_random();
}, 2200);

function audioControls(){
    if (newSong=="none") {
        audioEl.pause();
        audioName.innerHTML = "No Song Selected";
        audioIco.setAttribute('src', './Icons/play.svg');
    } else {
        if(audioIco.getAttribute('src')=='./Icons/play.svg') {
            audioName.innerHTML = newSong;
            audioEl.play();
            audioIco.setAttribute('src', './Icons/pause.svg');
        } else {
            audioEl.pause();
            audioIco.setAttribute('src', './Icons/play.svg');
        }
    }
}

function PlayFriendAudio(clicked_id){
    audioEl.pause();
    newSong = songs_dict[clicked_id];
    if (newSong!="none") {
        audioEl.setAttribute('src', './songs/'+newSong+'.m4a');
        audioName.innerHTML = newSong;
        audioEl.play();
        audioIco.setAttribute('src', './Icons/pause.svg');
    } else {
        audioName.innerHTML = "No Song Selected";
        audioIco.setAttribute('src', './Icons/play.svg');
    }
}

// function Setup(){
//     var body = document.getElementById("bodyMain");

//     body.requestFullscreen();
// }


