<script setup>
import Header from "@components/HeaderAuth.vue";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import {
  ArrowRightOnRectangleIcon,
  UsersIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/vue/24/outline";
import { vMaska } from "maska";

const textHeader = computed(() => {
  const route = useRoute();

  if (route.name == "Register") {
    return {
      main: "Buat Akun",
      sub: "Lengkapi data diri Anda",
    };
  } else if (route.name == "ForgotPwd") {
    return {
      main: "Lupa Password",
      sub: "Pastikan password mudah diingat",
    };
  } else {
    return {
      main: "Masuk Ke Akun",
      sub: "Input nomor HP",
    };
  }
});

function submitLogin() {
  console.log("login");
}
</script>
<template>
  <div
    class="h-screen bg-cover bg-center bg-no-repeat bg-[url('./assets/bg-login2.png')]"
  >
    <div
      class="h-full flex flex-col gap-8 justify-center items-center relative"
    >
      <span class="text-white text-[52px] block -mt-12">Guyub</span>
      <div
        class="w-10/12 bg-white/30 backdrop-blur-sm rounded-xl border-2 border-white/70 p-6 pb-1"
      >
        <h4 class="text-white text-center mb-6 leading-none text-2xl">
          Masuk Ke Akun
        </h4>
        <form
          @submit.prevent="submitLogin"
          class="grid grid-cols-12 gap-2 mb-2"
        >
          <div class="col-span-12 relative">
            <label class="text-base text-white block mb-1">Nomor HP</label>
            <input
              placeholder="0000-0000-0000"
              type="numeric"
              v-maska
              data-maska="####-####-####"
              class="border border-slate-300 block w-full rounded-lg p-2.5 px-4 text-slate-900/90 focus:border-transparent focus:outline-amber-500/90"
            />
          </div>
          <div class="col-span-12 mt-2">
            <button
              type="submit"
              class="capitalize text-xl w-full flex flex-row justify-center items-center gap-2 rounded-lg p-3 py-2 bg-amber-600/90 active:bg-amber-500/90 border-2 border-amber-500 text-slate-100 tracking-wide"
            >
              <ArrowRightOnRectangleIcon
                class="w-6 h-6 stroke-2 text-slate-100"
              />
              <span>masuk</span>
            </button>
          </div>
          <div class="col-span-12 mt-4 text-center">
            <span class="text-sm text-white">Beta Version</span>
          </div>
        </form>
      </div>
    </div>
    <!-- <Header :judul="textHeader" />
    <div class="bg-white px-8 pt-12 pb-4 -mt-[30px] z-50 rounded-t-3xl">
      <router-view v-slot="{ Component, route }">
        <transition name="slide-fade" mode="out-in" :duration="500">
          <div :key="route.name">
            <component :is="Component"></component>
          </div>
        </transition>
      </router-view>
    </div> -->
  </div>
</template>
<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
