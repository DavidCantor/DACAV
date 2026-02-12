<template>
  <section class="relative py-24 md:py-32 px-4 overflow-hidden bg-white">
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-[120px]"></div>
      <div class="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-50/50 rounded-full blur-[120px]"></div>
      <div class="absolute inset-0 opacity-[0.02]" 
        style="background-image: radial-gradient(#10b981 0.5px, transparent 0.5px); background-size: 32px 32px;">
      </div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-gray-900 text-4xl md:text-6xl font-black tracking-tighter mb-4">
          Planes a tu <span class="text-emerald-600">medida</span>
        </h2>
        <p class="text-gray-500 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
Planes diseñados para que tu negocio venda más, no solo para que tenga una web.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        
        <div class="group bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40 flex flex-col transition-all duration-500 hover:-translate-y-2">
          <div class="flex justify-between items-start mb-6">
            <div class="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">⚡</div>
            <span class="text-[10px] font-black bg-gray-100 px-3 py-1 rounded-full uppercase tracking-widest text-gray-500">Express</span>
          </div>
          <h3 class="text-2xl font-black text-gray-900 mb-1">Plan START</h3>
          <p class="text-emerald-600 text-xs font-bold uppercase tracking-widest mb-6 leading-tight">Ideal para negocios que <br/>necesitan crecer su primera web</p>
          
          <div class="mb-8">
            <p class="text-3xl font-black text-gray-900 leading-none">Desde $290.000 COP</p>
            <p class="text-gray-400 text-xs mt-2 font-medium">Lista en 3–5 días</p>
          </div>

          <ul class="space-y-3 mb-8 flex-grow">
            <li v-for="item in planStart" :key="item" class="flex items-center gap-3 text-sm text-gray-600 font-medium">
              <span class="text-emerald-500 font-bold">✓</span> {{ item }}
            </li>
          </ul>

          <NuxtLink to="/contact" class="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold text-center text-xs uppercase tracking-widest hover:bg-emerald-600 transition-all">
              Hablar por WhatsApp
          </NuxtLink>
        </div>

        <div class="group relative p-[2px] rounded-[3rem] bg-gradient-to-b from-emerald-400 to-cyan-400 shadow-2xl shadow-emerald-500/20 transform lg:-translate-y-4">
          <div class="bg-white p-8 md:p-10 rounded-[2.9rem] h-full flex flex-col relative overflow-hidden">
            <div class="absolute top-6 right-6 bg-emerald-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">Destacado</div>
            
            <div class="w-12 h-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-emerald-500/20">🚀</div>
            <h3 class="text-2xl font-black text-gray-900 mb-1">Plan PRO</h3>
            <p class="text-emerald-600 text-xs font-bold uppercase tracking-widest mb-6 leading-tight">Para empresas que buscan <br/>crecer y posicionarse</p>
            
            <div class="mb-8">
              <p class="text-3xl font-black text-gray-900 leading-none">Desde $490.000 COP</p>
              <p class="text-gray-400 text-xs mt-2 font-medium">Lista en 7–12 días</p>
            </div>

            <ul class="space-y-4 mb-10 flex-grow">
              <li v-for="item in planPro" :key="item" class="flex items-center gap-3 text-sm text-gray-700 font-bold">
                <span class="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-[10px] text-white">★</span>
                {{ item }}
              </li>
            </ul>

            <NuxtLink to="/contact" class="w-full py-5 bg-emerald-500 text-white rounded-2xl font-black text-center text-sm uppercase tracking-widest hover:bg-gray-900 transition-all shadow-lg shadow-emerald-500/30">
              Hablar por WhatsApp
            </NuxtLink>
          </div>
        </div>

        <div class="group bg-gray-900 p-8 rounded-[2.5rem] shadow-2xl shadow-gray-900/40 flex flex-col transition-all duration-500 hover:-translate-y-2 text-white border border-white/5">
          <div class="flex justify-between items-start mb-6">
            <div class="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl group-hover:rotate-12 transition-transform">🔧</div>
            <span class="text-[10px] font-black bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full uppercase tracking-widest border border-cyan-500/30">Soporte</span>
          </div>
          <h3 class="text-2xl font-black text-white mb-1">Optimización</h3>
          <p class="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8 leading-tight">Para webs lentas, antiguas <br/>o que no funcionan bien</p>
          
          <div class="space-y-8 flex-grow">
            <div class="relative">
              <div class="flex items-center gap-2 mb-3">
                <span class="w-2 h-2 bg-cyan-400 rounded-full"></span>
                <p class="text-xs font-black text-white uppercase tracking-tighter">A. Ajuste Único (One-Shot)</p>
              </div>
              <ul class="space-y-2 text-[13px] text-white/70 font-medium mb-4">
                <li class="flex items-start gap-2">✓ <span class="leading-tight">Auditoría y corrección de errores críticos</span></li>
                <li class="flex items-start gap-2">✓ <span class="leading-tight">Mejora de velocidad (Web que carga en milisegundos)</span></li>
                <li class="flex items-start gap-2">✓ <span class="leading-tight">Mejora de interfaz y SEO para aparecer en Google</span></li>
              </ul>
              <p class="text-lg font-black text-white">Desde $140.000 COP <span class="text-[10px] text-white/40 font-normal uppercase">Pago único</span></p>
            </div>

            <div class="h-px bg-white/10 w-full"></div>

            <div class="relative">
              <div class="flex items-center gap-2 mb-3">
                <span class="w-2 h-2 bg-emerald-400 rounded-full"></span>
                <p class="text-xs font-black text-white uppercase tracking-tighter">B. Mantenimiento Mensual</p>
              </div>
              <ul class="space-y-2 text-[13px] text-white/70 font-medium mb-4">
                <li class="flex items-start gap-2">✓ <span class="leading-tight">Soporte técnico y actualizaciones mensuales</span></li>
                <li class="flex items-start gap-2">✓ <span class="leading-tight">Backups (Copias de seguridad) y seguridad SSL</span></li>
                <li class="flex items-start gap-2">✓ <span class="leading-tight">Monitoreo 24/7 y pequeños cambios de texto/fotos</span></li>
              </ul>
              <p class="text-lg font-black text-emerald-400">Desde $70.000 COP <span class="text-[10px] text-white/40 font-normal uppercase">/ mes</span></p>
            </div>
          </div>

          <NuxtLink to="/contact" class="w-full py-4 mt-8 bg-white text-gray-900 rounded-2xl font-black text-center text-xs uppercase tracking-widest hover:bg-cyan-400 transition-all">
              Hablar por WhatsApp
          </NuxtLink>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const planStart = [
  'Landing de 1 página (5 secciones)',
  'Diseño adaptable a celulares',
  'Botón directo de WhatsApp',
  'Ubicación en Google Maps',
  'SEO básico e indexación Google',
  'Hosting y Dominio gratis por 1 año'
]

const planPro = [
  'Estructura de hasta 5 páginas internas',
  'Blog o Sección de Noticias',
  'Formularios de contacto avanzados',
  'Métricas con Google Analytics',
  'SEO Estructural para buscadores',
  'Máxima optimización de carga'
]
</script>

<style scoped>
h3, h2 {
  -webkit-font-smoothing: antialiased;
}

/* Animación sutil solo para pantallas grandes para que no estorbe en móvil */
@media (min-width: 1024px) {
  @keyframes float-pro {
    0%, 100% { transform: translateY(-16px); }
    50% { transform: translateY(-26px); }
  }
  .lg\:-translate-y-4 {
    animation: float-pro 5s ease-in-out infinite;
  }
}
</style>