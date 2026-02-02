/*
** EPITECH PROJECT, 2026
** day07
** File description:
** task04
*/

const Button = document.querySelectorAll("button");
const html = document.querySelector("html");

Button[0].onclick = plus;
Button[1].onclick = minus;

function plus () {
    body.style.fontSize += 1;
}

function minus () {
    body.style.fontSize -= 1;
}

html.style.backgroundColor = document.querySelector("select").value;
