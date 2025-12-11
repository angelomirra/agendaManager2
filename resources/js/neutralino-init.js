// Initialize Neutralino
Neutralino.init();

Neutralino.events.on("ready", async () => {
    // Disabilita menu destro
    //window.addEventListener("contextmenu", e => e.preventDefault());
});

Neutralino.events.on("windowClose", () => {
    Neutralino.app.exit();
});