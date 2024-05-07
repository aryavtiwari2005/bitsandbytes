import Component from "@ember/component";

export default Component.extend({
    didInsertElement() {
        this._super(...arguments)
        const form = document.forms['reachout']

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            var btn = form.submitBtn
            btn.value = 'Reaching out...'
            btn.style.pointerEvents = 'none'
            btn.style.cursor = 'not-allowed'
            form.action = 'javascript:void(0)';
            fetch("https://script.google.com/macros/s/AKfycbzu6DD2xfkYo7stvxUPjdCjtIpwtIAUOZnxuxVhjLjwk5QjtpBC8O_902DpQZYu_I-Q/exec", {
                method: 'POST',
                body: new FormData(form)
            })
                .then(res => res.text())
                .then(data => {
                    btn.value = "Success!"
                })
        })
    }
})