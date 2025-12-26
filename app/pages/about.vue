<template>
  <div class="bg-white min-h-screen font-sans text-gray-900">
    
    <!-- Hero Section con imagen -->
    <section class="relative py-32 px-4 sm:px-6 overflow-hidden">
      <!-- Imagen de fondo hero -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-emerald-900/85"></div>
        <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-30"></div>
      </div>
      
      <div class="max-w-5xl mx-auto text-center space-y-10 relative z-10">
        <div class="inline-flex items-center gap-3 px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-semibold uppercase tracking-wider mb-4">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Acerca de DACAV
        </div>
        
        <h1 class="text-white text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-none">
          Desarrollo web <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">honesto</span> y funcional.
        </h1>
        <div class="space-y-8 text-white/80 text-lg md:text-xl leading-relaxed text-left md:text-center max-w-4xl mx-auto">
          <p>
            DACAV no es solo una agencia; es un compromiso con la <span class="text-white font-bold">excelencia técnica</span>. Creamos ecosistemas digitales que permiten a profesionales y empresas destacar en un mercado saturado.
          </p>
          <p>
            Eliminamos la fricción entre la idea y la ejecución. Entendemos tu negocio antes de escribir la primera línea de código.
          </p>
        </div>
      </div>
    </section>

    <!-- Filosofía y ADN -->
    <section class="py-24 px-4 sm:px-6">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <!-- Filosofía con imagen -->
        <div class="relative group">
          <div class="bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-12 text-white rounded-3xl shadow-2xl relative overflow-hidden">
            <!-- Imagen de fondo filosofía -->
            <div class="absolute inset-0 opacity-10">
              <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
            </div>
            
            <div class="relative z-10">
              <h3 class="text-3xl font-bold mb-10 tracking-tight">Nuestra filosofía</h3>
              <p class="mb-8 text-emerald-400 uppercase tracking-wider text-sm font-bold">Principios irrenunciables:</p>
              <ul class="space-y-6">
                <li v-for="point in philosophy" :key="point" class="flex items-center gap-4 group/item">
                  <div class="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    ✓
                  </div>
                  <span class="text-lg font-light text-white/80 group-hover/item:text-white transition-colors">{{ point }}</span>
                </li>
              </ul>
              <div class="mt-16 pt-8 border-t border-white/10">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-xl font-bold">
                    "
                  </div>
                  <p class="text-emerald-400 font-bold text-lg leading-tight">
                    "La tecnología es el motor, pero el propósito es tu negocio."
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Elemento decorativo -->
          <div class="absolute -inset-4 border-2 border-emerald-200/20 rounded-3xl -z-10 group-hover:border-emerald-400/40 transition-colors">
            <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 rounded-3xl"></div>
          </div>
        </div>
        
        <!-- ADN de DACAV -->
        <div class="space-y-10">
          <div class="space-y-4">
            <h3 class="text-gray-900 text-3xl font-bold tracking-tight">El ADN de DACAV</h3>
            <div class="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-500"></div>
          </div>
          <p class="text-gray-600 text-lg leading-relaxed">
            Liderado por un desarrollador con visión integral: la estética del <span class="text-gray-900 font-bold">Frontend moderno (Nuxt)</span> con la robustez de un <span class="text-gray-900 font-bold">Backend sólido (Django)</span>.
          </p>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div v-for="benefit in benefits" :key="benefit.title" class="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-emerald-300 hover:shadow-lg transition-all">
              <h4 class="text-emerald-600 font-bold text-sm uppercase tracking-wider mb-3 group-hover:translate-x-1 transition-transform">
                {{ benefit.title }}
              </h4>
              <p class="text-gray-500 text-sm leading-relaxed">{{ benefit.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Workflow de Ingeniería con imágenes -->
    <section class="py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h3 class="text-gray-900 text-3xl font-bold mb-4 tracking-tight">Workflow de Ingeniería</h3>
          <p class="text-gray-600 max-w-2xl mx-auto">Un proceso meticuloso para resultados excepcionales</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div v-for="(step, i) in workSteps" :key="i" class="relative group">
            <div class="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all h-full flex flex-col items-center text-center relative overflow-hidden">
              <!-- Imagen de fondo para cada paso -->
              <div class="absolute inset-0 opacity-5">
                <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
              </div>
              
              <div class="relative z-10">
                <div class="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg shadow-emerald-500/30">
                  {{ i + 1 }}
                </div>
                <p class="text-gray-900 text-sm font-bold uppercase tracking-wider leading-tight">{{ step }}</p>
              </div>
            </div>
            
            <!-- Conector entre pasos -->
            <div v-if="i < 4" class="hidden md:block absolute top-1/2 -right-3 translate-y-[-50%] z-10">
              <div class="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                <div class="w-2 h-2 bg-emerald-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Aliados y Compromiso -->
    <section class="py-24 px-4 sm:px-6 bg-white">
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-stretch">
        <div class="flex-1 space-y-10">
          <div>
            <h3 class="text-gray-900 text-3xl font-bold tracking-tight mb-4">Aliados estratégicos</h3>
            <p class="text-gray-600">Diseñamos soluciones para quienes valoran la calidad sobre la inmediatez genérica.</p>
          </div>
          
          <!-- Grid de targets con imágenes de fondo -->
          <div class="grid grid-cols-2 gap-4">
            <div v-for="target in targets" :key="target" 
                 class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-6 hover:border-emerald-300 transition-all">
              <!-- Imagen de fondo sutil para cada target -->
              <div class="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')] bg-cover bg-center"></div>
              </div>
              
              <div class="relative z-10">
                <div class="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-4">
                  {{ target.charAt(0) }}
                </div>
                <span class="text-gray-900 font-bold text-sm block">{{ target }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Compromiso con imagen -->
        <div class="flex-1">
          <div class="bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-12 text-white rounded-3xl shadow-2xl relative overflow-hidden h-full">
            <!-- Imagen de fondo compromiso -->
            <div class="absolute inset-0 opacity-10">
              <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')] bg-cover bg-center"></div>
            </div>
            
            <div class="relative z-10">
              <h4 class="text-2xl font-bold mb-8 tracking-tight">Nuestro compromiso innegociable</h4>
              <ul class="space-y-6">
                <li v-for="item in ['Transparencia radical', 'Código limpio y escalable', 'Diseño enfocado en conversión', 'Soporte técnico post-lanzamiento']" 
                    :key="item" class="flex items-center gap-4 text-lg">
                  <div class="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    ✓
                  </div>
                  <span class="font-medium">{{ item }}</span>
                </li>
              </ul>
              
              <!-- Stats -->
              <div class="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-6">
                <div class="text-center">
                  <div class="text-emerald-400 text-2xl font-bold">100%</div>
                  <div class="text-white/60 text-sm">Dedicación</div>
                </div>
                <div class="text-center">
                  <div class="text-emerald-400 text-2xl font-bold">24/7</div>
                  <div class="text-white/60 text-sm">Soporte</div>
                </div>
                <div class="text-center">
                  <div class="text-emerald-400 text-2xl font-bold">∞</div>
                  <div class="text-white/60 text-sm">Escalabilidad</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final con imagen -->
    <section class="relative py-24 px-4 sm:px-6 overflow-hidden">
      <!-- Imagen de fondo CTA -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-emerald-900/85"></div>
        <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
      </div>
      
      <div class="max-w-4xl mx-auto relative z-10">
        <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12 text-center shadow-xl">
          <div class="inline-flex items-center gap-3 px-5 py-2 bg-white/10 rounded-full text-white text-sm font-semibold uppercase tracking-wider mb-8">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            Conectemos
          </div>
          
          <h3 class="text-white text-4xl md:text-5xl font-bold tracking-tight mb-8">
            ¿Hablamos de tu próximo paso?
          </h3>
          <p class="text-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Estamos listos para transformar tu visión técnica en una ventaja competitiva real.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/contact" 
              class="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-full font-bold text-sm hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 inline-flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
              Iniciar conversación
            </NuxtLink>
            
            <NuxtLink to="/projects" 
              class="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
              Ver proyectos
            </NuxtLink>
          </div>
          
          <p class="text-white/60 text-sm mt-8">
            Respuesta en 24 horas • Sin compromiso inicial
          </p>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const philosophy = [
  'Comunicar con claridad absoluta',
  'Rendimiento y velocidad crítica',
  'Interfaces que generan confianza',
  'Arquitectura escalable',
  'Mantenibilidad a largo plazo'
]

const benefits = [
  { title: 'Atención Directa', desc: 'Sin gestores de cuentas. Comunicación de tú a tú con el ingeniero.' },
  { title: 'Zero Bullshit', desc: 'Explicaciones claras, soluciones reales y sin tecnicismos vacíos.' },
  { title: 'Calidad sobre Cantidad', desc: 'Limitamos nuestros proyectos mensuales para garantizar excelencia.' },
  { title: 'Partner Tecnológico', desc: 'No solo entregamos una web, acompañamos el crecimiento de tu marca.' }
]

const workSteps = [
  'Discovery',
  'Estrategia',
  'Arquitectura',
  'Desarrollo',
  'Deployment'
]

const targets = [
  'Independientes',
  'Firmas Locales',
  'Startups',
  'Small Business'
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

/* Animación sutil para imágenes de fondo */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}



/* Efecto de parallax sutil */
.bg-parallax {
  background-attachment: fixed;
}

@media (max-width: 768px) {
  .bg-parallax {
    background-attachment: scroll;
  }
}
</style>