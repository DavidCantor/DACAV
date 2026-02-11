<template>
    <section ref="sectionRef" class="relative py-24 px-4 sm:px-6 bg-[#0B0F1A] overflow-hidden">
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div class="absolute top-20 left-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-float-slow"></div>
      <div class="absolute bottom-40 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-float-delayed"></div>
      <div class="absolute top-1/2 left-1/3 w-32 h-32 bg-emerald-400/5 rounded-full blur-2xl animate-pulse-slow"></div>
      <div class="absolute inset-0 opacity-[0.07]" 
        style="background-image: radial-gradient(circle at 1px 1px, rgb(16 185 129 / 0.15) 1px, transparent 0); background-size: 40px 40px;">
      </div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="rounded-[2.5rem] p-6 md:p-16 lg:p-20 relative overflow-hidden border border-gray-700/50 shadow-2xl bg-gray-800/40 backdrop-blur-sm opacity-0"
        :class="{ 'animate-scale-in': isVisible }">
        
        <div class="absolute top-0 left-0 w-72 h-72 bg-emerald-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl animate-pulse-slow" aria-hidden="true"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl animate-pulse-slow" style="animation-delay: 1s;" aria-hidden="true"></div>

        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div class="space-y-10">
            <h2 id="approach-title" class="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] opacity-0"
              :class="{ 'animate-slide-up': isVisible }"
              style="animation-delay: 0.3s;">
              Un enfoque
              <span class="relative inline-block mt-2 animate-gradient-text">
                claro y directo
                <span class="absolute -bottom-2 left-0 w-full h-3 bg-emerald-500/20 -z-10 rounded-full blur-md"></span>
              </span>
            </h2>
            
            <ul class="space-y-5" role="list">
              <li v-for="(item, index) in reasons" :key="index" 
                class="flex items-start gap-4 text-white/90 text-lg group opacity-0"
                :class="{ 'animate-slide-up': isVisible }"
                :style="{ animationDelay: `${0.4 + index * 0.1}s` }">
                <div class="relative flex-shrink-0 mt-1" aria-hidden="true">
                  <div class="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div class="relative w-7 h-7 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
                    <span>✓</span>
                  </div>
                </div>
                <span class="pt-0.5 leading-relaxed">{{ item }}</span>
              </li>
            </ul>
          </div>

          <div class="flex flex-col justify-center opacity-0"
            :class="{ 'animate-slide-up': isVisible }"
            style="animation-delay: 0.6s;">
            
            <div class="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md border border-white/10 p-6 md:p-10 rounded-3xl relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-500">
              
              <div class="absolute -inset-full top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div class="relative z-10">
                <div class="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                  <div class="relative group/photo flex justify-center md:justify-start">
                    <div class="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl blur-2xl opacity-10 group-hover/photo:opacity-40 transition-opacity duration-700"></div>
                    
                    <div class="relative w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-3xl overflow-hidden border-2 border-emerald-500/40 group-hover/photo:border-emerald-400 transition-all duration-500 transform group-hover/photo:scale-105 shadow-2xl">
                      <NuxtImg 
                        src="/images/inicio/david-santiago-cantor-vargas.webp"
                        alt="David Cantor, Fundador de DACAV"
                        width="160"
                        height="160"
                        class="w-full h-full object-cover"
                        loading="lazy"
                        format="webp"
                      />
                    </div>
                    <div class="absolute -bottom-2 -right-2 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white text-[10px] uppercase tracking-widest font-black px-3 py-1.5 rounded-full shadow-lg border-2 border-gray-800">
                      Fundador
                    </div>
                  </div>
                  
                  <div class="text-center md:text-left">
                    <p class="text-white font-black text-2xl tracking-tight">David Cantor</p>
                    <p class="text-emerald-400 font-bold text-base mt-1">Fundador de DACAV</p>
                    <div class="flex items-center justify-center md:justify-start gap-2 mt-2">
                      <div class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                      <p class="text-white/60 text-xs font-medium uppercase tracking-wider">Desarrollador de Software</p>
                    </div>
                  </div>
                </div>

                <div class="relative mt-6 pt-6 border-t border-white/10">
                  <blockquote class="text-xl md:text-2xl lg:text-3xl text-white/90 font-light italic leading-snug">
                    “Construimos la presencia 
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 font-bold not-italic">
                      que tu marca merece."
                    </span>
                  </blockquote>
                  <p class="text-white/50 font-bold text-sm mt-4 uppercase tracking-[0.2em]">
                    Tu marca, bien presentada.
                  </p>
                </div>
              </div>
            </div>

            <div class="mt-10 text-center lg:text-right opacity-0"
              :class="{ 'animate-fade-in': isVisible }"
              style="animation-delay: 0.9s;">
              <NuxtLink to="/about" 
                class="inline-flex items-center gap-3 bg-white/5 hover:bg-emerald-500 text-emerald-400 hover:text-white px-8 py-4 rounded-full transition-all duration-300 text-sm font-bold border border-emerald-500/30 hover:border-transparent group"
                aria-label="Leer más sobre la historia de DACAV">
                <span>Conoce más sobre DACAV</span>
                <span class="text-xl transform transition-transform duration-300 group-hover:translate-x-2" aria-hidden="true">→</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const reasons = [
  'Comunicación clara y acompañamiento cercano',
  'Procesos simples y transparentes',
  'Código limpio y buenas prácticas',
  'Atención directa en cada proyecto',
  'Soluciones realistas según tu presupuesto'
]

const sectionRef = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true
      observer.disconnect()
    }
  }, { threshold: 0.15 })

  if (sectionRef.value) observer.observe(sectionRef.value)
})
</script>

<style scoped>
.opacity-0 { opacity: 0; }

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.97); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-slide-up { animation: slideUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
.animate-scale-in { animation: scaleIn 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
.animate-fade-in { animation: fadeIn .5s ease forwards; }

.animate-float-slow { animation: floatSlow 8s ease-in-out infinite; }
.animate-float-delayed { animation: floatSlow 10s ease-in-out infinite; animation-delay: 1s; }
.animate-pulse-slow { animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }

@keyframes floatSlow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

.animate-gradient-text {
  background: linear-gradient(135deg, #34d399 0%, #22d3ee 50%, #34d399 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradientText 2s ease infinite;
}

@keyframes gradientText {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@media (prefers-reduced-motion: reduce) {
  .animate-slide-up, .animate-scale-in, .animate-fade-in {
    animation: none;
    opacity: 1;
  }
}
</style>