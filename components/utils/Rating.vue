<script setup>
const props = defineProps({
    points: Number
});
</script>

<template>
    <span class="rating flex max-w-fit">
        <div v-for="i in points" class="mask mask-star-2 bg-orange-400 min-w-5">&nbsp;</div>
        <div v-for="i in (5 - points)" class="mask mask-star-2 bg-gray-600 min-w-5">&nbsp;</div>
    </span>
</template>
