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
    this.default = config.default || "animated";
    this.delay = config.delay || 100; // delay in ms
    this.offset = config.offset || 0;
    this.mobile = config.mobile || true;
    this.callback = config.callback || (() => {});
    this.scrollContainer = config.scrollContainer || window;
    this.resetAnimation = config.resetAnimation || false;

    this.last_shown_element = 0;
    this.last_element_out_of_view = 0;
    this.elements = [];

    let viewport = window.visualViewport;
    this.scrollContainer.addEventListener("scroll", (event) => {
        this.update(viewport.pageTop, viewport.pageTop + viewport.height);
    })
    window.addEventListener("resize", (event) => {
        viewport = window.visualViewport;
    });
}

WOW.prototype.init = function() {
    const HTMLelements = document.querySelectorAll(`[${this.attr}]`);

    HTMLelements.forEach(element => {
        element.style.setProperty('--wow-delay', `${this.delay / 1000}s`);
        this.elements = this.elements.concat({el: element, ypos: element.getBoundingClientRect().top, hidden: true});
    });

    this.elements.sort((a, b) => a.ypos - b.ypos);
}

WOW.prototype.update = function(viewTop, viewBottom) {
    this.elements.forEach(element => {
        if (element.ypos < viewBottom && element.ypos > viewTop && element.hidden) {
            element.el.classList.add(['animate__animated', 'animate__fadeIn']);
            element.hidden = false;
        }

        if (element.ypos > viewBottom || element.ypos < viewTop) {
            element.el.classList.remove('animate__animated', 'animate__fadeIn');
            element.hidden = true;
        }
    })
}

const posy = 0;

onMounted(() => {
    const viewport = window.visualViewport;
    const elements = document.querySelectorAll("[wow]");
    console.clear();
    const wow = new WOW();
    wow.init();
});
</script>