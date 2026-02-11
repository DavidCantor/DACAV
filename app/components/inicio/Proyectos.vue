<template>
  <section class="py-24 px-4 sm:px-6 bg-white">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-gray-900 text-sm font-black uppercase tracking-[0.4em] mb-12 border-l-4 border-emerald-500 pl-6">
        Proyectos Reales
      </h2>
      <div
        class="group relative rounded-4xl overflow-hidden flex flex-col lg:flex-row min-h-[500px] border border-gray-100 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
        <div class="lg:w-1/2 relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-emerald-900/90 to-cyan-900/80"></div>
          <div
            class="absolute inset-0 bg-[url('/images/inicio/proyectos.webp')] bg-cover bg-center opacity-30">
          </div>
          <div class="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
            <span class="text-white/20 font-black uppercase tracking-[10px] text-3xl lg:text-4xl mb-6">Portfolio</span>
            <div
              class="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold shadow-2xl">
              D
            </div>
          </div>
        </div>
        <div
          class="p-10 lg:p-16 lg:w-1/2 flex flex-col justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <h3 class="text-emerald-400 font-bold text-sm uppercase tracking-widest mb-4">Caso de Éxito</h3>
          <h4 class="text-4xl md:text-5xl font-bold mb-8">Asconfi-JY</h4>
          <p class="text-white/70 text-xl leading-relaxed mb-10">
            Sitio web profesional con enfoque en SEO, rendimiento y conversión de clientes.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            <div v-for="tag in projectTags" :key="tag" class="flex items-center gap-3 text-white/80">
              <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span>{{ tag }}</span>
            </div>
          </div>
          <a href="https://asconfijy.netlify.app/" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center group/link text-white font-bold text-lg">
            Ver Proyecto
            <span class="ml-4 transition-transform group-hover/link:translate-x-3 text-emerald-400">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projectTags = [
  'Diseño corporativo',
  'Representación SSR',
  'Optimización SEO',
  'Formulario contacto'
]
</script>