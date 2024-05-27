<script setup>

const langs = [
    {
        fa: "golang",
        progress: "70",
    },
    {
        fa: "python",
        progress: "100",
    },
    {
        fa: "rust",
        progress: "30",
    },
    {
        fa: "docker",
        progress: "80",
    },
    {
        fa: "laravel",
        progress: "60",
    },
    {
        fa: "js",
        progress: "70",
    },
];

const skills = [
    {
        fa: "globe",
        caption: "Web Development",
        content: `I specialize in crafting resilient web applications, beginning with crafting adaptable architectures and 
        utilizing Docker and Kubernetes for deployment. My primary aim is to ensure the uninterrupted operation and peak 
        performance of applications. I meticulously refine database models to optimize data structures. Moreover, I excel 
        in developing microservice architectures to bolster scalability and ease maintenance.`,
    },
    {
        fa: "desktop",
        caption: "PC Applications",
        content: `Creating applications on Chromium, as well as on more native tools. 
        During development, I pay special attention to ensuring fault tolerance, speed and usability 
        of these applications. My goal is to create products that are not only reliable and efficient, 
        but also bring pleasure to users with their intuitive and user-friendly functionality.`,
    },
    {
        fa: "robot",
        caption: "Procces Automatization",
        content: `Optimization of routine tasks and simplification of work processes. 
        This includes collecting feedback via email and messengers, moderation of content in work chats, 
        custom filters for files, document designer in Word, object recognition, statistics calculation, 
        data visualization, integration of payments using Stripe and web page parsing and much more`,
    },
    {
        fa: "shield-halved",
        caption: "Cybersecurity",
        content: "Analysis of applications for various cyber attacks such as SQL injection, memory leaks, XSS, CSS and others. In addition, I am engaged in setting up a PKI infrastructure, creating a VPN and installing secure encrypted connections to ensure the security of applications.",
    },
];
</script>

<template>
    <section id="skillset" class="bg-gray-950 lg:grid lg:grid-cols-3 lg:grid-rows-2 sm:gap-20 sm:p-20 py-10 px-5 gap-5 text-slate-300 relative">
        <div class="lg:row-span-2 lg:col-span-1" v-motion-slide-visible-left :delay="100">
            <h2 class="text-3xl font-bold pb-5">Skillset</h2>
            <p class="text-sm leading-normal font-medium pb-5">
                I try to avoid limiting myself to a single technology, so I'm always able to choose the right tools for a specific task. In addition, the multiplicity and diversity of IT branches that I'm interested in allow me to play different roles in the team, as well as understand and cooperate
                better with the other members of my team
            </p>
            <h3 class="text-2xl font-semibold pb-2">Langs:</h3>
            <div v-for="lang in langs" class="pb-1">
                <font-awesome-icon class="text-4xl min-w-14 pr-5" :icon="['fab', lang.fa]" />
                <progress v-f class="progress progress-success bg-gray-500 w-72" :value="lang.progress" max="100"></progress>
            </div>
        </div>
        <article v-for="skill in skills" class="py-12 lg:py-0" v-motion-slide-visible-right :delay="100">
            <font-awesome-icon :icon="['fas', skill.fa]" class="text-4xl text-emerald-500 pb-2" />
            <h2 class="text-xl font-bold pb-3">{{ skill.caption }}</h2>
            <p class="text-sm leading-normal font-medium pb-3">{{ skill.content }}</p>
        </article>

        <a id="offer-btn" href="#contact" class="btn btn-success absolute right-10 bottom-10 text-2xl -rotate-6 bg-emerald-500 text-gray-900 font-bold rounded-lg hover:scale-110">Hire Me 😉</a>
    </section>
</template>