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
import { Github, ExternalLink } from "lucide-vue-next"
import type { ProjectCardsProps } from "@/types/props/projects/ProjectCardsProps";
import type { ref, PropType } from "vue";

const props = defineProps({
  data: { type: Object as PropType<ProjectCardsProps["data"]>, required: true },
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
      v-for="(project, index) in data.projects"
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
          <div class="flex flex-col h-full rounded-xl bg-white">
            <!-- Image (top half) -->
            <div class="flex-1 flex flex-col rounded-t-xl overflow-hidden">
              <img
                :src="project.image"
                alt="Project Image"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Text (bottom half, aligned bottom) -->
            <div class="flex-1 flex flex-col justify-start text-left px-6">
              <h3 class="text-xl font-semibold text-black pt-4">
                {{ project.title }}
              </h3>
              <p class="text-[10px] md:text-xs text-black/30 pt-2">
                {{ data.card.front.subtext }}
              </p>
            </div>
          </div>
        </div>

        <!-- BACK -->
        <div class="backface-hidden rotate-y-180">
          <div
            class="rounded-xl border bg-white shadow-sm h-full p-6
                  flex flex-col border-[#90d5c5]/50"
          >
            <div>
              <h3 class="text-base lg:text-lg font-semibold text-black text-left">
                {{ project.title }}
              </h3>
              <p class="text-sm md:text-xs lg:text-sm text-black text-left py-6">
                {{ project.description }}
              </p>
            </div>

            <div class="mt-auto">
              <p class="text-xs md:text-[10px] lg:text-xs font-semibold text-black text-left">
                {{ data.card.back.techStack }}
              </p>
              <div class="flex flex-wrap gap-3 p-3">
                <span
                  v-for="(tech, index) in project.techStack"
                  :key="index"
                  class="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#90d5c5] text-white text-xs md:text-[10px] lg:text-xs font-semibold"
                >
                  {{ tech }}
                </span>
              </div>
              <div class="w-2/3 mx-auto flex items-center gap-4"
                :class="{
                  'justify-between': project.code && project.live,
                  'justify-center': !(project.code && project.live)
                }"
              >
                <a
                  v-if="project.code"
                  :href="project.code"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex text-xs md:text-[10px] lg:text-xs items-center gap-2 text-black hover:text-[#90d5c5] transition-colors"
                >
                  <Github class="h-4 w-4" />
                  <span>{{ data.card.back.code }}</span>
                </a>

                <a
                  v-if="project.live"
                  :href="project.live"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex text-xs md:text-[10px] lg:text-xs items-center gap-2 text-black hover:text-[#90d5c5] transition-colors"
                >
                  <ExternalLink class="h-4 w-4" />
                  <span>{{ data.card.back.live }}</span>
                </a>
              </div>
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
