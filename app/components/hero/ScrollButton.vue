<script setup lang="ts">
import type { ScrollButtonProps } from "@/types/props/hero/ScrollButtonProps";
import type { PropType } from "vue";

const props = defineProps({
  data: { type: Object as PropType<ScrollButtonProps["data"]>, required: true },
});

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: "smooth" })
}
</script>

<template>
  <div class="mt-16 flex justify-center">
    <button
      variant="ghost"
      class="flex items-center text-white hover:text-[#90d5c5] hover:bg-white/5 transition-all duration-300 px-4 py-2 rounded-md"
      @click="scrollToSection(data.target)"
    >
      <span class="text-sm">{{ data.text }}</span>
      <span class="ml-2 text-sm">{{ data.subtext }}</span>
    </button>
  </div>
</template>
