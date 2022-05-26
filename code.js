let isActive=true;

function changeMicro() {
    if (document.getElementById("micro").src === "icons/microphone-black-shape_icon-icons.com_73491.png") {
        document.getElementById("micro").src = "icons/iconfinder-mute-mic-microphone-audio-sound-4593173_122241.png";
        isActive = false
        document.getElementById("microBtn").style.background = "red";
    } else{
        document.getElementById("micro").src = "icons/microphone-black-shape_icon-icons.com_73491.png";
    isActive = true
}
}