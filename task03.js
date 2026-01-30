/*
** EPITECH PROJECT, 2026
** day07
** File description:
** task04
*/

const box = document.querySelector("footer").querySelector("div");

let buff = [];

document.addEventListener("keydown", (event) => {
    if (event.key.length === 1)
        buff.push(event.key)
    if (buff.length > 42)
        buff.shift();
    box.innerHTML = buff.join("");
});