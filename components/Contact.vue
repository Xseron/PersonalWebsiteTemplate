<template>
    <section id="contact" class="relative" :delay="100">
        <div wow class="text-center min-w-max md:px-10 py-20">
            <h2 class="md:text-4xl line-outside text-2xl font-semibold text-gray-200 max-w-full">Contact me on social media</h2>
            <span class="flex justify-center gap-7 pt-10">
                <a href="#"><nuxt-img loading="lazy" height="64" width="64" src="/icons/linked.webp" class="hover:scale-110 max-w-16 rounded-lg" alt="linkedin icon"/></a>
                <a href="#"><nuxt-img loading="lazy" height="64" width="64" src="/icons/tg.png" class="hover:scale-110 max-w-16 rounded-lg" alt="telegram icon"/></a>
                <a href="#"><nuxt-img loading="lazy" height="64" width="64" src="/icons/twitter.webp" class="hover:scale-110 max-w-16 rounded-lg" alt="twitter icon"/></a>
            </span>
        </div>
        <div wow wow-animation="animate__animated animate__fadeInRight" class="absolute right-5" style="bottom: 10%">
            <div class="cloud cloud_gray -rotate-12"></div>
        </div>
        <div wow wow-animation="animate__animated animate__fadeInLeft" class="absolute left-3" style="bottom: 30%">
            <div class="cloud cloud_gray rotate-12"></div>
        </div>
    </section>
</template>