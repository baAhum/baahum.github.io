var num_random_img = 92;

var collage_divs = document.getElementsByClassName("MarneMemories");
var imgAr = [70, 24, 31, 88, 25, 80, 44, 62, 49, 27, 35, 55, 29, 18, 7, 12, 84, 21, 30, 72, 48, 1, 59, 77];

var last_changed = [1000,1000,1000,1000,1000,1000,1000,1000,1000,1000];
var last_changed_pos = 0;

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
        amount_to_change = 1;
    } else if (num<16) {
        amount_to_change = 2;
    } else if (num<18) {
        amount_to_change = 3;
    } else {
        amount_to_change = 4;
    }

    for (var i = 0; i < amount_to_change; i++) {
        var temp_Var = Math.floor( Math.random() * 24);
        while ((img_div.includes(temp_Var)) | (last_changed.includes(temp_Var))) {
            temp_Var = Math.floor( Math.random() * 24);
        }
        img_div[i] = temp_Var;
        last_changed[last_changed_pos] = temp_Var;
        last_changed_pos += 1;
        console.log(last_changed);
        if (last_changed_pos==10) {
            last_changed_pos = 0;
        }
        getRandomImage(imgAr, num_random_img, collage_divs, temp_Var);
      }
}

setInterval(function() {
    assign_random();
}, 1900);


