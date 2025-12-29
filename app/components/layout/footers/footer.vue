<template>
  <footer class="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-20 pb-12 px-4 sm:px-6 relative overflow-hidden">
    <!-- Elementos decorativos con gradientes -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Sección principal del footer -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
        
        <!-- Logo y descripción -->
        <div class="lg:col-span-3 space-y-6">
          <div class="flex items-center gap-3">
            <div class="bg-gradient-to-br from-emerald-500 to-cyan-500 text-white w-12 h-12 flex items-center justify-center rounded-xl font-black text-xl shadow-lg shadow-emerald-500/30">
              D
            </div>
            <div>
              <span class="font-black text-2xl tracking-tight">DACAV</span>
              <p class="text-emerald-400 text-[10px] font-bold uppercase tracking-widest mt-1">WEB STUDIO</p>
            </div>
          </div>
          <div class="space-y-4">
            <p class="text-gray-400 text-sm leading-relaxed">
              Desarrollo web profesional enfocado en soluciones claras, funcionales y bien estructuradas.
            </p>
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <span class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              <p class="text-emerald-400 text-xs font-bold tracking-wider">
                Calidad y claridad en cada proyecto
              </p>
            </div>
          </div>
        </div>

        <!-- Navegación -->
        <div class="lg:col-span-2">
          <h4 class="text-emerald-400 font-bold uppercase text-xs tracking-widest mb-6 pb-2 border-b border-white/10">Navegación</h4>
          <ul class="space-y-3">
            <li v-for="item in navigation" :key="item.path">
              <NuxtLink :to="item.path" class="text-gray-300 hover:text-white transition-all text-sm flex items-center group">
                <span class="w-0 group-hover:w-3 h-px bg-gradient-to-r from-emerald-400 to-cyan-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Servicios -->
        <div class="lg:col-span-2">
          <h4 class="text-emerald-400 font-bold uppercase text-xs tracking-widest mb-6 pb-2 border-b border-white/10">Servicios</h4>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service" 
                class="text-gray-400 text-sm hover:text-white transition-colors cursor-default group flex items-center">
              <span class="w-1 h-1 bg-emerald-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              {{ service }}
            </li>
          </ul>
        </div>

        <!-- Contacto -->
        <div class="lg:col-span-2">
          <h4 class="text-emerald-400 font-bold uppercase text-xs tracking-widest mb-6 pb-2 border-b border-white/10">Contacto</h4>
          <div class="space-y-4 text-sm">
            <div class="group">
              <span class="block text-emerald-400 mb-1 text-xs font-medium">Email</span>
              <a href="mailto:dsantiagocanvar@gmail.com" 
                 class="text-gray-300 group-hover:text-white transition-colors flex items-center gap-2">
                
                dsantiagocanvar@gmail.com
              </a>
            </div>
            <div class="group">
              <span class="block text-emerald-400 mb-1 text-xs font-medium">Ubicación</span>
              <div class="text-gray-300 flex items-center gap-2">
                <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                Colombia
              </div>
            </div>
            <div class="group">
              <span class="block text-emerald-400 mb-1 text-xs font-medium">Horario</span>
              <div class="text-gray-300 flex items-center gap-2">
                <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Remoto · L-V 9am-6pm
              </div>
            </div>
          </div>
        </div>

        <!-- Redes Sociales -->
        <div class="lg:col-span-3">
          <h4 class="text-emerald-400 font-bold uppercase text-xs tracking-widest mb-6 pb-2 border-b border-white/10">Conecta con Nosotros</h4>
          <div class="space-y-6">
            <p class="text-gray-400 text-sm">
              Síguenos para ver nuestros últimos proyectos y consejos sobre desarrollo web.
            </p>
            <div class="flex gap-4">
              <a href="https://github.com/DavidCantor" target="_blank" 
                 class="w-10 h-10 rounded-full bg-white/5 hover:bg-emerald-500/20 border border-white/10 flex items-center justify-center text-white hover:text-emerald-400 transition-all group">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" 
                 class="w-10 h-10 rounded-full bg-white/5 hover:bg-emerald-500/20 border border-white/10 flex items-center justify-center text-white hover:text-emerald-400 transition-all group">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" 
                 class="w-10 h-10 rounded-full bg-white/5 hover:bg-emerald-500/20 border border-white/10 flex items-center justify-center text-white hover:text-emerald-400 transition-all group">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
            
            <!-- Newsletter -->
            <div class="mt-8">
              <p class="text-gray-400 text-sm mb-3">Suscríbete para actualizaciones</p>
              <form @submit.prevent="subscribe" class="flex gap-2">
                <input type="email" placeholder="tu@email.com" 
                       class="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors">
                <button type="submit" 
                        class="px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-sm font-bold rounded-lg hover:shadow-lg hover:shadow-emerald-500/20 transition-all">
                  →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Sección legal -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 py-12 text-sm text-gray-400">
        <div class="space-y-4 group">
          <h5 class="text-emerald-400 font-bold group-hover:text-emerald-300 transition-colors flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Aviso legal
          </h5>
          <p class="leading-relaxed">
            DACAV ofrece servicios de desarrollo web de forma independiente. La información presentada en este sitio es de carácter informativo y no constituye asesoría legal o financiera.
          </p>
        </div>
        <div class="space-y-4 group">
          <h5 class="text-emerald-400 font-bold group-hover:text-emerald-300 transition-colors flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
            Política de privacidad
          </h5>
          <p class="leading-relaxed">
            Los datos enviados a través de los formularios de contacto serán utilizados únicamente para responder solicitudes. No se comparten con terceros ni se utilizan para marketing sin consentimiento.
          </p>
        </div>
      </div>

      <!-- Copyright y tecnologías -->
      <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="flex items-center gap-4">
          <p class="text-sm text-gray-400">
            © 2025 <span class="text-white font-bold">DACAV</span>. Todos los derechos reservados.
          </p>
          <div class="h-4 w-px bg-white/10"></div>
          <div class="flex items-center gap-2 text-xs text-gray-500">
            <span class="w-1 h-1 bg-emerald-400 rounded-full"></span>
            Construido con pasión y código limpio
          </div>
        </div>
        
        <div class="flex items-center gap-6">
          <div class="flex items-center gap-2">
            <div class="w-6 h-6 rounded bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center text-xs font-bold text-white">
              N
            </div>
            <span class="text-xs text-gray-400">Nuxt.js</span>
          </div>
          <div class="h-4 w-px bg-white/10"></div>
          <div class="flex items-center gap-2">
            <div class="w-6 h-6 rounded bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-xs font-bold text-white">
              T
            </div>
            <span class="text-xs text-gray-400">Tailwind CSS</span>
          </div>
          <div class="h-4 w-px bg-white/10"></div>
          <div class="flex items-center gap-2">
            <div class="w-6 h-6 rounded bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white">
              V
            </div>
            <span class="text-xs text-gray-400">Vue 3</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const navigation = [
  { name: 'Inicio', path: '/' },
  { name: 'Servicios', path: '/services' },
  { name: 'Proyectos', path: '/projects' },
  { name: 'Nosotros', path: '/about' },
  { name: 'Contacto', path: '/contact' }
]

const services = [
  'Sitios web corporativos',
  'Landing Pages',
  'Desarrollo a medida',
  'Optimización SEO',
  'Mantenimiento web'
]

const subscribe = () => {
  // Lógica de suscripción
  console.log('Suscripción enviada')
}
</script>

<style scoped>
/* Efectos de hover mejorados */
a:hover, .group:hover {
  transition: all 0.3s ease;
}

/* Animación sutil para los elementos interactivos */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

footer > div {
  animation: fadeInUp 0.6s ease-out;
}

/* Mejoras de accesibilidad */
a:focus, button:focus {
  outline: 2px solid #10b981;
  outline-offset: 2px;
  border-radius: 4px;
}

/* Estilos para el formulario de newsletter */
input:focus {
  box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2);
}

/* Efecto de gradiente en bordes */
.border-gradient {
  border-image: linear-gradient(to right, #10b981, #06b6d4) 1;
}
</style>