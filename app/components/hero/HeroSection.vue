<script setup>
import { heroConfig } from "@/config/hero.config"
</script>

<template>
  <section
    id="home"
    class="relative h-screen flex items-center justify-center bg-cover bg-center"
    :style="{ backgroundImage: `url(${heroConfig.backgroundImage})` }"
  >
    <div class="absolute inset-0 bg-black/50"></div>

    <div class="relative z-10 text-center">
      <h1 class="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 text-white">{{ heroConfig.name }}</h1>
      <p class="text-2xl md:text-3xl lg:text-4xl text-white/80 mb-12">{{ heroConfig.title }}</p>
      <SocialButtons
        :github="heroConfig.socialLinks.github"
        :linkedin="heroConfig.socialLinks.linkedin"
        :email="heroConfig.socialLinks.email"
      />
      <ScrollButton
        :text="heroConfig.scrollDown.text"
        :targetId="heroConfig.scrollDown.target"
      />
    </div>
  </section>
</template>
