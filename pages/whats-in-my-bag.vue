<template>
  <main class="min-h-screen">
    <AppHeader
      class="mb-12"
      title="What's in my bag?"
      :description="description"
    />
    <div class="space-y-24">
      <ul class="space-y-8">
        <AppUsesHeader title="Hardware" />
        <AppUsesItem v-for="(item, id) in hardware" :key="id" :item="item" />
      </ul>
      <ul class="space-y-8">
        <AppUsesHeader title="Software" />
        <AppUsesItem v-for="(item, id) in software" :key="id" :item="item" />
      </ul>
    </div>
  </main>
</template>

<script setup>
const description =
  "Software equipment used by Hüseyin Onur";
useSeoMeta({
  title: "Software equipment used by Hüseyin Onur",
  description,
});
const { data: items } = await useAsyncData("uses", () =>
  queryContent("/uses").find()
);
const hardware = items.value.filter((item) => item.category === "hardware");
const software = items.value.filter((item) => item.category === "software");
const desk = items.value.filter((item) => item.category === "desk");
const other = items.value.filter((item) => item.category === "others");
</script>
