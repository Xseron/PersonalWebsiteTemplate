<script setup lang="ts">
    function setTheme(theme: string){
        document.documentElement.setAttribute('data-theme', theme);
    }
</script>
<template>
    <ul class="menu menu-horizontal">
        <li>
            <details>
                <summary>Theme</summary>
                <ul class="w-32">
                    <li><a @click="setTheme('business')">Black</a></li>
                    <li><a @click="setTheme('coffee')">Coffeeeeee</a></li>
                </ul>
            </details>
        </li>
    </ul>
</template>
