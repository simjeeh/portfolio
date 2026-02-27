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

<script setup lang="ts">
import type { ExperienceCardsProps } from "@/types/props/experience/ExperienceCardsProps";
import type { ref, PropType } from "vue";

const props = defineProps({
  data: { type: Object as PropType<ExperienceCardsProps["data"]>, required: true },
});

// Track flip state per card
const flipped = ref<number | null>(null)

function toggleFlip(index: number) {
  flipped.value = flipped.value === index ? null : index
}
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div
      v-for="(exp, index) in data.experiences"
      :key="index"
      class="w-full aspect-square perspective-1000 cursor-pointer"
      tabindex="0"
      @click="toggleFlip(index)"
      @keyup.enter="toggleFlip(index)"
    >
      <div
        class="relative w-full h-full transition-transform duration-500 ease-in-out preserve-3d"
        :class="{ 'rotate-y-180': flipped === index }"
      >
        <!-- FRONT -->
        <div class="backface-hidden">
          <div
            class="rounded-xl border bg-white shadow-sm h-full p-6 flex flex-col"
          >
            <!-- Image (top half) -->
            <div class="h-1/2 flex items-center justify-center">
              <img
                :src="exp.image"
                alt="Company logo"
                class="w-2/3 h-auto object-contain"
              />
            </div>

            <!-- Text (bottom half, aligned bottom) -->
            <div class="h-1/2 flex flex-col justify-end gap-1">
              <h3 class="text-sm md:text-lg font-semibold text-black">
                {{ exp.role }}
              </h3>
              <p class="text-xs md:text-sm text-[#90d5c5] font-medium">
                {{ exp.company }}
              </p>
              <p class="text-xs md:text-sm text-black">
                {{ exp.location }}
              </p>
              <p class="text-xs md:text-sm text-black">
                {{ exp.period }}
              </p>
              <p class="text-[10px] md:text-xs text-black/30 pt-2">
                {{ data.card.front.subtext }}
              </p>
            </div>
          </div>
        </div>

        <!-- BACK -->
        <div class="backface-hidden rotate-y-180">
          <div
            class="rounded-xl border bg-white shadow-sm h-full p-4
                  flex flex-col border-[#90d5c5]/50"
          >
            <div>
              <h3 class="text-base lg:text-lg font-semibold text-black text-center">
                {{ data.card.back.title }}
              </h3>
            </div>

            <div class="flex-1 overflow-y-auto items-center py-2">
              <ul class="space-y-2 text-black/90 w-full">
                <li
                  v-for="(r, i) in exp.responsibilities"
                  :key="i"
                  class="flex items-start gap-2 text-left text-sm md:text-xs lg:text-sm"
                >
                  <span class="text-[#90d5c5]">{{ data.card.back.bullet }}</span>
                  <span>{{ r }}</span>
                </li>
              </ul>
            </div>

            <div class="mt-auto">
              <p class="text-[10px] text-black/30 text-center">
                {{ data.card.back.subtext }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
