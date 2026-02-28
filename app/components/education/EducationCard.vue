<script setup lang="ts">
import { GraduationCap } from "lucide-vue-next"
import type { Education } from "~/types/education"

const props = defineProps<{
  item: Education
  period: string
}>()
</script>

<template>
  <div class="relative pl-0 md:pl-20">
    <div class="absolute left-6 top-6 hidden md:block">
      <div class="h-4 w-4 rounded-full bg-primary ring-4 ring-black"></div>
    </div>

    <div
      class="rounded-xl border border-white/10 bg-white shadow-sm
             p-6 transition-all duration-300 hover:shadow-lg"
    >
      <div class="flex text-left items-start gap-4">
        <div class="p-3 rounded-md bg-primary/10">
          <GraduationCap class="h-6 w-6 text-primary" />
        </div>

        <div class="flex-1">
          <h3 class="text-xl font-semibold text-black mb-1">{{ props.item.degree }}</h3>
          <p class="text-primary font-medium mb-2">{{ props.item.institution }}</p>
          <p class="text-sm text-black/60 mb-2">
            {{ props.item.location }} {{ props.period }} {{ props.item.year }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
