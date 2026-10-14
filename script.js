const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const snowflake = document.querySelector("#snowflakes");
const message = document.querySelector("#message");

const messages = [
    "you are bedazzling",
    "+1,000,000,000 aura",
    "let's cook!!",
    "this earth is lucky to have you",
    "#aura_farming_like_crazy",
    "hard to find gems like you",
    "I SAID LET HER COOK!",
];

button.addEventListener("click", () => {
    globe.classList.add("shaking");
    setTimeout(() => globe.classList.remove("shaking"), 600);

    snowflake.classList.add("snowing");
    setTimeout(() => snowflake.classList.remove("snowing"),1000);

    const pick = Math.floor(Math.random()*messages.length);
    message.textContent = messages[pick];
});