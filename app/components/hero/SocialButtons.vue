<script setup lang="ts">
import { Github, Linkedin, Mail } from "lucide-vue-next"
import type { SocialButtonsProps } from "@/types/props/hero/SocialButtonsProps";
import type { PropType } from "vue";

const props = defineProps({
  data: { type: Object as PropType<SocialButtonsProps["data"]>, required: true },
});
</script>

<template>
  <div class="flex items-center justify-center gap-6">
    
    <!-- GitHub -->
    <a
      :href="data.github"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      class="h-12 w-12 flex items-center justify-center rounded-md transition-all duration-300
             bg-transparent hover:bg-white/5 text-white hover:text-[#90d5c5]"
    >
      <Github class="h-4 w-4" />
    </a>

    <!-- LinkedIn -->
    <a
      :href="data.linkedin"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      class="h-12 w-12 flex items-center justify-center rounded-md transition-all duration-300
             bg-transparent hover:bg-white/5 text-white hover:text-[#90d5c5]"
    >
      <Linkedin class="h-4 w-4" />
    </a>

    <!-- Email -->
    <a
      :href="'mailto:' + data.email"
      aria-label="Email"
      class="h-12 w-12 flex items-center justify-center rounded-md transition-all duration-300
             bg-transparent hover:bg-white/5 text-white hover:text-[#90d5c5]"
    >
      <Mail class="h-4 w-4" />
    </a>

  </div>
</template>
