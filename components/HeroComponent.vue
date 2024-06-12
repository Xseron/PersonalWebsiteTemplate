<template>
    <section id="hero" class="z-10 sm:pt-20">
        <div class="hero min-h-screen bg-base-500">
            <div class="hero-content flex-col lg:flex-row lg:mb-56">
                <nuxt-img src="/images/me.webp" loading="eager" alt="My main avatar" width="400" height="400" class="mt-10 rounded-lg shadow-2xl mask mask-squircle"/>
                <div class="lg:text-left text-center">
                    <h1 class="sm:text-5xl text-3xl pb-2 font-bold">I'm David Torossyan</h1>
                    <h1 class="sm:text-5xl text-3xl pb-2 font-bold">A Software Enginer</h1>
                    <h1 data-aos class="sm:text-4xl text-2xl text-gray-500 pb-2 font-bold">Make the world better<span class="text-emerald-800 sm:text-5xl">.</span></h1>
                    <!-- <h1 class="text-7xl font-semibold absolute top-0 left-0">CS and Cybersecurity</h1> -->
                </div>
            </div>
        </div>
        <div wow wow-animation="animate__animated animate__fadeInLeft" class="absolute left-20 -z-10" style="top: 20vh">
            <div class="cloud cloud_gray -rotate-12"></div>
        </div>
        <div wow wow-animation="animate__animated animate__fadeInLeft" class="absolute left-0" style="top: 85vh">
            <div class="cloud cloud_gray rotate-12"></div>
        </div>
        <div wow wow-animation="animate__animated animate__fadeInRight" class="absolute right-0" style="top: 70vh">
            <div class="cloud cloud_gray -rotate-12"></div>
        </div>
        <div wow wow-animation="animate__animated animate__fadeInRight" class="absolute -right-5" style="top: 10vh">
            <div class="cloud cloud_gray rotate-12"></div>
        </div>
    </section>
</template>
