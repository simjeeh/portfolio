<script setup lang="ts">
import { ref, watch } from "vue"
import { useWindowScroll } from "@vueuse/core"
import { Menu, X, Fish } from "lucide-vue-next"
import { navbarConfig } from "~/config/navbar.config"

const navLinks = navbarConfig.navLinks

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeSection = ref("home")

// Nuxt-friendly scroll tracking
const { y } = useWindowScroll()

// Throttled scroll handler via requestAnimationFrame
let ticking = false

const updateScrollState = () => {
  if (!process.client) return

  isScrolled.value = y.value > 50

  const scrollPosition = y.value + 150
  const pageHeight = document.documentElement.scrollHeight
  const windowHeight = window.innerHeight

  // If at bottom → activate last section
  if (scrollPosition + windowHeight >= pageHeight - 5) {
    activeSection.value = navLinks[navLinks.length - 1].id
    return
  }

  for (const link of navLinks) {
    const el = document.getElementById(link.id)
    if (!el) continue

    const rect = el.getBoundingClientRect()

    if (rect.top <= 100 && rect.bottom >= 100) {
      activeSection.value = link.id
      break
    }
  }
}

watch(y, () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateScrollState()
      ticking = false
    })
    ticking = true
  }
})

const scrollToSection = (id: string) => {
  if (!process.client) return
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  isMobileMenuOpen.value = false
}
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled || isMobileMenuOpen
        ? 'bg-black/90 backdrop-blur-md border-b border-gray-700'
        : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <button
          @click="scrollToSection('home')"
          class="flex items-center text-xl font-bold text-white hover:text-[#90d5c5] transition-colors"
        >
          <Fish class="h-6 w-6 mr-2" />
          Huzaifah
        </button>

        <!-- Desktop Links -->
        <div class="hidden md:flex items-center gap-2">
          <button
            v-for="link in navLinks"
            :key="link.id"
            @click="scrollToSection(link.id)"
            class="relative px-4 py-2 text-sm rounded-md font-bold transition-colors"
            :class="{
              'text-[#90d5c5] hover:bg-white/5': activeSection === link.id,
              'text-white hover:bg-white/5': activeSection !== link.id
            }"
          >
            {{ link.label }}

            <span
              v-if="activeSection === link.id"
              class="absolute bottom-1 left-1/2 -translate-x-1/2 w-9 h-0.5 rounded-full"
              style="background-color: #90d5c5"
            />
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden text-white"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <component :is="isMobileMenuOpen ? X : Menu" class="h-6 w-6" />
        </button>
      </div>

      <!-- Mobile Links -->
      <div v-if="isMobileMenuOpen" class="md:hidden mt-4 pb-4 space-y-2">
        <button
          v-for="link in navLinks"
          :key="link.id"
          @click="scrollToSection(link.id)"
          class="w-full text-right px-4 py-2 rounded transition-colors"
          :class="activeSection === link.id
            ? 'bg-gray-700 text-[#90d5c5]'
            : 'text-white hover:bg-gray-800'"
        >
          {{ link.label }}
        </button>
      </div>
    </div>
  </nav>
</template>
