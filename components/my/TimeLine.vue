<template>
    <section id="journey" class="relative pt-10">
        <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <h1 wow class="text-4xl font-bold line-outside text-center pb-5">My Journey</h1>
            <li>
                <div class="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div wow wow-animation="animate__animated animate__fadeInLeft" class="timeline-start md:text-end mb-10 text-base font-mediumdata-src">
                    <time class="font-mono italic font-normal">2019</time>
                    <div class="text-lg font-black">School</div>
                    Studying at one of the leading schools in Kazakhstan were an inspiring experience, 
                    where I found not only motivation, but also met wonderful people. As part of this school,
                     I founded a unique local programming community called <b class="text-yellow-600">MPD</b>. We have worked together to improve 
                     the local ecosystem and create a more user-friendly learning environment at school using digital 
                     technologies. Our work has been embodied in projects such as the websites and the mobile application.
                    <nuxt-img class="py-5 md:float-end"  loading="lazy" src="/images/school.webp" width="500" height="350" alt="fizmat school where i studied"/>
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div class="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div wow wow-animation="animate__animated animate__fadeInRight" class="timeline-end mb-10">
                    <time class="font-mono italic">2022</time>
                    <div class="text-lg font-black">Freelance</div>
                    My freelance practice includes the development of websites, data parsers and telegram bots, where I actively used a variety of technologies to achieve the goals set by the employer.
                    <nuxt-img class="py-5" loading="lazy" alt="A freelance work" width="500" height="350" src="/images/work.webp"/>
                </div>
                <hr/>
            </li>
            <li>
                <hr />
                <div class="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div wow wow-animation="animate__animated animate__fadeInLeft" class="timeline-start md:text-end mb-10" >
                    <time class="font-mono italic">2024</time>
                    <div class="text-lg font-black">Develop my own courses</div>
                    My teaching vocation includes creating my own educational courses, providing mentoring support and conducting individual classes. I founded my own school, Lotuschool, where I am a source of inspiration for many students. My pride is the numerous graduates who, thanks to my training, successfully implement their own startups or find high-paying jobs.
                    <nuxt-img class="py-5 md:float-end" loading="lazy" alt="My onlyne courses" width="500" height="350" src="/images/online-course.webp"/>
                </div>
            </li>
        </ul>
        <div wow wow-animation="animate__animated animate__fadeInRight" class="absolute right-28" style="top: 25vh">
            <div class="cloud cloud_gray -rotate-12"></div>
        </div> 
        <div wow wow-animation="animate__animated animate__fadeInLeft" class="absolute left-5"  style="top: 50%">
            <div class="cloud cloud_gray rotate-12"></div>
        </div>
        <div wow wow-animation="animate__animated animate__fadeInRight" class="absolute right-5 " style="top: 75%">
            <div class="cloud cloud_gray -rotate-12"></div>
        </div>
        <div wow wow-animation="animate__animated animate__fadeInRight" class="absolute right-28 " style="bottom: -5%">
            <div class="cloud cloud_gray rotate-12"></div>
        </div>
    </section>
</template>
