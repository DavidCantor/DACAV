<template>
  <section 
    ref="sectionRef"
    class="relative py-28 md:py-48 px-4 overflow-hidden bg-[#020406]"
    aria-labelledby="hero-services-title"
  >
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#020406]/80 to-[#020406] z-10"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(16,185,129,0.15),transparent_70%)] z-10"></div>
      <NuxtImg
        src="/images/servicios/hero.webp"
        alt="Entorno de trabajo profesional"
        class="absolute inset-0 w-full h-full object-cover opacity-20"
        width="1920"
        height="1080"
        fetchpriority="high"
        loading="eager"
      />
    </div>

    <div class="max-w-6xl mx-auto text-center relative z-20">


      <h1 
        id="hero-services-title"
        class="text-white text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black tracking-tighter leading-[0.9] mb-10 opacity-0 transition-all duration-700 delay-200"
        :class="{ 'opacity-100 translate-y-0': isVisible, 'translate-y-8': !isVisible }"
      >
        Diseñamos webs
        <span class="block mt-2 relative">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-emerald-400 animate-gradient-slow px-2">
            que convierten visitas
          </span>
        </span>
        en clientes
      </h1>

      <p class="text-slate-400 text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto font-light mb-16 opacity-0 transition-all duration-700 delay-400"
        :class="{ 'opacity-100 translate-y-0': isVisible, 'translate-y-8': !isVisible }">
        Soluciones digitales profesionales para negocios que quieren crecer y empezar a 
        <span class="text-white font-medium border-b border-emerald-500/50">captar clientes potenciales</span>
      </p>

      <div
        class="inline-block p-1 rounded-[2.5rem] bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 transition-all duration-1000 delay-600"
        :class="{ 'opacity-100 scale-100': isVisible, 'scale-95': !isVisible }"
      >
        <div class="bg-[#05070a]/90 backdrop-blur-2xl px-10 py-6 rounded-[2.3rem] border border-white/5 flex flex-col md:flex-row items-center gap-6 shadow-2xl">
          <div class="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center text-black shadow-[0_0_30px_rgba(16,185,129,0.4)]">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div class="text-center md:text-left">
            <p class="text-white font-black uppercase tracking-widest text-sm mb-1">Sin procesos complejos</p>
            <p class="text-emerald-400 text-xs font-bold uppercase tracking-tight">Resultados tangibles en menos de 7 días.</p>
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
/* Gradiente Animado Suave */
@keyframes gradient-move {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient-slow {
  background-size: 200% auto;
  animation: gradient-move 6s linear infinite;
}

/* Animación de la línea de scroll */
@keyframes scroll-line {
  0% { transform: scaleY(0); transform-origin: top; opacity: 0; }
  50% { transform: scaleY(1); transform-origin: top; opacity: 1; }
  50.1% { transform: scaleY(1); transform-origin: bottom; opacity: 1; }
  100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
}

.animate-scroll-line {
  animation: scroll-line 2.5s cubic-bezier(0.19, 1, 0.22, 1) infinite;
}

/* Optimización de texto */
h1 {
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
</style>