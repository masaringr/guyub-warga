<script setup>
import Banner from "@components/Banner.vue";
import MainMenu from "@components/Menu.vue";
import Berita from "@components/Berita.vue";
import { UserIcon, BellIcon } from "@heroicons/vue/24/solid";
console.log("setup home...");
</script>
<template>
  <header class="flex flex-row gap-2 justify-between items-center p-4 py-3">
    <div class="px-2">
      <h4 class="text-xl text-slate-500/90 line-clamp-1">
        Hai,
        <span class="text-emerald-700/90 font-semibold">Ari Nugroho</span>
      </h4>
    </div>
    <div
      class="px-2 bg-slate-100 h-10 rounded-full flex justify-center items-center"
    >
      <span class="flex gap-2">
        <BellIcon class="text-yellow-400/90 w-7 h-7" />
        <div class="w-[2px] bg-slate-300"></div>
        <RouterLink :to="{ name: 'Login' }">
          <UserIcon class="text-yellow-400/90 w-7 h-7" />
        </RouterLink>
      </span>
    </div>
  </header>
  <banner></banner>
  <main-menu></main-menu>
  <div class="bg-slate-100 h-4"></div>
  <berita></berita>
</template>
