<template>
  <div class="bg-white min-h-screen font-sans text-gray-900">
    
    <!-- Hero Section con imagen -->
    <section class="relative py-24 px-4 sm:px-6 overflow-hidden">
      <!-- Imagen de fondo hero -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-emerald-900/85"></div>
        <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-30"></div>
      </div>
      
      <div class="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        <div class="inline-flex items-center gap-3 px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-semibold uppercase tracking-wider mb-4">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Portfolio Profesional
        </div>
        
        <h1 class="text-white text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-none">
          Proyectos <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">reales.</span>
        </h1>
        <p class="text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Cada entrega responde a una necesidad de negocio específica, desarrollada con un enfoque obsesivo en la claridad, el rendimiento y las buenas prácticas.
        </p>
        <div class="pt-6">
          <span class="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-xs font-bold uppercase tracking-wider">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Sin plantillas genéricas
          </span>
        </div>
      </div>
    </section>

    <!-- Proyecto 1: Asconfi-JY -->
    <section class="py-20 px-4 sm:px-6">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Imagen del proyecto -->
        <div class="lg:col-span-7">
          <div class="group relative">
            <div class="bg-gradient-to-br from-gray-900 to-gray-800 aspect-video rounded-3xl overflow-hidden shadow-2xl relative">
              <!-- Imagen de fondo del proyecto -->
              <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-30"></div>
              
              <!-- Overlay de gradiente -->
              <div class="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              
              <!-- Contenido sobre la imagen -->
              <div class="absolute inset-0 flex items-center justify-center z-20">
                <div class="text-center space-y-6">
                  <div class="w-20 h-20 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto shadow-2xl shadow-emerald-500/30">
                    A
                  </div>
                  <p class="text-white/20 font-black text-4xl md:text-5xl tracking-tighter">ASCONFI-JY</p>
                </div>
              </div>
              
              <!-- Botón visitar sitio -->
              <a href="https://asconfijy.netlify.app/" target="_blank" 
                 class="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-6 py-3 rounded-full font-bold text-sm shadow-2xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                Visitar sitio ↗
              </a>
            </div>
            
            <!-- Marco decorativo con patrón -->
            <div class="absolute -inset-4 border-2 border-emerald-200/30 rounded-3xl -z-10 group-hover:border-emerald-400/50 transition-colors">
              <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 rounded-3xl"></div>
            </div>
          </div>
        </div>

        <!-- Detalles del proyecto -->
        <div class="lg:col-span-5 space-y-8">
          <div>
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-lg text-emerald-600 text-xs font-bold uppercase tracking-wider mb-4">
              <div class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              Sitio Corporativo
            </div>
            <h2 class="text-gray-900 text-4xl font-bold tracking-tight mb-4">Asconfi-JY</h2>
            <p class="text-gray-600 text-lg leading-relaxed">Arquitectura digital premium para asesoría contable y financiera.</p>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div class="space-y-4">
              <h4 class="text-gray-900 font-bold text-sm uppercase tracking-wider border-b-2 border-emerald-500 pb-2">Objetivo</h4>
              <ul class="text-gray-500 text-sm space-y-2">
                <li class="flex items-center gap-2">
                  <div class="w-1 h-1 bg-emerald-500 rounded-full"></div>
                  Presencia digital sólida
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-1 h-1 bg-emerald-500 rounded-full"></div>
                  Captación de prospectos
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-1 h-1 bg-emerald-500 rounded-full"></div>
                  SEO técnico avanzado
                </li>
              </ul>
            </div>
            
            <div class="space-y-4">
              <h4 class="text-gray-900 font-bold text-sm uppercase tracking-wider border-b-2 border-emerald-500 pb-2">Solución</h4>
              <ul class="text-gray-500 text-sm space-y-2">
                <li class="flex items-center gap-2">
                  <div class="w-1 h-1 bg-emerald-500 rounded-full"></div>
                  Nuxt SSR (Velocidad)
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-1 h-1 bg-emerald-500 rounded-full"></div>
                  UI corporativa clean
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-1 h-1 bg-emerald-500 rounded-full"></div>
                  Lead magnets / Contacto
                </li>
              </ul>
            </div>
          </div>
          
          <!-- Tecnologías -->
          <div class="pt-6">
            <h4 class="text-gray-900 font-bold text-sm uppercase tracking-wider mb-4">Tecnologías</h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in ['Nuxt.js', 'Tailwind CSS', 'Netlify', 'Vue 3', 'SSR', 'SEO']" :key="tech" 
                    class="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-lg text-xs font-semibold">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Proyecto 2: CBAPASS -->
    <section class="relative py-20 px-4 sm:px-6 overflow-hidden">
      <!-- Imagen de fondo de la sección -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>
        <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')] bg-cover bg-center opacity-10"></div>
      </div>
      
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <!-- Detalles del proyecto -->
        <div class="lg:col-span-5 space-y-8">
          <div>
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white text-xs font-bold uppercase tracking-wider mb-4">
              <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              Sistema a Medida
            </div>
            <h2 class="text-white text-4xl font-bold tracking-tight mb-4">CBAPASS</h2>
            <p class="text-gray-300 text-lg leading-relaxed">Control de acceso inteligente basado en microservicios y validación QR.</p>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div class="space-y-4">
              <h4 class="text-emerald-400 font-bold text-sm uppercase tracking-wider border-b border-white/20 pb-2">Desafío</h4>
              <ul class="text-gray-300 text-sm space-y-2">
                <li class="flex items-center gap-2">
                  <div class="w-1 h-1 bg-emerald-400 rounded-full"></div>
                  Automatización total
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-1 h-1 bg-emerald-400 rounded-full"></div>
                  Cero errores manuales
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-1 h-1 bg-emerald-400 rounded-full"></div>
                  Data en tiempo real
                </li>
              </ul>
            </div>
            
            <div class="space-y-4">
              <h4 class="text-emerald-400 font-bold text-sm uppercase tracking-wider border-b border-white/20 pb-2">Arquitectura</h4>
              <ul class="text-gray-300 text-sm space-y-2">
                <li class="flex items-center gap-2">
                  <div class="w-1 h-1 bg-emerald-400 rounded-full"></div>
                  Django REST Framework
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-1 h-1 bg-emerald-400 rounded-full"></div>
                  API Gateway segura
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-1 h-1 bg-emerald-400 rounded-full"></div>
                  Despliegue decoupled
                </li>
              </ul>
            </div>
          </div>
          
          <!-- Enlace al repositorio -->
          <div class="pt-6">
            <a href="https://github.com/DavidCantor/CbaPoint-Despliegue.git" target="_blank" 
               class="inline-flex items-center gap-3 text-emerald-400 font-bold text-sm hover:text-white transition-colors group">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Explorar Repositorio
              <span class="group-hover:translate-x-2 transition-transform">→</span>
            </a>
          </div>
        </div>
        
        <!-- Visual del proyecto -->
        <div class="lg:col-span-7">
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center text-center space-y-8 shadow-2xl relative overflow-hidden">
            <!-- Imagen de fondo del card -->
            <div class="absolute inset-0 opacity-5">
              <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
            </div>
            
            <div class="w-40 h-40 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-3xl flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl shadow-emerald-500/30 relative z-10">
              <div class="text-white text-center">
                <span class="text-4xl font-bold block">QR</span>
                <span class="text-sm font-medium opacity-80 mt-2">Token System</span>
              </div>
            </div>
            
            <div class="space-y-4 relative z-10">
              <p class="text-2xl font-bold text-white">Validación de Token</p>
              <p class="text-gray-300 text-sm uppercase tracking-wider">Protocolo de seguridad activo</p>
              
              <div class="flex items-center justify-center gap-4 pt-4">
                <div class="text-center">
                  <div class="text-emerald-400 text-2xl font-bold">99.9%</div>
                  <div class="text-gray-400 text-xs">Uptime</div>
                </div>
                <div class="h-8 w-px bg-white/20"></div>
                <div class="text-center">
                  <div class="text-emerald-400 text-2xl font-bold">0ms</div>
                  <div class="text-gray-400 text-xs">Latencia</div>
                </div>
                <div class="h-8 w-px bg-white/20"></div>
                <div class="text-center">
                  <div class="text-emerald-400 text-2xl font-bold">100%</div>
                  <div class="text-gray-400 text-xs">Seguridad</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pilares Técnicos -->
    <section class="py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-16">
          <h3 class="text-gray-900 text-3xl font-bold tracking-tight mb-4">Nuestros Pilares Técnicos</h3>
          <p class="text-gray-600 max-w-2xl mx-auto">Bases sólidas para cada proyecto que desarrollamos</p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <div v-for="(tag, index) in focusTags" :key="tag" 
               class="group bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-emerald-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
            <!-- Imagen de fondo para cada pilar -->
            <div class="absolute inset-0 opacity-5">
              <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
            </div>
            
            <div class="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto relative z-10">
              {{ index + 1 }}
            </div>
            <h4 class="text-gray-900 font-semibold text-sm uppercase tracking-wider group-hover:text-emerald-600 transition-colors relative z-10">
              {{ tag }}
            </h4>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final con imagen -->
    <section class="relative py-20 px-4 sm:px-6 overflow-hidden">
      <!-- Imagen de fondo CTA -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-br from-white to-emerald-50/30"></div>
        <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
      </div>
      
      <div class="max-w-4xl mx-auto relative z-10">
        <div class="bg-white/80 backdrop-blur-sm border-2 border-emerald-200 rounded-3xl p-8 md:p-12 text-center shadow-xl">
          <h2 class="text-gray-900 text-4xl md:text-5xl font-bold tracking-tight mb-6">
            ¿Quieres un proyecto <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">similar?</span>
          </h2>
          <p class="text-gray-600 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Si buscas una identidad digital única o un sistema que automatice tu operación, hagámoslo realidad.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/contact" 
              class="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-full font-bold text-sm hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 inline-flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
              Solicitar cotización
            </NuxtLink>
            
            <NuxtLink to="/services" 
              class="bg-white text-gray-900 border border-gray-300 px-8 py-4 rounded-full font-bold text-sm hover:bg-gray-50 transition-all duration-300 inline-flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
              Ver servicios
            </NuxtLink>
          </div>
          
          <p class="text-gray-500 text-sm mt-8">
            Respuesta en 24 horas • Sin compromiso inicial
          </p>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const focusTags = [
  'Código Limpio',
  'Arquitectura SSR',
  'Escalabilidad',
  'Rendimiento SEO',
  'Seguridad API'
]
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

html {
  scroll-behavior: smooth;
  font-family: 'Inter', sans-serif;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Efectos de selección de texto */
::selection {
  background: linear-gradient(135deg, #10b981, #06b6d4);
  color: white;
}


</style>