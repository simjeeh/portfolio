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
import { ref } from "vue"

const experiences = [
  {
    role: "Senior DevOps Engineer",
    company: "Nvidia",
    location: "Santa Clara, CA",
    period: "Aug 2024 - Present",
    responsibilities: [
      "Own infrastructure strategy and delivery for the GPU-Health product. Lead the team to deliver highly available, scalable, and cost-optimized AWS and Kubernetes infrastructure",
      "Lead design and operation of infrastructure CI/CD. Built terraform stacks, Helm charts, and deployment pipelines, supporting smooth onboarding and upgrades for internal and enterprise customers",
      "Manage reliable and scalable multi-cluster k8 (EKS) infrastructure using ArgoCD",
    ],
    image: '/experience/nvidia.png',
  },
  {
    role: "Software Development Engineer",
    company: "Amazon",
    location: "Santa Monica, CA",
    period: "Nov 2022 - Aug 2024",
    responsibilities: [
      "Worked on key features to optimize data intake and processing for Measurement and Advertising",
      "Maintained and created key features for highly scalable distributed systems managing petabytes of data while processing millions of requests per minute",
      "Developed big data and search solutions for sellers on and off the Amazon platform to track KPIs like conversion rates, total ad impact, and more",
    ],
    image: '/experience/amazon.png',
  },
  {
    role: "Software Engineer",
    company: "Shoreline Software",
    location: "Redwood City, CA",
    period: "Jun 2019 - Oct 2022",
    responsibilities: [
      "Managed demos demonstrating Shoreline end-to-end using a full-stack demo app showing product comparisons to customers",
      "Developed a tool for self hosting the Shoreline backend, which deploys backend and agent AWS infrastructure using Terraform and Helm",
      "Worked with AWS, GCP, and Azure using tools such as EKS, GKE, and AKS as well as ASG, MIGs, and VMSS to add support for multi-cloud agent setups",
      "Created Shoreline Eagle, an internal app used for reserving and scaling k8s cluster and vm environments in AWS",
    ],
    image: '/experience/shoreline.png',
  },
]

// Track flip state per card
const flipped = ref<number | null>(null)

function toggleFlip(index: number) {
  flipped.value = flipped.value === index ? null : index
}
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div
      v-for="(exp, index) in experiences"
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
                Click to see responsibilities
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
                Key Responsibilities
              </h3>
            </div>

            <div class="flex-1 overflow-y-auto items-center py-2">
              <ul class="space-y-2 text-black/90 w-full">
                <li
                  v-for="(r, i) in exp.responsibilities"
                  :key="i"
                  class="flex items-start gap-2 text-left text-sm md:text-xs lg:text-sm"
                >
                  <span class="text-[#90d5c5]">•</span>
                  <span>{{ r }}</span>
                </li>
              </ul>
            </div>

            <div class="mt-auto">
              <p class="text-[10px] text-black/30 text-center">
                Click to flip back
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
