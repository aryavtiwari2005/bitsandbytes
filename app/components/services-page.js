import Component from "@ember/component";
import $ from "jquery";

const render = () => {
    $(window).scroll(function () {
        var elements = [
            $('.services-page .slider.first'),
            $('.services-page .slider.second'),
            $('.services-page .slider.third'),
            $('.services-page .approach .cards div'),
            $('.services-page .promise .cards div')
        ];

        elements.forEach((element) => {
            if (!element.offset()) return

            var isInView =
                element.offset().top < $(window).scrollTop() + $(window).height();

            if (isInView && !element.hasClass('animated')) {
                element.addClass('animated');
                element.animate({ left: "0%" }, 1500);
            }
        });
    })
}

export default Component.extend({
    didInsertElement() {
        this._super(...arguments)
        render()
    },
    didRender() {
        this._super(...arguments)
        render()
    }
})