let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";


let numClosedDoors = 3;

let openDoor1;
let openDoor2;
let openDoor3;

const randomChoreDoorGenerator = () => {
    const choreDoor = Math.floor(Math.random() * numClosedDoors);

    if (choreDoor == 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor == 1) {
        openDoor1 = beachDoorPath;
        openDoor2 = botDoorPath;
        openDoor3 = spaceDoorPath;
    } else {
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
        openDoor3 = botDoorPath;
    }
};

randomChoreDoorGenerator();

let doorImage1 = document.getElementById('door1');
doorImage1.onclick = () => {
    doorImage1.src = openDoor1;
};

let doorImage2 = document.getElementById('door2');
doorImage2.onclick = () => {
    doorImage2.src = openDoor2;
};

let doorImage3 = document.getElementById('door3');
doorImage3.onclick = () => {
    doorImage3.src = openDoor3;
};