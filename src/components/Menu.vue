<script setup>
import { ref } from "vue";

const menus = ref([
  {
    id: 1,
    judul: "Iuran",
    icon: `<svg data-icon-name="wallet-money" data-style="flat-color" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Flat Color" id="wallet-money" class="icon flat-color" width="36" height="36"><path style="fill: rgb(246, 214, 30);" d="M10.91,4.06,6.74,10H5.58a1,1,0,0,1-.88-.54,1,1,0,0,1,.06-1l3.51-5A1,1,0,0,1,8.91,3a1,1,0,0,1,.75.16Zm8.66,1.56L14.66,2.18a1,1,0,0,0-1.39.25l-1.55,2.2L8,10h9.25A1,1,0,0,0,18,9.57L19.82,7a1,1,0,0,0-.25-1.39Z" id="secondary"></path><rect style="fill: rgb(45, 144, 77);" rx="2" height="14" width="20" y="8" x="2" id="primary"></rect><path style="fill: rgb(246, 214, 30);" d="M17,13h5a0,0,0,0,1,0,0v4a0,0,0,0,1,0,0H17a1,1,0,0,1-1-1V14A1,1,0,0,1,17,13Z" data-name="secondary" id="secondary-2"></path></svg>`,
  },
  {
    id: 2,
    judul: "UMKM",
    icon: `<svg data-icon-name="store" data-style="flat-color" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Flat Color" id="store" class="icon flat-color" width="36" height="36"><path style="fill: rgb(246, 214, 30);" d="M19,10H5a1,1,0,0,0-1,1v9a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V11A1,1,0,0,0,19,10Z" id="secondary"></path><path style="fill: rgb(45, 144, 77);" d="M21.75,9,20.17,3.44A2,2,0,0,0,18.25,2H5.75A2,2,0,0,0,3.83,3.46L2.25,9A6.12,6.12,0,0,0,2,10.75a3.25,3.25,0,0,0,1,2.3,3.33,3.33,0,0,0,4.55,0A3.24,3.24,0,0,0,9.75,14,3.2,3.2,0,0,0,12,13.09a3.24,3.24,0,0,0,4.5,0,3.22,3.22,0,0,0,2.25.91A3.24,3.24,0,0,0,22,10.75,6,6,0,0,0,21.75,9Z" id="primary"></path></svg>`,
  },
  {
    id: 3,
    judul: "CCTV",
    icon: `<svg data-icon-name="surveillance-camera" data-style="flat-color" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Flat Color" id="surveillance-camera" class="icon flat-color" width="36" height="36"><path style="fill: rgb(45, 144, 77);" d="M11.55,12.17a1,1,0,0,0-1.38.28L6.46,18H4V17a1,1,0,0,0-2,0v4a1,1,0,0,0,2,0V20H7a1,1,0,0,0,.83-.45l4-6A1,1,0,0,0,11.55,12.17Z" id="primary"></path><path style="fill: rgb(246, 214, 30);" d="M20,5H18a1,1,0,0,0-.95.68L16.28,8H5A1,1,0,0,0,4,9v3a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V11h2a2,2,0,0,0,2-2V7A2,2,0,0,0,20,5Z" id="secondary"></path><path style="fill: rgb(45, 144, 77);" d="M19.81,2.42A1,1,0,0,0,19,2H4A2,2,0,0,0,2,4V8a2,2,0,0,0,2,2H17A1,1,0,0,0,18,9.32l2-6A1,1,0,0,0,19.81,2.42Z" data-name="primary" id="primary-2"></path></svg>`,
  },
  {
    id: 4,
    judul: "Pengurus",
    icon: `<svg data-icon-name="user-square" data-style="flat-color" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Flat Color" id="user-square" class="icon flat-color" width="36" height="36"><rect style="fill: rgb(45, 144, 77);" rx="2" height="20" width="20" y="2" x="2" id="primary"></rect><path style="fill: rgb(246, 214, 30);" d="M15.14,14.89a5,5,0,1,0-6.28,0A6,6,0,0,0,6,20v1a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V20A6,6,0,0,0,15.14,14.89Z" id="secondary"></path></svg>`,
  },
]);
</script>
<template>
  <div class="p-8 py-4">
    <h4 class="text-yellow-400 font-semibold">Menu Utama</h4>
    <div class="grid grid-cols-12 gap-4 mt-2">
      <div
        v-for="menu in menus"
        :key="menu.id"
        class="col-span-3 flex flex-col gap-2 items-center"
      >
        <div
          v-html="menu.icon"
          class="border-2 rounded-xl p-2 border-emerald-500/90"
        ></div>
        <span class="text-emerald-700/80 font-medium">
          {{ menu.judul }}
        </span>
      </div>
    </div>
  </div>
</template>
