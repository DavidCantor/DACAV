<template>
  <section class="py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
    <div class="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/10 blur-[150px] rounded-full -translate-y-1/2 -translate-x-1/2"></div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div class="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div class="relative group flex-shrink-0">
            <div
              class="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-700">
            </div>
            <div
              class="relative w-48 h-48 lg:w-56 lg:h-56 bg-gray-900/50 rounded-[2.5rem] border border-white/10 p-2 backdrop-blur-sm shadow-2xl overflow-hidden">
              <img src="/dacav-logo.webp" alt="Logo DACAV"
                class="w-full h-full object-cover rounded-[2rem] transform transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>

          <div class="flex flex-col justify-center">
            <h2 class="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-8 text-center md:text-left">
              Acerca de <br />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">DACAV.</span>
            </h2>
            <div class="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mb-4 self-center md:self-start"></div>
          </div>
        </div>

        <div class="space-y-12">
          <p class="text-xl lg:text-2xl text-white/80 font-light leading-relaxed">
            DACAV es un estudio liderado por un desarrollador junior con enfoque fuerte en frontend moderno con
            <span class="text-white font-bold">Nuxt</span> y bases sólidas en backend.
          </p>

          <div class="grid grid-cols-1 xs:grid-cols-3 gap-8">
            <div
              v-for="stat in stats" :key="stat.l"
              class="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 min-h-[140px] flex flex-col justify-center transition-all duration-300 hover:bg-white/10 hover:border-emerald-500/30">
              <div class="text-emerald-400 text-xs font-black uppercase tracking-widest mb-3">{{ stat.l }}</div>
              <div class="text-2xl font-bold leading-tight break-words">{{ stat.v }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { l: 'Atención', v: 'Personalizada' },
  { l: 'Proyectos', v: 'Bien pensados' },
  { l: 'Enfoque', v: 'Calidad' }
]
</script>