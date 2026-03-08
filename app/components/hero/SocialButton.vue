<script setup lang="ts">
import { Github, Linkedin, Mail } from "lucide-vue-next"
import type { SocialIcon } from "~/types/hero"

const props = defineProps<{
  href: string
  icon: SocialIcon
  label: string
}>()

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail
}

const Icon = iconMap[props.icon]
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="label"
    class="h-12 w-12 flex items-center justify-center rounded-md
           transition-all duration-300
           bg-transparent hover:bg-white/5
           text-white hover:text-primary"
  >
    <component :is="Icon" class="h-4 w-4" />
  </a>
</template>
