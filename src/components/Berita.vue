<script setup>
import { ref } from "vue";
import { ClockIcon, ChevronDoubleRightIcon } from "@heroicons/vue/24/outline";

const menus = ref([
  {
    id: 1,
    judul: "Rapat Warga Menjelang Idul Adha 1444 H",
    tanggal: "20 Mar 2023",
    shortdesc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/640px-Eopsaltria_australis_-_Mogo_Campground.jpg",
  },
  {
    id: 2,
    judul: "Lomba 17 Agustus 2023",
    tanggal: "20 Mar 2023",
    shortdesc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/640px-Eopsaltria_australis_-_Mogo_Campground.jpg",
  },
  {
    id: 3,
    judul: "Perayaan HUT RI ke 78",
    tanggal: "20 Mar 2023",
    shortdesc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/640px-Eopsaltria_australis_-_Mogo_Campground.jpg",
  },
]);
</script>
<template>
  <div class="p-4">
    <h4 class="text-yellow-400 font-semibold">Info Terbaru</h4>
    <div class="grid grid-cols-12 gap-2 mt-2">
      <div
        v-for="menu in menus"
        :key="menu.id"
        class="col-span-12 border-2 border-emerald-200/60 shadow-lg shadow-emerald-50 rounded-xl p-1"
      >
        <div class="grid grid-cols-12 gap-2">
          <div
            class="col-span-4 bg-cover bg-center bg-no-repeat w-full h-[72px] rounded-lg"
            :style="'background-image: url(' + menu.thumbnail + ')'"
          >
            <!-- <img class="w-full h-auto" :src="menu.thumbnail" alt="" /> -->
          </div>
          <div class="col-span-8 flex flex-col justify-between gap-1">
            <div>
              <h4 class="text-[12px] text-slate-700 font-semibold line-clamp-1">
                {{ menu.judul }}
              </h4>
              <p class="text-[10px] line-clamp-2 text-slate-400">
                {{ menu.shortdesc }}
              </p>
            </div>
            <div class="flex items-center gap-1">
              <ClockIcon class="w-3 h-3 text-slate-400" />
              <span class="text-[11px] text-slate-400 leading-none mt-[1px]">
                {{ menu.tanggal }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-span-12 text-emerald-700/80 flex items-center justify-center gap-1 mt-2"
      >
        <span class="font-semibold text-sm">Lihat Info Lainnya</span>
        <ChevronDoubleRightIcon class="w-4 h-4 stroke-2" />
      </div>
    </div>
  </div>
</template>
