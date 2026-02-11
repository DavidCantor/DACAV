<template>
  <div class="min-h-screen font-sans text-gray-900 bg-red-50">
    <InicioHero />
    <InicioServicios />
    <InicioEnfoque />
    <InicioProceso />
    <InicioProyectos />
    <InicioAcerca />
    <InicioContacto />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Estudio de Desarrollo Web | Páginas Profesionales y SEO',
  ogTitle: 'DACAV — Estudio de Desarrollo Web Profesional',
  description: 'En DACAV creamos sitios web claros, elegantes y optimizados con Nuxt. Impulsa tu negocio con un diseño que genera confianza y convierte clientes.',
  ogDescription: 'Diseño y desarrollo de sitios web corporativos y landing pages de alto rendimiento. Menos promesas, más resultados.',
  ogImage: 'https://dacav.vercel.app/dacav-logo.webp',
  twitterCard: 'summary_large_image',
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

html {
  scroll-behavior: smooth;
  font-family: 'Inter', sans-serif;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.bg-gradient-animate {
  background-size: 200% 200%;
  animation: gradient-shift 15s ease infinite;
}
</style>