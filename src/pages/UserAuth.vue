<script setup>
import Header from "@components/HeaderAuth.vue";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

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
      sub: "Input nomor HP dan Password",
    };
  }
});
</script>
<template>
  <div class="flex flex-col">
    <Header :judul="textHeader" />
    <div class="bg-white px-8 pt-12 pb-4 -mt-[30px] z-50 rounded-t-3xl">
      <router-view v-slot="{ Component, route }">
        <transition name="slide-fade" mode="out-in" :duration="500">
          <div :key="route.name">
            <component :is="Component"></component>
          </div>
        </transition>
      </router-view>
      <!-- <Transition name="slide-fade" mode="out-in">
        <router-view></router-view>
      </Transition> -->
    </div>
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
