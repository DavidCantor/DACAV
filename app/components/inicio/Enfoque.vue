<template>
  <section class="py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-900 to-gray-800">
    <div class="max-w-7xl mx-auto">
      <div class="rounded-4xl p-8 md:p-16 lg:p-20 relative overflow-hidden border border-gray-700/50 shadow-2xl">
        <div
          class="absolute top-0 left-0 w-72 h-72 bg-emerald-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl">
        </div>
        <div
          class="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl">
        </div>

        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 class="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-12">
              Un enfoque claro y directo
            </h2>
            <ul class="space-y-6">
              <li v-for="item in reasons" :key="item" class="flex items-center gap-4 text-white/80 text-lg">
                <div
                  class="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-emerald-500/30">
                  ✔
                </div>
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="flex flex-col justify-center">
            <div class="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl relative overflow-hidden">
              <div class="absolute top-0 right-0 text-9xl font-black text-white/5">"</div>
              <p class="text-2xl lg:text-3xl text-white font-light italic leading-snug relative">
                "Menos promesas, más resultados.
                <span class="text-emerald-400 font-bold">Sitios web bien hechos.</span>"
              </p>
              <div class="mt-8 pt-6 border-t border-white/10">
                <p class="text-white font-semibold">David Cantor</p>
                <p class="text-white/60 text-sm">Fundador de DACAV</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const reasons = [
  'Comunicación clara y acompañamiento cercano',
  'Procesos simples y transparentes',
  'Código limpio y buenas prácticas',
  'Atención directa en cada proyecto',
  'Soluciones realistas según tu presupuesto'
]
</script>