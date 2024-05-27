<template>
    <section id="wiki" class="flex flex-col justify-center items-center p-10 relative">
        <div class="text-center" :delay="100">
            <h1 class="text-4xl font-bold line-outside">My Wiki</h1>
            <h2 class="text-lg pt-6">I create content on how people can flourish and help others flourish 🌱</h2>
        </div>
        <div class="md:flex justify-center gap-10">
            <div class="card w-96 bg-base-100 shadow-xl" :delay="100">
                <div class="card-body">
                    <h2 class="card-title">Books review 📚</h2>
                    <p>I publish essays on how we can "level up America" with tech, media, and movement-building.</p>
                    <a class="btn rounded-lg">Read my Reviews</a>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl" :delay="100">
                <div class="card-body">
                    <h2 class="card-title">My Diary 📝</h2>
                    <p>I publish how-to guides and my views on a wide variety of topics that don't fit into a particular bucket.</p>
                    <a class="btn rounded-lg">Read my Diary</a>
                </div>
            </div>
        </div>
    </section>
</template>
