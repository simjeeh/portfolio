<script setup>
import { heroConfig } from "@/config/hero.config"
</script>

<template>
  <section
    id="about"
    class="my-20"
  >
    <div class="text-center w-5/6 mx-auto">
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 mb-16 text-white">About Me</h2>
      <ProfileCard
        class="max-w-4xl mx-auto"
        name="Huzaifah Simjee"
        image="/about/profile.jpg"
        job="Senior Software Engineer at Nvidia"
        location="Based in Orange County, California"
        resumeUrl="/resume.pdf"
      />
    </div>
  </section>
</template>
