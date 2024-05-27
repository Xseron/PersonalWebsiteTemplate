<script setup>
const tabs = [
    { href: "#about", text: "About Me" },
    { href: "#journey", text: "Journey" },
    { href: "#projects", text: "My Projects" },
    { href: "#wiki", text: "My Wiki" },
    { href: "#contact", text: "Contact Me" },
];

</script>

<template>
  <div>
    <NuxtLayout>
      <AppHeader :tabs="tabs">
        <NuxtPage/>
      </AppHeader>
      <AppFooter/>
    </NuxtLayout>
  </div>
</template>