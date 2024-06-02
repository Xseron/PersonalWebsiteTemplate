<script setup>
const projects = [
    {
        name: "Random Coffe Bot",
        description: "A bot for creating anouter bot",
        stage: "Under development",
        difficulty: 3,
        langs: ["python", "docker"],
    },
    {
        name: "ShareX",
        description: "for saaring files accross local network fast and easy",
        stage: "idea",
        difficulty: 2,
        langs: ["rust", "vuejs"],
    },
    {
        name: "MyExtra",
        description: "Extracurricular",
        stage: "relise",
        difficulty: 2,
        langs: ["laravel"],
    },
    {
        name: "Formly",
        description: "A new way to view a blablabla",
        stage: "idea",
        difficulty: 2,
        langs: ["golang", "js", "android"],
    },
    {
        name: "Filemanager++",
        description: "A new way to view a blablabla",
        stage: "idea",
        difficulty: 5,
        langs: ["rust"],
    },
    {
        name: "CRM for schools",
        description: "CRM for schools idk",
        stage: "idea",
        difficulty: 4,
        langs: ["vuejs", "golang", "docker"],
    },
    {
        name: "RestQr",
        description: "A online qr menu for restorans, sales and so one",
        stage: "idea",
        difficulty: 4,
        langs: ["vuejs", "golang"],
    },
    {
        name: "MoneyApp",
        description: "For personal use for tracking money activity",
        stage: "idea",
        difficulty: 4,
        langs: ["android"],
    },
];

import { ref } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

let settings = ref({ itemsToShow: 1, snapAlign: "center" });
const breakpoints = {
    // 700px and up
    700: {
        itemsToShow: 3.5,
        snapAlign: "center",
    },
    // 1024 and up
    1024: {
        itemsToShow: 3,
        snapAlign: "start",
    },
};
</script>

<template>
    <section class="py-20">
        <h1 wow class="text-center text-5xl font-bold py-5" :delay="100">My Projects</h1>
        <Carousel v-bind="settings" :wrapAround="true" :autoplay="3000" :breakpoints="breakpoints">
            <Slide wow v-for="(project, index) in projects" :key="index">
                <div class="card w-96 bg-base-100 shadow-xl rounded border-primary border-0 hover:border-2 h-80">
                    <div class="card-body">
                        <h2 class="card-title font-bold">{{ project.name }}</h2>
                        <p class="text-left">{{ project.description }}</p>
                        <p class="text-left font-semibold">
                            Stage <span class="text-emerald-500 font-bold uppercase">{{ project.stage }}</span>
                        </p>
                        <div class="langs text-left">
                            <span class="text-2xl">
                                <font-awesome-icon v-for="lang in project.langs" class="px-1 text-emerald-500" :icon="['fab', lang]" />
                            </span>
                        </div>
                        <span class="text-left max-w-fit flex"><span class="pr-3 font-semibold">Difficulty</span><UtilsRating :points="project.difficulty"/></span>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">View full</button>
                        </div>
                    </div>
                </div>
            </Slide>

            <template #addons>
                <Navigation />
            </template>
        </Carousel>
    </section>
</template>
