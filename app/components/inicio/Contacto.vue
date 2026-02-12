<template>
  <section ref="sectionRef" class="relative py-32 px-6 bg-[#020406] overflow-hidden min-h-[80vh] flex items-center">
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div class="absolute inset-0 opacity-[0.15]" 
        style="background-image: linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px); background-size: 60px 60px; mask-image: radial-gradient(circle at center, black, transparent 80%);">
      </div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse"></div>
    </div>

    <div class="max-w-7xl mx-auto w-full relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        
        <div class="w-full lg:w-3/5 text-left">
          <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/20 mb-10 opacity-0 transition-all duration-1000"
            :class="{ 'opacity-100 translate-y-0': isVisible, 'translate-y-4': !isVisible }">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span class="text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em]">Disponible para nuevos proyectos</span>
          </div>

          <h2 class="text-white text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter opacity-0 transition-all duration-700 delay-100"
            :class="{ 'opacity-100 translate-x-0': isVisible, '-translate-x-10': !isVisible }">
            ¿Hablamos
            <span class="relative inline-block">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 pr-4">ahora</span>
              <span class="text-emerald-500 inline-block relative px-4" style="filter: drop-shadow(0 0 15px rgba(16,185,129,0.4))">?</span>
            </span>
          </h2>

          <p class="mt-10 text-slate-400 text-xl max-w-lg font-light opacity-0 transition-all duration-700 delay-300"
            :class="{ 'opacity-100 translate-y-0': isVisible, 'translate-y-10': !isVisible }">
            Llevamos tu presencia digital al siguiente nivel con 
            <span class="text-white font-medium">diseño estratégico</span> y tecnología de alto rendimiento.
          </p>

          <div class="mt-12 flex flex-wrap gap-6 opacity-0 transition-all duration-700 delay-500"
            :class="{ 'opacity-100 translate-y-0': isVisible, 'translate-y-10': !isVisible }">
            
            <NuxtLink to="/contact" 
              class="relative bg-emerald-500 text-black px-10 py-5 rounded-full font-black uppercase tracking-widest text-[11px] transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] shadow-[0_10px_30px_-10px_rgba(16,185,129,0.5)]">
              Iniciar Proyecto
            </NuxtLink>
            
            <NuxtLink to="/work" 
              class="border border-white/20 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-[11px] transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:-translate-y-1">
              Ver Portafolio
            </NuxtLink>
          </div>
        </div>

        <div class="w-full lg:w-2/5 grid grid-cols-2 gap-4 opacity-0 transition-all duration-1000 delay-700"
          :class="{ 'opacity-100 scale-100': isVisible, 'scale-95': !isVisible }">
          
          <div class="col-span-2 p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] backdrop-blur-md hover:border-emerald-500/40 transition-all duration-500 group">
            <span class="block text-white text-4xl md:text-5xl font-black mb-1 group-hover:text-emerald-400 transition-colors">100%</span>
            <span class="text-slate-500 text-[10px] font-black uppercase tracking-widest">Rendimiento SEO</span>
          </div>

          <div class="p-8 bg-white/[0.03] border border-white/10 rounded-[2rem] backdrop-blur-md hover:border-cyan-500/40 transition-all duration-500">
            <div class="text-2xl mb-2">⚡</div>
            <span class="text-slate-500 text-[10px] font-black uppercase tracking-widest block">Velocidad Extrema</span>
          </div>

          <div class="p-8 bg-white/[0.03] border border-white/10 rounded-[2rem] backdrop-blur-md hover:border-emerald-500/40 transition-all duration-500">
            <div class="text-2xl mb-2">💎</div>
            <span class="text-slate-500 text-[10px] font-black uppercase tracking-widest block">Código Premium</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const sectionRef = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true
      observer.disconnect()
    }
  }, { threshold: 0.1 })
  if (sectionRef.value) observer.observe(sectionRef.value)
})
</script>

<style scoped>
/* Solo mantenemos lo esencial que no es Tailwind puro */
h2 {
  -webkit-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
}

/* Suavizado de animaciones */
.transition-all {
  backface-visibility: hidden;
}
</style>