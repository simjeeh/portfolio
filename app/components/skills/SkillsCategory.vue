<script setup lang="ts">
import type { SkillsCategory } from '~/types/skills'

const props = defineProps<{ data: SkillsCategory }>()
</script>

<template>
  <div class="space-y-4">
    <h3 class="text-xl text-left font-semibold border-l-4 border-primary pl-4">
      {{ props.data.title }}
    </h3>

    <div class="flex flex-wrap gap-2">
      <span
        v-for="skill in props.data.skills"
        :key="skill"
        class="px-2 py-1 text-xs rounded-lg
               border border-primary/20
               hover:bg-primary/10
               transition-all duration-300
               cursor-default"
      >
        {{ skill }}
      </span>
    </div>
  </div>
</template>
