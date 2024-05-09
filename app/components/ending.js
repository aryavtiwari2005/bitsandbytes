import Component from "@ember/component";
import $ from "jquery";

const renderEnding = () => {
    $(window).scroll(function () {
        var elements = [
            $('.ending .bg, .ending h1, .ending a')
        ];
        elements.forEach((element) => {
            if (!element) return
            var isInView =
                element.offset().top < $(window).scrollTop() + $(window).height();

            if (isInView && !element.hasClass('animated')) {
                element.addClass('animated');
                element.animate({ opacity: 1 }, 1500);
            }
        });
    })
}

export default Component.extend({
    didInsertElement() {
        this._super(...arguments)
        renderEnding()
    },
    didRender() {
        this._super(...arguments)
        renderEnding()
    }
})