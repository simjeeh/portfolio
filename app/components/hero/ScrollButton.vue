<script setup lang="ts">

const props = defineProps({
  text: { type: String, required: true },
  targetId: { type: String, required: true },
})

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: "smooth" })
}
</script>

<template>
  <div class="mt-16 flex justify-center">
    <Button
      variant="ghost"
      class="flex items-center text-white hover:text-[#90d5c5] hover:bg-white/5 transition-all duration-300 px-4 py-2 rounded-md"
      @click="scrollToSection(props.targetId)"
    >
      <span class="text-sm">{{ props.text }}</span>
      <span class="ml-2 text-sm">↓</span>
    </Button>
  </div>
</template>
