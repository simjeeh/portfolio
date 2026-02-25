<script setup lang="ts">
import { GraduationCap } from "lucide-vue-next"

const education = [
  {
    degree: "Bachelor's in Computer Science",
    institution: "University of California, Riverside",
    location: "Riverside, CA",
    year: "June 2020",
  },
  {
    degree: "High School",
    institution: "Sage Hill School",
    location: "Newport Coast, CA",
    year: "June 2016",
  },
]
</script>


<template>
  <div class="relative space-y-8 max-w-4xl mx-auto">
    <div
      class="absolute left-8 top-8 bottom-8 w-0.5 bg-[#90d5c5]/30 hidden md:block"
    ></div>

    <div
      v-for="(item, index) in education"
      :key="index"
      class="relative pl-0 md:pl-20"
    >
      <div class="absolute left-6 top-6 hidden md:block">
        <div
          class="h-4 w-4 rounded-full bg-[#90d5c5] ring-4 ring-black"
        ></div>
      </div>

      <div
        class="rounded-xl border border-white/10 bg-white shadow-sm
               p-6 transition-all duration-300 hover:shadow-lg"
      >
        <div class="flex text-left items-start gap-4">
          <div class="p-3 rounded-md bg-[#90d5c5]/10">
            <GraduationCap class="h-6 w-6 text-[#90d5c5]" />
          </div>

          <div class="flex-1">
            <h3 class="text-xl font-semibold text-black mb-1">
              {{ item.degree }}
            </h3>

            <p class="text-[#90d5c5] font-medium mb-2">
              {{ item.institution }}
            </p>

            <p class="text-sm text-black/60 mb-2">
              {{ item.location }} • {{ item.year }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
