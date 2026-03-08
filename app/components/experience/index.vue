<script setup lang="ts">
import ExperienceCard from '~/components/experience/ExperienceCard.vue'
import { experienceConfig } from '~/config/experience'

import { ref } from 'vue'

const flipped = ref<number | null>(null)

function toggleFlip(index: number) {
  flipped.value = flipped.value === index ? null : index
}
</script>

<template>
  <section id="experience" class="py-20">
    <div class="text-center">
      <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 mb-16 text-white">
        {{ experienceConfig.title }}
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90vw] max-w-7xl mx-auto">
        <ExperienceCard
          v-for="(exp, index) in experienceConfig.data.experiences"
          :key="index"
          :item="exp"
          :card="experienceConfig.data.card"
          :index="index"
          :is-flipped="flipped === index"
          @toggle="toggleFlip(index)"
        />
      </div>
    </div>
  </section>
</template>
