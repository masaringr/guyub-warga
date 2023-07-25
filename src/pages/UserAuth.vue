<script setup>
import Header from "@components/HeaderAuth.vue";
import { ref } from "vue";

const textHeader = ref({
  main: "Masuk Ke Akun",
  sub: "Input nomor HP dan Password",
});

console.log("setup login...");
</script>
<template>
  <div class="flex flex-col">
    <Header :judul="textHeader" />
    <div class="bg-white px-8 pt-12 pb-4 -mt-[30px] z-50 rounded-t-3xl">
      <router-view></router-view>
    </div>
  </div>
</template>
