const roomTemplate = document.querySelector("template.room").content;

for (let i = 0; i < 3; i++) {
    document.getElementById("rooms").appendChild(roomTemplate.cloneNode(true));
}