<script setup lang="ts">
import { educationConfig } from "~/config/education"
import EducationCard from "./EducationCard.vue"
</script>

<template>
  <section id="education" class="py-20">
    <div class="text-center w-5/6 mx-auto">
      <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 mb-16 text-white">
        {{ educationConfig.title }}
      </h1>

      <div class="relative space-y-8 max-w-4xl mx-auto">
        <!-- Vertical timeline line -->
        <div class="absolute left-8 top-8 bottom-8 w-0.5 bg-primary/30 hidden md:block"></div>

        <!-- Loop over education items -->
        <EducationCard
          v-for="(item, index) in educationConfig.data.education"
          :key="index"
          :item="item"
          :period="educationConfig.data.period"
        />
      </div>
    </div>
  </section>
</template>
