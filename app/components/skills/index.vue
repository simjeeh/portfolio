<script setup lang="ts">
import SkillsCategory from '~/components/skills/SkillsCategory.vue'
import { skillsConfig } from '~/config/skills'

const { title, skillsCategories } = skillsConfig
</script>

<template>
  <section id="skills" class="py-20">
    <div class="text-center max-w-6xl mx-auto px-6">
      <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 mb-16 text-white">
        {{ title }}
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        <div
          v-for="category in skillsCategories"
          :key="category.title"
          class="pt-8"
        >
          <SkillsCategory :data="category" />
        </div>
      </div>
    </div>
  </section>
</template>
