<script setup lang="ts">
import { aboutConfig } from "@/config/about.config"
</script>

<template>
  <section
    id="about"
    class="py-20"
  >
    <div class="text-center w-5/6 mx-auto">
      <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 mb-16 text-white">{{ aboutConfig.title }}</h1>
      <ProfileCard
        class="max-w-4xl mx-auto"
        :data="aboutConfig.data"
      />
    </div>
  </section>
</template>
