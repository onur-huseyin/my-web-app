<template>
  <div class="space-y-6">
    <NuxtImg src="/avatar.jpg" alt="Fayaz Ahmed"
      class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16"
      sizes="48px sm:64px" placeholder format="webp" />
    <h1 class="text-xl font-bold tracking-tight text-gray-800 dark:text-[#DAF1DE]">
      Hello!
    </h1>
    <p class="text-gray-900 dark:text-[#8EB69B]">
      I'm Hüseyin, a software and design expert based in Istanbul. I specialize in building and improving applications
      from scratch using TypeScript, React, Vue, and Node technologies. Here, I share user developments, and you can
      explore the technologies I use and the web applications I develop.
    </p>
    <p class="text-gray-900 dark:text-[#8EB69B]">
      I am currently working as a Frontend Software Developer, actively participating in both large-scale and small-scale projects. Best regards.
    </p>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Hüseyin Onur",
  description:
    "I'm Huseyin, your friendly neighborhood software, product engineer and designer from Istanbul, Turkey. I specialize in building web applications and sites using Javascript, React, Vue & Node.",
});
</script>
