<script setup>
const props = defineProps({
    tabs: Object
});
</script>
<template>
    <div class="drawer">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
            <header class="fixed top-0 z-50 right-0 left-0" id="navbar">
                <nav class="navbar bg-base-100">
                    <div class="navbar-start">
                        <div class="flex-none lg:hidden">
                            <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <a class="btn btn-ghost text-4xl"><img src="/images/logo.png" alt="My Logo" width="100"/></a>
                    </div>
                    <div class="navbar-center hidden lg:flex">
                        <ul class="menu menu-horizontal px-1">
                            <li v-for="tab in tabs">
                                <a :href="tab.href">{{ tab.text }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="navbar-end">
                        <ChangeTheme />
                    </div>
                </nav>
            </header>
            <main>
                <slot></slot>
            </main>
        </div>
        <nav class="drawer-side z-50">
            <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu pr-20 pl-5 min-h-full bg-base-200">
                <li v-for="tab in tabs">
                    <a :href="tab.href">{{ tab.text }}</a>
                </li>
            </ul>
        </nav>
    </div>
</template>
