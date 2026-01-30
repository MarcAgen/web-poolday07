/*
** EPITECH PROJECT, 2026
** day07
** File description:
** task02
*/

const box = document.querySelector("footer").querySelector("div");
box.onclick = whatsYourName;

function whatsYourName() {
    let name;
    do {
        name = prompt("What's your name ?");
    } while (name === "" || name === null);
    if (window.confirm(`Are you sure that ${name} is your name ?`)) {
        box.innerHTML = `Hello ${name}!`;
    }
}
