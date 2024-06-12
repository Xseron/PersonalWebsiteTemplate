<template>
    <section class="py-20">
        <h1 class="text-center text-5xl font-bold" data-wow-delay="100ms">My Projects</h1>
        <Swiper
            :modules="[Autoplay, Navigation]"
            :slides-per-view="3"
            :space-between="30"
            :loop="true"
            :centeredSlides="true"
            :grabCursor="true"
            :breakpoints="breakpoints"
            :autoplay="{
                delay: 3000,
                disableOnInteraction: true,
            }"
            navigation
            class="my-swiper"
        >
            <SwiperSlide v-for="(project, index) in projects" :key="index" class="my-swiper-slide">
                <div class="card bg-base-100 shadow-xl rounded border-primary border-0 hover:border-2 h-80">
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
                        <span class="text-left max-w-fit flex">
                            <span class="pr-3 font-semibold">Difficulty</span>
                            <UtilsRating :points="project.difficulty" />
                        </span>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">View full</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

const breakpoints = ref({
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 50,
  },
})
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
</script>
