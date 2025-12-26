<template>
  <footer class="bg-[#404040] text-[#F2F2F2] pt-16 pb-8 px-6 border-t border-[#595959]">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        
        <div class="lg:col-span-1 space-y-4">
          <div class="flex items-center gap-2">
            <div class="bg-[#F2F2F2] text-[#404040] w-8 h-8 flex items-center justify-center rounded-sm font-black text-lg">
              D
            </div>
            <span class="font-black text-2xl tracking-tighter">DACAV</span>
          </div>
          <p class="text-[#D7D7D9] text-xs leading-relaxed uppercase tracking-wider">
            Desarrollo web profesional enfocado en soluciones claras, funcionales y bien estructuradas.
          </p>
          <p class="text-[#B0B7BF] text-[10px] leading-relaxed uppercase">
            Construimos páginas web que comunican, convierten y se mantienen en el tiempo.
          </p>
        </div>

        <div>
          <h4 class="text-[#B0B7BF] font-bold uppercase text-[10px] tracking-[0.2em] mb-6">Navegación</h4>
          <ul class="space-y-3">
            <li v-for="item in navigation" :key="item.path">
              <NuxtLink :to="item.path" class="text-[#F2F2F2] hover:text-[#B0B7BF] transition-colors text-xs uppercase tracking-widest">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-[#B0B7BF] font-bold uppercase text-[10px] tracking-[0.2em] mb-6">Servicios</h4>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service" class="text-[#D7D7D9] text-xs uppercase tracking-widest">
              {{ service }}
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-[#B0B7BF] font-bold uppercase text-[10px] tracking-[0.2em] mb-6">Contacto</h4>
          <div class="space-y-4 text-[10px] uppercase tracking-widest">
            <p class="text-[#F2F2F2]">
              <span class="block text-[#B0B7BF] mb-1 italic">Email:</span>
              contacto@dacav.dev
            </p>
            <p class="text-[#F2F2F2]">
              <span class="block text-[#B0B7BF] mb-1 italic">Ubicación:</span>
              Colombia
            </p>
            <p class="text-[#F2F2F2]">
              <span class="block text-[#B0B7BF] mb-1 italic">Atención:</span>
              Remota
            </p>
          </div>
        </div>

        <div>
          <h4 class="text-[#B0B7BF] font-bold uppercase text-[10px] tracking-[0.2em] mb-6">Enlaces</h4>
          <ul class="space-y-3">
            <li><a href="https://github.com/DavidCantor" target="_blank" class="text-[#F2F2F2] hover:text-[#B0B7BF] transition-colors text-xs uppercase tracking-widest flex items-center gap-2">GitHub</a></li>
            <li><a href="#" class="text-[#F2F2F2] hover:text-[#B0B7BF] transition-colors text-xs uppercase tracking-widest flex items-center gap-2">LinkedIn</a></li>
            <li><NuxtLink to="/projects" class="text-[#F2F2F2] hover:text-[#B0B7BF] transition-colors text-xs uppercase tracking-widest flex items-center gap-2">Portafolio</NuxtLink></li>
          </ul>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#595959] py-8 text-[9px] uppercase tracking-[0.15em] text-[#B0B7BF] leading-relaxed">
        <div>
          <h5 class="text-[#F2F2F2] font-bold mb-2">Aviso legal</h5>
          <p>DACAV ofrece servicios de desarrollo web de forma independiente. La información presentada en este sitio es de carácter informativo y no constituye asesoría legal o financiera.</p>
        </div>
        <div>
          <h5 class="text-[#F2F2F2] font-bold mb-2">Política de privacidad</h5>
          <p>Los datos enviados a través de los formularios de contacto serán utilizados únicamente para responder solicitudes. No se comparten con terceros.</p>
        </div>
      </div>

      <div class="border-t border-[#595959] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-[10px] text-[#B0B7BF] uppercase tracking-widest">
          © 2025 <span class="text-[#F2F2F2] font-bold">DACAV</span>. Todos los derechos reservados.
        </p>
        <div class="flex gap-4">
          <div class="h-px w-8 bg-[#595959] self-center"></div>
          <p class="text-[9px] text-[#B0B7BF] uppercase tracking-widest italic">Nuxt + Tailwind CSS Framework</p>
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