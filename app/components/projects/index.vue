<script setup lang="ts">
import ProjectCard from '~/components/projects/ProjectCard.vue'
import { projectsConfig } from '~/config/projects'

const { title, data } = projectsConfig

// Optional: If you want exclusive flip behavior like Experience cards
import { ref } from 'vue'
const flipped = ref<number | null>(null)

function toggleFlip(index: number) {
  flipped.value = flipped.value === index ? null : index
}
</script>

<template>
  <section id="projects" class="py-20">
    <div class="text-center">
      <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 mb-16 text-white">
        {{ title }}
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90vw] max-w-7xl mx-auto">
        <ProjectCard
          v-for="(project, index) in data.projects"
          :key="project.id || index"
          :project="project"
          :card-config="data.card"
          :is-flipped="flipped === index"
          @toggle="toggleFlip(index)"
        />
      </div>
    </div>
  </section>
</template>
