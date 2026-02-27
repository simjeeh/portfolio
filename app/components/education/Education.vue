<script setup lang="ts">
import { educationConfig } from "@/config/education.config"
</script>

<template>
  <section
    id="education"
    class="py-20"
  >
    <div class="text-center w-5/6 mx-auto">
      <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 mb-16 text-white">{{ educationConfig.title }}</h1>
      <EducationCards
        class="max-w-4xl mx-auto"
        :data="educationConfig.data"
      />
    </div>
  </section>
</template>
