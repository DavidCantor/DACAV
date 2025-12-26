<template>
  <div class="bg-white min-h-screen font-sans text-[#022326] selection:bg-[#02735E] selection:text-white">
    
    <section class="py-24 px-6 bg-[#F9F9F9] border-b border-gray-100">
      <div class="max-w-5xl mx-auto text-center space-y-6">
        <h1 class="text-[#022326] text-6xl md:text-8xl font-black tracking-tighter leading-none italic">
          Proyectos <span class="text-[#02735E] not-italic">reales.</span>
        </h1>
        <p class="text-[#034040]/70 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto font-light">
          Cada entrega responde a una necesidad de negocio específica, desarrollada con un enfoque obsesivo en la claridad, el rendimiento y las buenas prácticas.
        </p>
        <div class="pt-6">
          <span class="px-5 py-2 bg-[#022326] text-[#02735E] rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
            No usamos plantillas genéricas
          </span>
        </div>
      </div>
    </section>

    <section class="py-32 px-6">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div class="lg:col-span-7 group relative">
          <div class="bg-[#022326] aspect-video rounded-[40px] overflow-hidden shadow-2xl relative">
            <div class="absolute inset-0 bg-gradient-to-tr from-[#02735E]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <div class="absolute inset-0 flex items-center justify-center z-20">
              <span class="text-white/10 font-black text-6xl md:text-8xl tracking-tighter group-hover:scale-110 transition-transform duration-700">ASCONFI</span>
              <a href="https://asconfijy.netlify.app/" target="_blank" 
                 class="absolute bg-white text-[#022326] px-8 py-3 rounded-full font-black uppercase text-xs tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-2xl">
                Visitar sitio ↗
              </a>
            </div>
          </div>
          <div class="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#02735E]/20 rounded-[40px] -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
        </div>

        <div class="lg:col-span-5 space-y-8">
          <div class="inline-flex items-center gap-3 px-3 py-1 bg-[#02735E]/10 rounded-lg text-[#02735E] text-[10px] font-black uppercase tracking-widest">
            <span class="w-2 h-2 bg-[#02735E] rounded-full animate-pulse"></span>
            Sitio Corporativo
          </div>
          <h2 class="text-[#022326] text-5xl font-black italic tracking-tighter">Asconfi-JY</h2>
          <p class="text-[#034040]/70 text-lg font-medium leading-relaxed">Arquitectura digital premium para asesoría contable y financiera.</p>
          
          <div class="grid grid-cols-2 gap-8 pt-6">
            <div class="space-y-4">
              <h4 class="text-[#022326] font-black text-xs uppercase tracking-widest border-b-2 border-[#02735E] pb-2 inline-block">Objetivo</h4>
              <ul class="text-[#034040]/60 text-sm space-y-2 font-medium">
                <li>• Presencia digital sólida</li>
                <li>• Captación de prospectos</li>
                <li>• SEO Técnico Avanzado</li>
              </ul>
            </div>
            <div class="space-y-4">
              <h4 class="text-[#022326] font-black text-xs uppercase tracking-widest border-b-2 border-[#02735E] pb-2 inline-block">Solución</h4>
              <ul class="text-[#034040]/60 text-sm space-y-2 font-medium">
                <li>• Nuxt SSR (Velocidad)</li>
                <li>• UI Corporativa Clean</li>
                <li>• Lead Magnets / Contacto</li>
              </ul>
            </div>
          </div>
          
          <div class="pt-10 flex flex-wrap gap-2">
            <span v-for="t in ['NUXT', 'TAILWIND', 'NETLIFY']" :key="t" 
                  class="bg-gray-100 text-[#022326] px-4 py-2 rounded-xl text-[9px] font-black tracking-widest">
              {{ t }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 bg-[#022326] text-white overflow-hidden relative">
      <div class="absolute top-0 right-0 w-1/2 h-full bg-[#02735E]/5 blur-[120px]"></div>
      
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center relative z-10">
        <div class="lg:col-span-5 order-2 lg:order-1 space-y-8">
          <div class="inline-flex items-center gap-3 px-3 py-1 bg-white/10 rounded-lg text-white text-[10px] font-black uppercase tracking-widest">
            Sistema a Medida
          </div>
          <h2 class="text-white text-5xl font-black italic tracking-tighter leading-none">CBAPASS</h2>
          <p class="text-white/60 text-lg font-light leading-relaxed">Control de acceso inteligente basado en microservicios y validación QR.</p>
          
          <div class="grid grid-cols-2 gap-8 pt-6">
            <div class="space-y-4">
              <h4 class="text-[#02735E] font-black text-xs uppercase tracking-widest border-b border-white/10 pb-2">Desafío</h4>
              <ul class="text-white/50 text-sm space-y-2 font-light">
                <li>• Automatización total</li>
                <li>• Cero errores manuales</li>
                <li>• Data en tiempo real</li>
              </ul>
            </div>
            <div class="space-y-4">
              <h4 class="text-[#02735E] font-black text-xs uppercase tracking-widest border-b border-white/10 pb-2">Arquitectura</h4>
              <ul class="text-white/50 text-sm space-y-2 font-light">
                <li>• Django REST Framework</li>
                <li>• API Gateway Segura</li>
                <li>• Despliegue Decoupled</li>
              </ul>
            </div>
          </div>
          
          <div class="pt-10">
            <a href="https://github.com/DavidCantor/CbaPoint-Despliegue.git" target="_blank" 
               class="group inline-flex items-center gap-4 text-[#02735E] font-black uppercase text-xs tracking-[0.3em] hover:text-white transition-colors">
              Explorar Repositorio <span class="group-hover:translate-x-2 transition-transform">→</span>
            </a>
          </div>
        </div>
        
        <div class="lg:col-span-7 order-1 lg:order-2">
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[60px] p-12 md:p-20 flex flex-col items-center justify-center text-center space-y-8 shadow-3xl">
            <div class="w-32 h-32 bg-[#02735E] rounded-3xl flex items-center justify-center rotate-6 hover:rotate-0 transition-transform duration-500 shadow-2xl shadow-[#02735E]/30">
              <span class="text-white font-black text-4xl tracking-tighter">QR</span>
            </div>
            <div class="space-y-2">
              <p class="text-2xl font-bold tracking-tight text-white">Validación de Token</p>
              <p class="text-white/40 text-xs uppercase tracking-[0.4em]">Protocolo de seguridad activo</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 px-6">
      <div class="max-w-5xl mx-auto text-center">
        <h3 class="text-[#022326] text-xs font-black uppercase tracking-[0.4em] mb-16">Nuestros Pilares Técnicos</h3>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-12">
          <div v-for="tag in focusTags" :key="tag" class="group flex flex-col items-center gap-6">
            <div class="w-px h-12 bg-gray-200 group-hover:bg-[#02735E] group-hover:h-16 transition-all duration-500"></div>
            <span class="text-[#034040] text-[10px] font-black uppercase tracking-widest leading-tight group-hover:text-[#02735E] transition-colors">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 px-6">
      <div class="max-w-5xl mx-auto">
        <div class="bg-[#F9F9F9] border-2 border-[#022326] rounded-[60px] p-12 md:p-24 text-center relative overflow-hidden group">
          <div class="relative z-10">
            <h2 class="text-[#022326] text-4xl md:text-6xl font-black mb-8 italic tracking-tighter">
              ¿Quieres un proyecto <br/> <span class="text-[#02735E]">similar?</span>
            </h2>
            <p class="text-[#034040]/60 text-xl mb-12 max-w-xl mx-auto font-light leading-relaxed">
              Si buscas una identidad digital única o un sistema que automatice tu operación, hagámoslo realidad.
            </p>
            <NuxtLink to="/contact" 
              class="inline-block bg-[#022326] text-white px-14 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-[#02735E] hover:shadow-2xl hover:shadow-[#02735E]/20 transition-all active:scale-95">
              Solicitar cotización
            </NuxtLink>
          </div>
          <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-[#02735E]/5 rounded-full blur-3xl group-hover:bg-[#02735E]/10 transition-colors"></div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const focusTags = [
  'Código limpio',
  'Arquitectura SSR',
  'Escalabilidad',
  'Rendimiento SEO',
  'Seguridad API'
]
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;700;800&display=swap');

html {
  scroll-behavior: smooth;
  font-family: 'Plus Jakarta Sans', sans-serif;
}
</style>