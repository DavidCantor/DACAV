<template>
  <section ref="sectionRef" class="relative py-24 px-4 sm:px-6 bg-slate-50 overflow-hidden">
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-float-slow"></div>
      <div class="absolute bottom-40 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      <div class="absolute top-1/2 left-1/3 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl animate-pulse-slow"></div>
      <div class="absolute inset-0 opacity-[0.3]" 
        style="background-image: radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.05) 1px, transparent 0); background-size: 40px 40px;">
      </div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
        <div class="max-w-2xl opacity-0" :class="{ 'animate-slide-up': isVisible }">

          <h2 class="text-slate-900 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.25]">
            <span class="inline-block text-slate-800">Pensadas para</span>
            <br />
            <span class="relative inline-block mt-2 py-2 animate-gradient-text">
              negocios reales
              <span class="absolute bottom-1 left-0 w-full h-3 bg-emerald-500/15 -z-10 rounded-full blur-md"></span>
            </span>
          </h2>
          
          <p class="text-slate-600 text-lg md:text-xl leading-relaxed">
            En <span class="font-bold text-emerald-600">DACAV</span> ayudamos a profesionales y pequeñas empresas a tener 
            <span class="font-semibold text-slate-900">una presencia digital sólida</span>, sin complicaciones técnicas ni procesos confusos.
          </p>

        </div>

        <div class="opacity-0" :class="{ 'animate-slide-up': isVisible }" style="animation-delay: 0.4s; animation-fill-mode: forwards;">
          <NuxtLink to="/services" 
            class="group relative inline-flex items-center gap-3 text-emerald-600 font-bold text-sm tracking-widest uppercase py-4 px-6 overflow-hidden rounded-full transition-all duration-300 hover:bg-emerald-500/10">
            <span class="relative z-10">Nuestros Servicios</span>
            <span class="relative z-10 text-lg transform transition-transform duration-300 group-hover:translate-x-1">→</span>
            <span class="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </NuxtLink>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <div v-for="(service, index) in services" :key="index"
          class="opacity-0 group relative p-8 md:p-10 bg-white rounded-3xl transition-all duration-700 flex flex-col justify-between min-h-[320px] border border-slate-200 hover:border-emerald-500/30 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 overflow-hidden"
          :class="{ 'animate-scale-in': isVisible }"
          :style="{ animationDelay: `${0.4 + index * 0.15}s`, animationFillMode: 'forwards' }">
          
          <div class="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-transparent to-cyan-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div class="relative z-10">
            <div class="relative mb-8">
              <div class="absolute -inset-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div class="relative w-14 h-14 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-all duration-500">
                0{{ index + 1 }}
              </div>
            </div>
            <h3 class="text-slate-900 font-bold text-2xl mb-4 group-hover:text-emerald-600 transition-all duration-300">{{ service.title }}</h3>
            <p class="text-slate-600 text-lg max-w-sm leading-relaxed group-hover:text-slate-700 transition-all duration-300">{{ service.desc }}</p>
            <div class="flex items-center gap-2 mt-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
              <span class="text-sm font-semibold text-emerald-600">Conoce más</span>
              <span class="text-emerald-600 transform transition-transform group-hover:translate-x-1">→</span>
            </div>
          </div>
          <div class="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 group-hover:w-full transition-all duration-700 shadow-lg shadow-emerald-500/20"></div>
        </div>
      </div>

      <div class="text-center mt-20 opacity-0"
        :class="{ 'animate-fade-in': isVisible }"
        style="animation-delay: 1.2s; animation-fill-mode: forwards;">
        <p class="text-slate-600 text-lg mb-6">¿Listo para transformar tu presencia digital?</p>
        <NuxtLink to="/contact"
          class="group relative inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm overflow-hidden transition-all hover:shadow-2xl hover:shadow-emerald-500/30 transform hover:-translate-y-1">
          <span class="relative z-10">Inicia tu proyecto hoy</span>
          <span class="relative z-10 text-xl transform transition-transform duration-300 group-hover:translate-x-2">→</span>
          <span class="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const services = [
  { title: 'Sitios web corporativos', desc: 'Webs profesionales que generan confianza, posicionan tu marca y convierten visitantes en clientes potenciales.' },
  { title: 'Landing pages de alto impacto', desc: 'Páginas ultra optimizadas para conversión. Captamos leads, ventas y mensajes con diseño persuasivo.' },
  { title: 'Optimización y SEO estratégico', desc: 'Aparece en las primeras posiciones de Google. Estructura semántica y técnica preparada para destacar.' },
  { title: 'Mantenimiento premium', desc: 'Tu sitio siempre actualizado, seguro y rápido. Soporte continuo sin complicaciones ni contratos largos.' }
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
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
@keyframes floatSlow {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-20px) scale(1.05); }
}
@keyframes gradientText {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animate-slide-up { animation: slideUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
.animate-fade-in { animation: fadeIn 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
.animate-scale-in { animation: scaleIn 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
.animate-float-slow { animation: floatSlow 4s ease-in-out infinite; }
.animate-float-delayed { animation: floatSlow 5s ease-in-out infinite; animation-delay: 1s; }
.animate-pulse-slow { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }

.animate-gradient-text {
  background: linear-gradient(135deg, #059669 0%, #0891b2 50%, #059669 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradientText 2.5s ease infinite;
  /* El padding vertical evita que el recorte del gradiente corte la parte baja de la g */
  padding-bottom: 0.15em; 
}
</style>