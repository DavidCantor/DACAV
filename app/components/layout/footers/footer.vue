<template>
  <footer class="bg-[#022326] text-[#FFF] pt-20 pb-10 px-6 relative overflow-hidden">
    <div class="absolute top-0 right-0 w-96 h-96 bg-[#035951] blur-[150px] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
        
        <div class="lg:col-span-1 space-y-6">
          <div class="flex items-center gap-3">
            <div class="bg-[#02735E] text-[#FFF] w-10 h-10 flex items-center justify-center rounded-xl font-black text-xl shadow-lg shadow-[#02735E]/20">
              D
            </div>
            <span class="font-black text-2xl tracking-tighter italic">DACAV</span>
          </div>
          <div class="space-y-4">
            <p class="text-gray-400 text-[11px] leading-relaxed uppercase tracking-[0.1em]">
              Desarrollo web profesional enfocado en soluciones claras, funcionales y bien estructuradas.
            </p>
            <p class="text-[#035951] text-[10px] leading-relaxed uppercase font-bold tracking-widest">
              Construimos páginas web que comunican, convierten y se mantienen en el tiempo.
            </p>
          </div>
        </div>

        <div>
          <h4 class="text-[#02735E] font-black uppercase text-[10px] tracking-[0.3em] mb-8 border-l-2 border-[#02735E] pl-3">Navegación</h4>
          <ul class="space-y-4">
            <li v-for="item in navigation" :key="item.path">
              <NuxtLink :to="item.path" class="text-gray-300 hover:text-[#02735E] transition-all text-[11px] uppercase tracking-widest flex items-center group">
                <span class="w-0 group-hover:w-3 h-px bg-[#02735E] mr-0 group-hover:mr-2 transition-all"></span>
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-[#02735E] font-black uppercase text-[10px] tracking-[0.3em] mb-8 border-l-2 border-[#02735E] pl-3">Servicios</h4>
          <ul class="space-y-4">
            <li v-for="service in services" :key="service" class="text-gray-400 text-[11px] uppercase tracking-widest hover:text-white transition-colors cursor-default">
              {{ service }}
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-[#02735E] font-black uppercase text-[10px] tracking-[0.3em] mb-8 border-l-2 border-[#02735E] pl-3">Contacto</h4>
          <div class="space-y-6 text-[11px] uppercase tracking-widest">
            <div class="group">
              <span class="block text-[#035951] mb-1 font-bold text-[9px] italic">Email:</span>
              <a href="mailto:contacto@dacav.dev" class="text-gray-300 group-hover:text-white transition-colors">contacto@dacav.dev</a>
            </div>
            <div>
              <span class="block text-[#035951] mb-1 font-bold text-[9px] italic">Ubicación:</span>
              <span class="text-gray-300">Colombia</span>
            </div>
            <div>
              <span class="block text-[#035951] mb-1 font-bold text-[9px] italic">Atención:</span>
              <span class="text-gray-300">Remota</span>
            </div>
          </div>
        </div>

        <div>
          <h4 class="text-[#02735E] font-black uppercase text-[10px] tracking-[0.3em] mb-8 border-l-2 border-[#02735E] pl-3">Enlaces</h4>
          <ul class="space-y-4">
            <li>
              <a href="https://github.com/DavidCantor" target="_blank" class="text-gray-300 hover:text-white transition-all text-[11px] uppercase tracking-widest flex items-center gap-2 group">
                <div class="w-1.5 h-1.5 rounded-full bg-[#02735E] group-hover:scale-150 transition-transform"></div> GitHub
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-all text-[11px] uppercase tracking-widest flex items-center gap-2 group">
                <div class="w-1.5 h-1.5 rounded-full bg-[#02735E] group-hover:scale-150 transition-transform"></div> LinkedIn
              </a>
            </li>
            <li>
              <NuxtLink to="/projects" class="text-gray-300 hover:text-white transition-all text-[11px] uppercase tracking-widest flex items-center gap-2 group">
                <div class="w-1.5 h-1.5 rounded-full bg-[#02735E] group-hover:scale-150 transition-transform"></div> Portafolio
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/5 py-12 text-[10px] uppercase tracking-[0.15em] text-gray-500 leading-relaxed">
        <div class="space-y-4 group">
          <h5 class="text-[#035951] font-black group-hover:text-[#02735E] transition-colors">Aviso legal</h5>
          <p class="max-w-md">DACAV ofrece servicios de desarrollo web de forma independiente. La información presentada en este sitio es de carácter informativo y no constituye asesoría legal o financiera.</p>
        </div>
        <div class="space-y-4 group">
          <h5 class="text-[#035951] font-black group-hover:text-[#02735E] transition-colors">Política de privacidad</h5>
          <p class="max-w-md">Los datos enviados a través de los formularios de contacto serán utilizados únicamente para responder solicitudes. No se comparten con terceros.</p>
        </div>
      </div>

      <div class="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="text-[10px] text-gray-500 uppercase tracking-[0.2em]">
          © 2025 <span class="text-white font-black tracking-tighter italic">DACAV</span>. Todos los derechos reservados.
        </p>
        <div class="flex items-center gap-6">
          <div class="h-px w-12 bg-[#034040]"></div>
          <p class="text-[9px] text-[#02735E] font-black uppercase tracking-[0.3em] italic">
            Nuxt + Tailwind CSS Framework
          </p>
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
  'Páginas de destino',
  'Desarrollo web a medida',
  'Optimización y SEO básico',
  'Mantenimiento web'
]
</script>