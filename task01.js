/*
** EPITECH PROJECT, 2026
** day07
** File description:
** task01
*/

const box = document.querySelector("footer").querySelector("div");
box.onclick = count;
var a = 0;

function count() {
    a+= 1;
    box.innerHTML = a;
}
