<script setup>
useHead({
  titleTemplate: (titleChunck) => {
    return titleChunck ? `${titleChunck} - Guglielmo Piasenti` : 'Guglielmo Piasenti'
  }
})
</script>


<template>
  <div class="bg-black text-white">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
