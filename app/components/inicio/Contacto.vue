<template>
  <section class="py-32 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400"></div>
    <div class="max-w-4xl mx-auto text-center relative z-10">
      <h2 class="text-gray-900 text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-12">¿Hablamos?</h2>
      <p class="text-gray-600 text-xl md:text-2xl mb-16 leading-relaxed max-w-3xl mx-auto">
        Si necesitas una página web profesional para tu negocio o quieres mejorar la que ya tienes, conversemos.
      </p>
      <NuxtLink to="/contact"
        class="group relative bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-16 py-6 rounded-full font-black uppercase tracking-[0.2em] text-sm hover:shadow-2xl hover:shadow-emerald-500/50 transform hover:-translate-y-2 transition-all duration-300 overflow-hidden inline-block no-underline">
        <span class="relative z-10">Contactar ahora</span>
        <div
          class="absolute inset-0 bg-gradient-to-r from-emerald-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        </div>
      </NuxtLink>
    </div>
    <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-300/10 rounded-full blur-3xl"></div>
    <div class="absolute -top-20 -right-20 w-80 h-80 bg-cyan-300/10 rounded-full blur-3xl"></div>
  </section>
</template>