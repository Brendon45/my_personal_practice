const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

buttonA.onclick = () =>
{
    let name = prompt("What is your name?");
    if (name === null || name.trim() === "")
    {
        name = "Stranger";
    }
    alert(`Hello ${name}, nice to see you!`);
    headingA.textContent = `Welcome ${name}`;
};