<script setup lang="ts">
import { experienceConfig } from "@/config/experience.config"
</script>

<template>
  <section
    id="experience"
    class="py-20"
  >
    <div class="text-center">
      <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 mb-16 text-white">{{ experienceConfig.title }}</h1>
      <ExperienceCards
        class="w-[90vw] max-w-7xl mx-auto"
        :data="experienceConfig.data"
      />
    </div>
  </section>
</template>
