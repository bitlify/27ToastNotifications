const btn = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
    "Message One",
    "Message Two",
    "Message Three",
    "Message Four",
];

const types = ["info", "success", "warning", "error"];

btn.addEventListener("click", () => {
    createNotification();
});

function createNotification() {
    if (toasts.children.length < 5) {
        const notif = document.createElement("div");
        notif.classList.add("toast");
        notif.classList.add(getRandomType());
        notif.innerText = getRandomMessage();
        toasts.appendChild(notif);

        setTimeout(() => {
            notif.classList.add("fade");
        }, 2500);

        setTimeout(() => {
            notif.remove();
        }, 3000);
    }
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)];
}
