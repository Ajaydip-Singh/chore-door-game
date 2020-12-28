let doorImage1 = document.getElementById('door1');

let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";

doorImage1.onclick = () => {
    doorImage1.src = botDoorPath;
}

let doorImage2 = document.getElementById('door2');

doorImage2.onclick = () => {
    doorImage2.src = botDoorPath;
}


