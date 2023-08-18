<script setup>
import { ref } from "vue";
import {
  ArrowRightOnRectangleIcon,
  UsersIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/vue/24/outline";
import { vMaska } from "maska";

const isShowPassword = ref(false);
</script>
<template>
  <div>
    <form class="grid grid-cols-12 gap-2 mb-2">
      <div class="col-span-12 relative">
        <label
          class="absolute bg-white text-base -top-[12px] left-2 px-2 text-slate-700/90"
          >Nomor HP</label
        >
        <input
          placeholder="0000-0000-0000"
          type="numeric"
          v-maska
          data-maska="####-####-####"
          class="border border-slate-300 block w-full rounded-lg p-2.5 px-4 pt-4 text-slate-700/90 focus:border-transparent focus:outline-emerald-500/90"
        />
      </div>
      <!-- <div class="col-span-12 relative mt-6">
        <label
          class="absolute bg-white text-base -top-[12px] left-2 px-2 text-slate-700/90"
          >Password</label
        >
        <input
          :type="!isShowPassword ? 'password' : 'text'"
          placeholder="*******"
          class="border border-slate-300 block w-full rounded-lg p-2.5 pr-10 px-4 pt-4 text-slate-700/90 focus:border-transparent focus:outline-emerald-500/90"
        />
        <div
          class="absolute right-2 top-0 flex h-full justify-center items-center"
        >
          <EyeIcon
            v-if="!isShowPassword"
            @click="isShowPassword = !isShowPassword"
            class="w-7 h-7 text-slate-700/90"
          />
          <EyeSlashIcon
            v-else
            @click="isShowPassword = !isShowPassword"
            class="w-7 h-7 text-slate-700/90"
          />
        </div>
      </div> -->
      <!-- <div class="col-span-12 text-right">
        <router-link
          :to="{ name: 'ForgotPwd', replace: true }"
          class="text-amber-600/70 font-semibold text-sm"
          >Lupa Password?</router-link
        >
      </div> -->
      <div class="col-span-12 mt-2">
        <button
          type="submit"
          class="capitalize text-xl w-full flex flex-row justify-center items-center gap-2 rounded-lg p-3 py-2 bg-emerald-700/90 text-slate-100 tracking-wide"
        >
          <ArrowRightOnRectangleIcon class="w-6 h-6 stroke-2 text-slate-100" />
          <span>masuk</span>
        </button>
      </div>
    </form>
    <div class="h-[2px] bg-slate-300 relative mt-6">
      <div
        class="absolute w-6 h-6 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
      ></div>
      <div
        class="absolute w-4 h-4 bg-slate-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
      ></div>
      <div
        class="absolute w-3 h-3 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
      ></div>
    </div>
    <!-- <div class="mt-4 text-center">
      <span class="text-slate-700/50 font-semibold text-sm"
        >Belum punya akun?</span
      >
      <div class="mt-2">
        <router-link
          :to="{ name: 'Register', replace: true }"
          type="button"
          class="capitalize text-xl w-full flex flex-row justify-center items-center gap-2 rounded-lg p-3 py-2 bg-amber-500/90 text-slate-100 tracking-wide"
        >
          <UsersIcon class="w-6 h-6 stroke-2 text-slate-100" />
          <span>daftar sekarang</span>
        </router-link>
      </div>
    </div> -->
  </div>
</template>
