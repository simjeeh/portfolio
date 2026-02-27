<script setup lang="ts">
import type { SkillsCategoryProps } from "@/types/props/skills/SkillsCategoryProps";

const props = defineProps<SkillsCategoryProps>();
</script>

<template>
  <div class="space-y-4">
    <h3 class="text-xl text-left font-semibold border-l-4 border-[#90d5c5] pl-4">
      {{ props.data.title }}
    </h3>

    <div class="flex flex-wrap gap-2">
      <span
        v-for="(skill, index) in props.data.skills"
        :key="skill"
        class="px-2 py-1 text-xs rounded-lg
               border border-[#90d5c5]/20
               hover:bg-[#90d5c5]/10
               transition-all duration-300
               cursor-default"
      >
        {{ skill }}
      </span>
    </div>
  </div>
</template>
