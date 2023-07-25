<script setup>
const props = defineProps({
  judul: {
    main: String,
    sub: String,
  },
});
</script>
<template>
  <div class="relative">
    <svg
      class="w-full h-auto"
      width="480"
      height="259"
      viewBox="0 0 480 259"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="480" height="259" fill="#F5F5F5" />
      <rect width="480" height="259" fill="#064E3B" />
      <circle cx="101" cy="-35" r="328" fill="#1E6F58" />
      <circle cx="122" cy="-57" r="254" fill="#1D8567" />
    </svg>
    <div class="absolute bottom-[30px] left-4 pb-4">
      <h4 class="text-slate-50 font-semibold text-3xl">
        {{ props.judul.main }}
      </h4>
      <span class="text-slate-300 text-md">{{ props.judul.sub }}</span>
    </div>
  </div>
</template>
