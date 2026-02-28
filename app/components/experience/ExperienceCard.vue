<script setup lang="ts">
import type { Experience, ExperienceCard } from '~/types/experience'

interface Props {
  item: Experience
  card: ExperienceCard
  index: number
  isFlipped: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{ toggle: () => void }>()

function handleToggle() {
  emit('toggle')
}
</script>

<template>
  <div
    class="relative w-full aspect-square perspective-1000 cursor-pointer"
    tabindex="0"
    @click="handleToggle"
    @keyup.enter="handleToggle"
  >
    <div
      class="relative w-full h-full transition-transform duration-500 ease-in-out preserve-3d"
      :class="{ 'rotate-y-180': props.isFlipped }"
    >
      <!-- FRONT -->
      <div class="absolute inset-0 backface-hidden">
        <div class="rounded-xl border bg-white shadow-sm h-full p-6 flex flex-col">
          <div class="h-1/2 flex items-center justify-center">
            <img
              :src="props.item.image"
              alt="Company logo"
              class="w-2/3 h-auto object-contain"
            />
          </div>
          <div class="h-1/2 flex flex-col justify-end gap-1">
            <h3 class="text-sm md:text-lg font-semibold text-black">
              {{ props.item.role }}
            </h3>
            <p class="text-xs md:text-sm text-primary font-medium">{{ props.item.company }}</p>
            <p class="text-xs md:text-sm text-black">{{ props.item.location }}</p>
            <p class="text-xs md:text-sm text-black">{{ props.item.period }}</p>
            <p class="text-[10px] md:text-xs text-black/30 pt-2">{{ props.card.front.subtext }}</p>
          </div>
        </div>
      </div>

      <!-- BACK -->
      <div class="absolute inset-0 backface-hidden rotate-y-180">
        <div class="rounded-xl border bg-white shadow-sm h-full p-4 flex flex-col border-primary/50">
          <h3 class="text-base lg:text-lg font-semibold text-black text-center">
            {{ props.card.back.title }}
          </h3>
          <div class="flex-1 overflow-y-auto py-2 relative">
            <ul class="space-y-2 text-black/90 w-full">
              <li
                v-for="(r, i) in props.item.responsibilities"
                :key="i"
                class="flex items-start gap-2 text-left text-sm md:text-xs lg:text-sm"
              >
                <span class="text-primary">{{ props.card.back.bullet }}</span>
                <span>{{ r }}</span>
              </li>
            </ul>
          </div>
          <div class="mt-auto">
            <p class="text-[10px] text-black/30 text-center">{{ props.card.back.subtext }}</p>
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
