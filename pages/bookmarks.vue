<template>
  <main class="min-h-screen">
    <AppHeader class="mb-8" title="Bookmarks" :description="description" />
    <ul class="space-y-2">
      <li v-for="bookmark in bookmarks" :key="bookmark.id">
        <a
          :href="bookmark.url"
          target="_blank"
          class="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-lg -m-2 text-sm min-w-0"
        >
          <UAvatar
            :src="getThumbnail(bookmark.url)"
            :alt="bookmark.label"
            :ui="{ rounded: 'rounded-md' }"
          />
          <p class="truncate text-gray-700 dark:text-gray-200">
            {{ bookmark.label }}
          </p>
          <span class="flex-1"></span>
          <span class="text-xs font-medium text-gray-400 dark:text-gray-600">
            {{ getHost(bookmark.url) }}
          </span>
        </a>
      </li>
    </ul>
  </main>
</template>

<script setup>
const description =
  "Hüseyin Onur's online research and software development tools";
useSeoMeta({
  title: "Bookmarks | Hüseyin Onur",
  description,
});

const bookmarks = [
  {
    id: 1,
    label: "My research home Github",
    url: "https://github.com/",
  },
  {
    id:22,
    label:"My system development tool",
    url:"https://supabase.com/"
  },

  {
    id:19,
    label:"My AI robot promter",
    url:"https://copilot.microsoft.com/"
  },
  {
    id:20,
    label:"Backend development",
    url:"https://nodejs.org/en"
  },
  {
    id:21,
    label:"Development standarts",
    url:"https://www.w3schools.com/"
  },
  {
    id: 10,
    label: "High performance Next UI Components library",
    url: "https://ui.shadcn.com/",
  },
  {
    id:17,
    label:"Research Library",
    url: "https://app.daily.dev/"
  },
  {
    id:18,
    label:"English learning",
    url:"https://www.busuu.com/"
  },
  {
    id: 3,
    label: "Medium Articles",
    url: "https://medium.com/",
  },
  {
    id:4 ,
    label: "Stabilized notification library",
    url: "https://sonner.emilkowal.ski/",
  },
  {
    id: 6,
    label: "Stabilized API Platform",
    url: "https://rapidapi.com/",
  },
  {
    id: 12,
    label: "Google Fonts",
    url: "https://fonts.google.com/",
  },
  {
    id: 11,
    label: "Dicebear Awesome avatars",
    url: "https://www.dicebear.com/",
  },
  {
    id:5,
    label: "Stabilized animations library",
    url: "https://vaul.emilkowal.ski/default",
  },
  {
    id: 9,
    label: "SVG Spinners",
    url: "https://github.com/n3r4zzurr0/svg-spinners",
  },
  {
    id: 2,
    label: "My research home Stack",
    url: "https://stackoverflow.com/",
  },

];

function getHost(url) {
  const parsedUrl = new URL(url);
  let host = parsedUrl.host;
  if (host.startsWith("www.")) {
    host = host.substring(4);
  }
  return host;
}

function getThumbnail(url) {
  const host = getHost(url);
  return `https://logo.clearbit.com/${host}`;
}
</script>
