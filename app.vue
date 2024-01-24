<script setup>
useHead({
  titleTemplate: (titleChunck) => {
    return titleChunck
      ? `${titleChunck} - Guglielmo Piasenti`
      : "Guglielmo Piasenti";
  },
});
</script>

<template>
  <div class="bg-[#050505] text-white">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
