<template>
    <h1 wow class="text-center text-5xl font-bold py-10" :delay="100">My Projects</h1>
    <div id="swiper" class="swiper-container py-10 relative">
        <div class="swiper-wrapper">
            <div class="swiper-slide wow" v-for="(project, index) in projects" :key="index">
                <div class="card w-96 bg-base-100 shadow-xl rounded border-primary border-0 hover:border-2 h-80 mx-auto">
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
                        <span class="text-left max-w-fit flex"><span class="pr-3 font-semibold">Difficulty</span><UtilsRating :points="project.difficulty" /></span>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">View full</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-pagination"></div>
    </div>
</template>

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
import Swiper from "swiper";

onMounted(() => {
    new Swiper("#swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },
    });
});
</script>
<style scoped>

.swiper-button-prev,
.swiper-button-next {
    color: #000; /* Цвет кнопок можно изменить на нужный */
    transform: translateY(-50%);
    z-index: 10;
}

.swiper-button-prev {
    left: 10px; /* Регулируйте, чтобы изменить отступ от левой стороны */
}

.swiper-button-next {
    right: 10px; /* Регулируйте, чтобы изменить отступ от правой стороны */
}
</style>
