<template>
  <div>
    <h1
      class="text-2xl font-bold tracking-tight text-zinc-800 dark:text-[#2a8848]"
    >
      {{ title }}
    </h1>
    <p class="mt-6 text-base font-normal p-2 rounded-lg dark:bg-[#2f6841] text-gray-600 dark:text-[#a8ffc4]">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>
