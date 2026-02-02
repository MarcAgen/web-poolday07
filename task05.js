/*
** EPITECH PROJECT, 2026
** day07
** File description:
** task05
*/

function draw() {
    const canva = document.querySelector("canvas");
    const drawObject = canva.getContext("2d");

    drawObject.clearRect(0, 0, canva.width, canva.height);
    drawObject.beginPath();
    drawObject.strokeStyle = 0o000000;
    drawObject.moveTo(6, 6);
    drawObject.lineTo(14, 10);
    drawObject.lineTo(6, 14);
    drawObject.fill();
}

draw();
