import Component from "@ember/component";

const navToggle = (toggle) => {
    const lines = document.querySelectorAll("nav .tray-icon div")
    const links = document.querySelector("nav .links")

    if (toggle) {
        lines.forEach(element => {
            element.classList.add('toggled')
        });

        links.classList.add('opened')
    }
    else {
        lines.forEach(element => {
            element.classList.remove('toggled')
        })

        links.classList.remove('opened')
    }
}

export default Component.extend({
    didInsertElement() {
        this._super(arguments);
        const trayIcon = document.querySelector("nav .tray-icon")
        var trayIconToggle = false
        trayIcon.addEventListener('click', () => {
            trayIconToggle = !trayIconToggle
            navToggle(trayIconToggle)
        })
    }
})