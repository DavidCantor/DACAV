<template>
  <div class="bg-[#F2F2F2] min-h-screen">
    
    <section class="py-20 px-6 border-b border-[#D7D7D9] bg-white text-center">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-[#404040] text-5xl md:text-7xl font-black mb-6 italic tracking-tighter">
          Proyectos reales
        </h1>
        <p class="text-[#595959] text-xl md:text-2xl leading-relaxed">
          Cada proyecto responde a necesidades reales de negocio, desarrollados con enfoque en claridad, rendimiento y buenas prácticas.
        </p>
        <p class="mt-6 text-[#B0B7BF] font-bold uppercase text-xs tracking-widest">
          No son proyectos de plantilla: cada uno tiene objetivos claros.
        </p>
      </div>
    </section>

    <section class="py-24 px-6">
      <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="bg-[#D7D7D9] aspect-video rounded-sm border border-[#B0B7BF] flex items-center justify-center shadow-inner overflow-hidden group relative">
          <div class="text-[#404040] font-black opacity-20 text-4xl group-hover:scale-110 transition-transform duration-500">ASCONFI-JY</div>
          <div class="absolute inset-0 bg-[#404040]/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
             <a href="https://asconfijy.netlify.app/" target="_blank" class="bg-white text-[#404040] px-6 py-2 font-bold uppercase text-xs shadow-xl">Visitar sitio</a>
          </div>
        </div>
        <div class="space-y-6">
          <div class="inline-block bg-[#404040] text-[#F2F2F2] px-4 py-1 text-xs font-bold uppercase tracking-widest">Sitio Corporativo</div>
          <h2 class="text-[#404040] text-4xl font-bold italic">Asconfi-JY</h2>
          <p class="text-[#595959] text-lg italic">Sitio web para asesoría contable y financiera.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div>
              <h4 class="text-[#404040] font-bold text-xs uppercase mb-3 border-b border-[#B0B7BF] pb-1">Objetivo</h4>
              <ul class="text-[#595959] text-sm space-y-2">
                <li>• Mejorar presencia digital</li>
                <li>• Captación de clientes</li>
                <li>• Posicionamiento SEO</li>
              </ul>
            </div>
            <div>
              <h4 class="text-[#404040] font-bold text-xs uppercase mb-3 border-b border-[#B0B7BF] pb-1">Solución</h4>
              <ul class="text-[#595959] text-sm space-y-2">
                <li>• Arquitectura Nuxt (SSR)</li>
                <li>• Diseño corporativo limpio</li>
                <li>• Formulario de conversión</li>
              </ul>
            </div>
          </div>
          
          <div class="pt-6 flex items-center gap-4">
            <span class="text-xs font-bold text-[#B0B7BF]">TECH:</span>
            <div class="flex gap-2">
              <span class="bg-[#D7D7D9] text-[#404040] px-3 py-1 text-[10px] font-bold">NUXT (SSR)</span>
              <span class="bg-[#D7D7D9] text-[#404040] px-3 py-1 text-[10px] font-bold">TAILWIND</span>
              <span class="bg-[#D7D7D9] text-[#404040] px-3 py-1 text-[10px] font-bold">NETLIFY</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 px-6 bg-[#404040] text-[#F2F2F2]">
      <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="order-2 lg:order-1 space-y-6">
          <div class="inline-block bg-[#B0B7BF] text-[#404040] px-4 py-1 text-xs font-bold uppercase tracking-widest">Sistema a Medida</div>
          <h2 class="text-white text-4xl font-bold italic">CBAPASS</h2>
          <p class="text-[#D7D7D9] text-lg italic">Sistema de control de acceso con códigos QR.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div>
              <h4 class="text-[#B0B7BF] font-bold text-xs uppercase mb-3 border-b border-[#595959] pb-1">Objetivo</h4>
              <ul class="text-[#D7D7D9] text-sm space-y-2">
                <li>• Automatizar entradas</li>
                <li>• Reducir errores manuales</li>
                <li>• Centralizar registros</li>
              </ul>
            </div>
            <div>
              <h4 class="text-[#B0B7BF] font-bold text-xs uppercase mb-3 border-b border-[#595959] pb-1">Solución</h4>
              <ul class="text-[#D7D7D9] text-sm space-y-2">
                <li>• Django REST Framework</li>
                <li>• API segura validación QR</li>
                <li>• Despliegue decoupled</li>
              </ul>
            </div>
          </div>
          
          <div class="pt-6">
            <a href="https://github.com/DavidCantor/CbaPoint-Despliegue.git" target="_blank" class="inline-flex items-center gap-2 border-b-2 border-[#B0B7BF] pb-1 hover:text-[#B0B7BF] transition-colors font-bold uppercase text-sm">
               Ver Repositorio en GitHub ↗
            </a>
          </div>
        </div>
        
        <div class="order-1 lg:order-2 bg-[#595959] aspect-video rounded-sm border border-[#B0B7BF]/20 flex flex-col items-center justify-center p-8 text-center space-y-4 shadow-2xl">
           <div class="w-16 h-16 bg-[#B0B7BF] rounded-sm flex items-center justify-center">
             <span class="text-[#404040] font-black text-2xl">QR</span>
           </div>
           <p class="text-[10px] uppercase tracking-[0.3em] text-[#D7D7D9]">Validación en tiempo real</p>
        </div>
      </div>
    </section>

    <section class="py-24 px-6 bg-white">
      <div class="max-w-4xl mx-auto text-center">
        <h3 class="text-[#404040] text-2xl font-bold mb-12 uppercase tracking-widest">En todos los proyectos priorizamos:</h3>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div v-for="tag in focusTags" :key="tag" class="flex flex-col items-center gap-3">
             <div class="w-1 h-8 bg-[#B0B7BF]"></div>
             <span class="text-[#595959] text-[10px] font-black uppercase tracking-widest leading-tight">{{ tag }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 px-6 bg-[#F2F2F2]">
      <div class="max-w-3xl mx-auto bg-[#404040] p-12 text-center text-[#F2F2F2] rounded-sm shadow-2xl relative overflow-hidden">
        <div class="relative z-10">
          <h2 class="text-3xl md:text-5xl font-black mb-6 italic tracking-tighter">¿Quieres un proyecto similar?</h2>
          <p class="text-[#D7D7D9] text-lg mb-10">
            Si necesitas una web profesional o un sistema a medida, conversemos.
          </p>
          <NuxtLink to="/contact" class="inline-block bg-[#F2F2F2] text-[#404040] px-12 py-4 font-black uppercase tracking-widest hover:bg-[#D7D7D9] transition-all">
            Solicitar cotización
          </NuxtLink>
        </div>
        <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-[#595959] rounded-full opacity-50 blur-3xl"></div>
      </div>
    </section>

  </div>
</template>

<script setup>
const focusTags = [
  'Código limpio',
  'Buenas prácticas',
  'Estructura clara',
  'Rendimiento SEO',
  'Despliegues estables'
]
</script>