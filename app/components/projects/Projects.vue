<script setup lang="ts">
import { projectsConfig } from "@/config/projects.config"
</script>

<template>
  <section
    id="projects"
    class="py-20"
  >
    <div class="text-center">
      <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 mb-16 text-white">{{ projectsConfig.title }}</h1>
      <ProjectCards
        class="w-[90vw] max-w-7xl mx-auto"
        :data="projectsConfig.data"
      />
    </div>
  </section>
</template>
