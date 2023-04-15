var buttons = document.getElementsByTagName('button');

var heavyButton = document.getElementById('heavyButton')
var scoutButton = document.getElementById('scoutButton')
var heavyCaption = document.getElementById('heavyCaption')
var scoutCaption = document.getElementById('scoutCaption')

var canDeleteOthers = true

for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    let type = button.getAttribute('type') || 'submit'; // Submit is the default
    button.onmousedown = function() {
        if(canDeleteOthers == true) {
            canDeleteOthers = false
            button.remove();
        }
    }
    if(!canDeleteOthers) {
        if(document.contains(heavyButton)) {
            heavyCaption.innerText = "pow haha! thanks for not selecting me!!";
        }
    }
}


heavyButton.onmouseenter = function() {
    if(canDeleteOthers == true) {
        heavyCaption.innerText = "pls!";
    } else {
        heavyCaption.innerText = "thanks for not voting me! :D";
    }
}

heavyButton.onmouseleave = function() {
    if(canDeleteOthers == false) {
        heavyCaption.innerText = "pow haha! thanks for not selecting me!!";
    } else {
        heavyCaption.innerText = "pls dont click on me";
    }
}

scoutButton.onmouseenter = function() {
    if(canDeleteOthers == true) {
        scoutCaption.innerText = "noooooo!";
    } else {
        scoutCaption.innerText = "that was real smart!";
    }
}

scoutButton.onmouseleave = function() {
    if(canDeleteOthers == false) {
        scoutCaption.innerText = "your great man!";  
    } else {
        scoutCaption.innerText = "click on heavy not me!";
    }
}