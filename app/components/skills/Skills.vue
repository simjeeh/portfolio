<script setup lang="ts">
import { skillsConfig } from "@/config/skills.config"
</script>

<template>
  <section
    id="skills"
    class="py-20"
  >
    <div class="text-center max-w-6xl mx-auto px-6">
      <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 mb-16 text-white">{{ skillsConfig.title }}</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        <SkillsCategory
          v-for="category in skillsConfig.skillsCategories"
          :key="category.title"
          :data="category"
        />
      </div>
    </div>
  </section>
</template>
