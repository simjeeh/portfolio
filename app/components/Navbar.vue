<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { Menu, X } from "lucide-vue-next";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
];

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const activeSection = ref("home");

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  isMobileMenuOpen.value = false;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;

  for (const link of navLinks) {
    const el = document.getElementById(link.id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection.value = link.id;
        break;
      }
    }
  }
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-700' : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <button
          @click="scrollToSection('home')"
          class="text-xl font-bold text-white hover:text-[#90d5c5] transition-colors"
        >
          Portfolio
        </button>

        <!-- Desktop Links -->
        <div class="hidden md:flex items-center gap-2">
          <button
            v-for="link in navLinks"
            :key="link.id"
            @click="scrollToSection(link.id)"
            class="relative transition-colors transition-opacity px-4 py-2 text-sm rounded-md font-bold"
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
          class="w-full text-left px-4 py-2 rounded hover:bg-gray-800 transition-colors"
          :class="activeSection === link.id ? 'bg-gray-700 text-[#90d5c5]' : 'text-white'"
        >
          {{ link.label }}
        </button>
      </div>
    </div>
  </nav>
</template>