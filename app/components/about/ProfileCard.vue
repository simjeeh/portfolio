<script setup lang="ts">
import type { ProfileCardData } from "~/types/about"
import { Download } from "lucide-vue-next"

const props = defineProps<{ data: ProfileCardData }>()
</script>

<template>
  <div class="rounded-xl border bg-white border-card-border text-card-foreground shadow-sm p-8 w-full lg:w-3/4">
    <div class="flex flex-col md:flex-row gap-8 items-center">
      <span
        class="relative flex shrink-0 overflow-hidden rounded-full
               flex-[0_0_25%] md:flex-[0_0_20%]
               ring-2 ring-primary"
      >
        <img
          :src="data.image"
          :alt="data.name"
          class="aspect-square h-full w-full object-cover"
        />
      </span>

      <div class="text-center md:text-left">
        <p class="text-lg text-black mt-10">{{ data.job }}</p>
        <p class="text-md text-black mb-6">{{ data.location }}</p>

        <a
          :href="data.resume.url"
          target="_blank"
          download
          class="inline-flex items-center justify-center gap-2
                 rounded-md bg-primary
                 min-h-9 px-4 py-2 text-sm font-medium
                 text-black transition-all duration-300
                 hover:opacity-80"
        >
          <Download class="h-4 w-4" />
          {{ data.resume.text }}
        </a>
      </div>
    </div>
  </div>
</template>
