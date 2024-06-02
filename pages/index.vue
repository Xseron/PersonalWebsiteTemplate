<template>
    <HeroComponent />
    <AboutMe />
    <Contact />
</template>

<script setup>
function WOW(config) {
    config = config || {}

    // ahahah
    this.attr = config.attr || "wow";
    this.default = config.default || 'animated';
    this.delay = config.delay || 100; // delay in ms
    this.offset = config.offset || 0;
    this.mobile = config.mobile || true;
    this.callback = config.callback || (() => {});
    this.scrollContainer = config.scrollContainer || window;
    this.resetAnimation = config.resetAnimation || true;

    this.last_shown_element = 0;
    this.last_element_out_of_view = 0;
    this.elements = [];

    let viewport = window.visualViewport;
    this.scrollContainer.addEventListener("scroll", (event) => {
        this.update();
    })
    window.addEventListener("resize", (event) => {
        viewport = window.visualViewport;
    });
}

WOW.prototype.init = function() {
    const HTMLelements = document.querySelectorAll(`[${this.attr}]`);

    HTMLelements.forEach(element => {
        const delay = parseInt(element.getAttribute(`${this.attr}-delay`) || this.delay) / 1000;
        const offset = parseInt(element.getAttribute(`${this.attr}-offset`) || this.offset);
        const animation = (element.getAttribute(`${this.attr}-animation`) || this.default).split(" ");

        element.style.setProperty('--wow-delay', `${delay}s`);
        element.style.visibility = "hidden";
        this.elements = this.elements.concat({
                                            el: element, 
                                            animation: animation,
                                            offset: offset,
                                            ypos: element.getBoundingClientRect().top, 
                                            hidden: true
                                        });
    });

    this.elements.sort((a, b) => a.ypos - b.ypos);
    this.update();
}

WOW.prototype.update = function() {
    const wheight = window.visualViewport.height;
    this.elements.forEach(element => {
        const rect = element.el.getBoundingClientRect()
        if (rect.top + element.offset < wheight && rect.bottom > 0 && element.hidden) {
            element.el.style.visibility = "visible";
            this.callback();
            element.el.classList.add(...element.animation);
            element.hidden = false;
        }

        if (this.resetAnimation && (rect.top + element.offset > wheight || rect.bottom < 0)) {
            element.el.style.visibility = "hidden";
            element.el.classList.remove(...element.animation);
            element.hidden = true;
        }
    })
}

onMounted(() => {
    console.clear();
    const wow = new WOW({
        default: "animate__animated animate__zoomIn",
    });
    wow.init();
});
</script>