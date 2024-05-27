<template>
    <section id="hero" class="z-10 sm:pt-20">
        <div class="hero min-h-screen bg-base-500">
            <div class="hero-content flex-col lg:flex-row lg:pb-56 lg:mx-32">
                <NuxtImg src="images/me.webp" alt="My main avatar" width="500" class="max-w-full min-w-sm sm:max-w-sm rounded-lg shadow-2xl mask mask-squircle"/>
                <div class="lg:text-left text-center">
                    <h1 class="sm:text-5xl text-3xl pb-2 font-bold">I'm David Torossyan</h1>
                    <h1 class="sm:text-5xl text-3xl pb-2 font-bold">A Software Enginer</h1>
                    <h1 data-aos class="sm:text-4xl text-2xl text-gray-500 pb-2 font-bold">Make the world better<span class="text-emerald-800 sm:text-5xl">.</span></h1>
                    <!-- <h1 class="text-7xl font-semibold absolute top-0 left-0">CS and Cybersecurity</h1> -->
                </div>
            </div>
        </div>
        <div class="absolute left-20 -z-10" style="top: 20vh">
            <div class="cloud cloud_gray -rotate-12"></div>
        </div>
        <div class="absolute left-0" style="top: 85vh">
            <div class="cloud cloud_gray rotate-12"></div>
        </div>
        <div class="absolute right-0" style="top: 70vh">
            <div class="cloud cloud_gray -rotate-12"></div>
        </div>
        <div class="absolute -right-5" style="top: 10vh">
            <div class="cloud cloud_gray rotate-12"></div>
        </div>
    </section>
</template>
