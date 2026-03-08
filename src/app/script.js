const roomTemplate = document.querySelector("template.room").content;

async function loadRooms() {
    const res = await fetch("/api/rooms");
    const rooms = await res.json();
    rooms.forEach(room => {
        const roomElement = roomTemplate.cloneNode(true).firstElementChild;

        roomElement.addEventListener("click", (e) => {
            window.location.href = `${room.name}`;
        });
        roomElement.querySelector(".roomName").textContent = room.name;

        document.getElementById("rooms").appendChild(roomElement);
    });
}

loadRooms();