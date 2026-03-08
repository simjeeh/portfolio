<script setup lang="ts">
import type { ScrollData } from "~/types/hero"

defineProps<{
  data: ScrollData
}>()

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: "smooth" })
  }
}
</script>

<template>
  <div class="mt-16 flex justify-center">
    <button
      class="flex items-center text-white hover:text-primary hover:bg-white/5
             transition-all duration-300 px-4 py-2 rounded-md"
      @click="scrollToSection(data.target)"
      :aria-label="`Scroll to ${data.target} section`"
    >
      <span class="text-sm">
        {{ data.text }}
      </span>

      <span class="ml-2 text-sm">
        {{ data.subtext }}
      </span>
    </button>
  </div>
</template>
