<script setup lang="ts">
import { Github, ExternalLink } from 'lucide-vue-next'
import type { Project, ProjectCardConfig } from '~/types/projects'

interface Props {
  project: Project
  cardConfig: ProjectCardConfig
  isFlipped?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{ toggle: () => void }>()

function handleToggle() {
  emit('toggle')
}

function handleKey(event: KeyboardEvent) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    handleToggle()
  }
}
</script>

<template>
  <div
    class="w-full aspect-square perspective-1000 cursor-pointer"
    tabindex="0"
    role="button"
    :aria-pressed="props.isFlipped"
    @click="handleToggle"
    @keyup="handleKey"
  >
    <div
      class="relative w-full h-full transition-transform duration-500 ease-in-out preserve-3d"
      :class="{ 'rotate-y-180': props.isFlipped }"
    >
      <!-- FRONT -->
      <div class="absolute inset-0 backface-hidden">
        <div class="flex flex-col h-full rounded-xl bg-white overflow-hidden">
          <div class="flex-1">
            <img
              :src="props.project.image"
              :alt="`Screenshot of ${props.project.title}`"
              loading="lazy"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="flex-1 flex flex-col justify-start px-6 py-4">
            <h3 class="text-xl font-semibold text-black">{{ props.project.title }}</h3>
            <p class="text-[10px] md:text-xs text-black/30 pt-2">
              {{ props.cardConfig.front.subtext }}
            </p>
          </div>
        </div>
      </div>

      <!-- BACK -->
      <div class="absolute inset-0 backface-hidden rotate-y-180">
        <div class="rounded-xl border border-primary/50 bg-white shadow-sm h-full p-6 flex flex-col">
          <div>
            <h3 class="text-base lg:text-lg font-semibold text-black">
              {{ props.project.title }}
            </h3>
            <p class="text-sm md:text-xs lg:text-sm text-black py-6">
              {{ props.project.description }}
            </p>
          </div>

          <div class="mt-auto">
            <p class="text-xs md:text-[10px] lg:text-xs font-semibold text-black">
              {{ props.cardConfig.back.techStack }}
            </p>

            <div class="flex flex-wrap gap-3 p-3">
              <span
                v-for="(tech, index) in props.project.techStack"
                :key="index"
                class="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary text-white text-xs md:text-[10px] lg:text-xs font-semibold"
              >
                {{ tech }}
              </span>
            </div>

            <div
              class="w-2/3 mx-auto flex items-center gap-4"
              :class="{
                'justify-between': props.project.code && props.project.live,
                'justify-center': !(props.project.code && props.project.live)
              }"
            >
              <a
                v-if="props.project.code"
                :href="props.project.code"
                target="_blank"
                rel="noopener noreferrer"
                class="flex text-xs md:text-[10px] lg:text-xs items-center gap-2 text-black hover:text-primary transition-colors"
              >
                <Github class="h-4 w-4" />
                <span>{{ props.cardConfig.back.code }}</span>
              </a>

              <a
                v-if="props.project.live"
                :href="props.project.live"
                target="_blank"
                rel="noopener noreferrer"
                class="flex text-xs md:text-[10px] lg:text-xs items-center gap-2 text-black hover:text-primary transition-colors"
              >
                <ExternalLink class="h-4 w-4" />
                <span>{{ props.cardConfig.back.live }}</span>
              </a>
            </div>

            <p class="text-[10px] text-black/30 text-center mt-2">
              {{ props.cardConfig.back.subtext }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}
.preserve-3d {
  transform-style: preserve-3d;
}
.rotate-y-180 {
  transform: rotateY(180deg);
}
.backface-hidden {
  backface-visibility: hidden;
  transform-style: preserve-3d;
  position: absolute;
  inset: 0;
}
</style>
