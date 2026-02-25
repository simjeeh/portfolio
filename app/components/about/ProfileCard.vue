<script setup lang="ts">
import { Download } from "lucide-vue-next"

interface Props {
  name: string
  image: string
  job: string
  location: string
  resumeUrl: string
}

defineProps<Props>()
</script>

<template>
  <div
    class="rounded-xl border bg-white border-card-border text-card-foreground shadow-sm p-8 w-full lg:w-3/4"
  >
    <div class="flex flex-col md:flex-row gap-8 items-center">
      <span
        class="relative flex shrink-0 overflow-hidden rounded-full
               flex-[0_0_25%] md:flex-[0_0_20%]
               ring-2 ring-[#90d5c5]"
      >
        <img
          :src="image"
          :alt="name"
          class="aspect-square h-full w-full object-cover"
        />
      </span>

      <div class="text-center md:text-left">
        <p class="text-lg text-black mt-10">{{ job }}</p>
        <p class="text-md text-black mb-6">{{ location }}</p>

        <a
          :href="resumeUrl"
          download
          class="inline-flex items-center justify-center gap-2
                 rounded-md bg-[#90d5c5]
                 min-h-9 px-4 py-2 text-sm font-medium
                 text-black transition-all duration-300
                 hover:opacity-80"
        >
          <Download class="h-4 w-4" />
          Download Resume
        </a>
      </div>
    </div>
  </div>
</template>
