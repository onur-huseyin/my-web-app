<template>
  <div>
    <h2 class=" text-xs font-semibold text-gray-400 mb-4">Social media</h2>
    <div class="space-y-5">
      <NuxtLink
        v-for="link in links"
        :key="link.icon"
        :to="link.url"
        target="_blank"
        external
        class="flex items-end gap-4 dark:hover:text-gray-300 group"
      >
        <span class="text-sm dark:text-[#87ffad]">
          {{ link.name }}
        </span>
        <div
          class="flex-1 border-b border-dashed border-gray-300 dark:border-[#235347] group-hover:border-gray-700"
        ></div>
        <Icon :name="link.icon" class="w-8 h-8"></Icon>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const links = [
  {
    name: "GitHub",
    url: "https://github.com/onur-huseyin",
    icon: "mdi:github",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/h%C3%BCseyin-onur-25a0a9184/",
    icon: "mdi:linkedin",
  },
];
</script>
