<template>
  <section class="py-16 md:py-24 px-4 sm:px-6 bg-gray-900 text-white rounded-t-[40px] md:rounded-t-[80px]">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div class="lg:col-span-7 space-y-12 md:space-y-16">
        <div class="flex items-center gap-4">
          <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">📋</div>
          <h2 class="text-3xl md:text-5xl font-bold italic tracking-tighter">Proceso Directo y Sin Complicaciones</h2>
        </div>
        <div class="space-y-8">
          <div v-for="(step, i) in steps" :key="i" class="flex gap-4 md:gap-6 group items-start">
            <div class="w-12 h-12 md:w-14 md:h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-emerald-400 text-xl font-black italic flex-shrink-0 group-hover:scale-110 transition-transform">
              0{{ i + 1 }}
            </div>
            <p class="pt-2 text-white/80 text-base md:text-xl leading-tight font-light group-hover:text-white transition-colors">{{ step }}</p>
          </div>
        </div>
      </div>

      <div class="lg:col-span-5">
        <div class="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl lg:sticky lg:top-10">
          <h2 class="text-2xl md:text-3xl font-bold italic mb-6">¿Listo para empezar?</h2>
          <p class="text-white/60 mb-6 text-base md:text-lg">Para los <strong class="text-white">servicios rápidos</strong>, el precio es claro y el tiempo de entrega está definido.</p>
          <p class="text-white/60 mb-10 text-base md:text-lg">Para <strong class="text-white">proyectos a medida</strong>, cotizamos en base a tus necesidades específicas.</p>
          <NuxtLink to="/contact" class="w-full py-5 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold uppercase tracking-widest text-xs md:text-sm rounded-2xl flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500">
            Solicitar información <span class="text-xl">→</span>
          </NuxtLink>
          <p class="text-white/40 text-center text-xs mt-6">Respuesta en menos de 48 horas</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  'Cuéntame tu idea o el problema que tienes con tu web.',
  'Te envío una propuesta clara con precio y plazo definido en horas.',
  'Trabajo en el desarrollo o ajustes de forma ágil y transparente.',
  'Revisamos juntos el resultado y realizamos los ajustes finales.',
  'Te entrego tu web funcionando y lista para recibir clientes.',
]
</script>