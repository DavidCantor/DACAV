<template>
  <div class="min-h-screen font-sans text-gray-900 bg-white">

    <!-- Hero Section con imagen de fondo -->
    <section class="relative min-h-screen flex items-center px-4 sm:px-6 pt-16 overflow-hidden">
      <!-- Imagen de fondo con overlay -->
      <div class="absolute inset-0 z-0">
        <!-- Imagen de fondo relacionada con desarrollo web -->
        <div class="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-emerald-900/85"></div>
        <div
          class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-40">
        </div>
      </div>

      <div class="max-w-7xl mx-auto w-full relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div class="space-y-8 text-center lg:text-left">
            <div
              class="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold uppercase tracking-wider">
              <span class="relative flex h-3 w-3">
                <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              Estudio de Desarrollo Web
            </div>

            <h1 class="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight">
              Creamos páginas <br />
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">profesionales.</span>
            </h1>

            <p class="text-white/90 text-xl md:text-2xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Diseñamos y desarrollamos sitios web claros, elegantes y optimizados para que tus clientes <span
                class="text-white font-semibold">confíen en ti y te contacten.</span>
            </p>

            <div class="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-6">
              <NuxtLink to="/contact"
                class="group relative bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm overflow-hidden transition-all hover:shadow-2xl hover:shadow-emerald-500/30 transform hover:-translate-y-1">
                <span class="relative z-10">Solicitar cotización</span>
                <span
                  class="absolute right-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300">→</span>
              </NuxtLink>
              <NuxtLink to="/projects"
                class="px-10 py-5 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm text-white font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all transform hover:-translate-y-1 inline-block">
                Ver proyectos
              </NuxtLink>
            </div>
          </div>          
        </div>
      </div>
      
    </section>

    <!-- Servicios Section -->
    <section class="py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div class="max-w-2xl">
            <h2 class="text-gray-900 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Pensadas para
              negocios reales</h2>
            <p class="text-gray-600 text-lg leading-relaxed">
              En DACAV ayudamos a profesionales y pequeñas empresas a tener una presencia digital sólida, sin
              complicaciones técnicas ni procesos confusos.
            </p>
          </div>
          <div class="text-emerald-600 font-bold text-sm tracking-widest uppercase py-2 border-b-2 border-emerald-600">
            Nuestros Servicios
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="(service, index) in services" :key="index"
            class="group p-8 md:p-10 bg-white rounded-3xl hover:bg-gradient-to-br hover:from-emerald-50 hover:to-cyan-50 transition-all duration-500 flex flex-col justify-between min-h-[300px] border border-gray-100 hover:border-emerald-100 hover:shadow-2xl hover:shadow-emerald-100/50 transform hover:-translate-y-2">
            <div>
              <div
                class="w-14 h-14 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl mb-8 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-500/30">
                0{{ index + 1 }}
              </div>
              <h3 class="text-gray-900 font-bold text-2xl mb-4 transition-colors">{{ service.title }}</h3>
              <p class="text-gray-600 text-lg max-w-sm transition-colors">{{ service.desc }}</p>
            </div>
            <div class="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="inline-flex items-center text-emerald-600 font-semibold">
                Más información
                <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                  </path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Enfoque Section -->
    <section class="py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-900 to-gray-800">
      <div class="max-w-7xl mx-auto">
        <div class="rounded-4xl p-8 md:p-16 lg:p-20 relative overflow-hidden border border-gray-700/50 shadow-2xl">
          <div
            class="absolute top-0 left-0 w-72 h-72 bg-emerald-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl">
          </div>
          <div
            class="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl">
          </div>

          <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 class="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-12">Un enfoque claro y
                directo</h2>
              <ul class="space-y-6">
                <li v-for="item in reasons" :key="item" class="flex items-center gap-4 text-white/80 text-lg">
                  <div
                    class="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-emerald-500/30">
                    ✔</div>
                  {{ item }}
                </li>
              </ul>
            </div>
            <div class="flex flex-col justify-center">
              <div class="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl relative overflow-hidden">
                <div class="absolute top-0 right-0 text-9xl font-black text-white/5">"</div>
                <p class="text-2xl lg:text-3xl text-white font-light italic leading-snug relative">
                  "No vendemos humo ni promesas exageradas. Construimos <span class="text-emerald-400 font-bold">webs
                    bien hechas.</span>"
                </p>
                <div class="mt-8 pt-6 border-t border-white/10">
                  <p class="text-white font-semibold">David Cantor</p>
                  <p class="text-white/60 text-sm">Fundador de DACAV</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Proceso Section -->
    <section class="py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-gray-900 text-4xl md:text-5xl font-bold mb-20 text-center tracking-tight">Nuestro proceso de
          trabajo</h2>
        <div class="space-y-16">
          <div v-for="(step, index) in steps" :key="index" class="relative">
            <div class="grid grid-cols-1 md:grid-cols-12 md:gap-8 items-start">
              <div class="md:col-span-3 mb-6 md:mb-0">
                <div class="text-6xl md:text-7xl font-black text-emerald-100">0{{ index + 1 }}</div>
                <div class="hidden md:block h-px w-full bg-gradient-to-r from-emerald-400 to-cyan-400 mt-4"></div>
              </div>
              <div
                class="md:col-span-9 bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 class="text-gray-900 font-bold text-2xl mb-4">{{ step.title }}</h3>
                <p class="text-gray-600 text-lg leading-relaxed">{{ step.desc }}</p>
                <div class="mt-6 flex items-center text-emerald-600 font-medium">
                  <span>Paso {{ index + 1 }} de {{ steps.length }}</span>
                  <div class="ml-4 flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                      :style="{ width: `${(index + 1) * 20}%` }"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Proyectos Section -->
    <section class="py-24 px-4 sm:px-6 bg-white">
      <div class="max-w-7xl mx-auto">
        <h2
          class="text-gray-900 text-sm font-black uppercase tracking-[0.4em] mb-12 border-l-4 border-emerald-500 pl-6">
          Proyectos Reales</h2>
        <div
          class="group relative rounded-4xl overflow-hidden flex flex-col lg:flex-row min-h-[500px] border border-gray-100 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
          <div class="lg:w-1/2 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-emerald-900/90 to-cyan-900/80"></div>
            <div
              class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-30">
            </div>
            <div class="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
              <span
                class="text-white/20 font-black uppercase tracking-[10px] text-3xl lg:text-4xl mb-6">Portfolio</span>
              <div
                class="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold shadow-2xl">
                D</div>
            </div>
          </div>
          <div
            class="p-10 lg:p-16 lg:w-1/2 flex flex-col justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <h3 class="text-emerald-400 font-bold text-sm uppercase tracking-widest mb-4">Caso de Éxito</h3>
            <h4 class="text-4xl md:text-5xl font-bold mb-8">Asconfi-JY</h4>
            <p class="text-white/70 text-xl leading-relaxed mb-10">Sitio web profesional con enfoque en SEO, rendimiento
              y conversión de clientes.</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              <div
                v-for="tag in ['Diseño corporativo', 'Representación SSR', 'Optimización SEO', 'Formulario contacto']"
                :key="tag" class="flex items-center gap-3 text-white/80">
                <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>{{ tag }}</span>
              </div>
            </div>
            <a href="https://asconfijy.netlify.app/" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center group/link text-white font-bold text-lg">
              Ver Proyecto
              <span class="ml-4 transition-transform group-hover/link:translate-x-3 text-emerald-400">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Acerca Section -->
    <section class="py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h2 class="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-8">Acerca de <br />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">DACAV.</span>
            </h2>
            <div class="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mb-12"></div>
          </div>
          <div class="space-y-12">
            <p class="text-xl lg:text-2xl text-white/80 font-light leading-relaxed">
              DACAV es un estudio liderado por un desarrollador junior con enfoque fuerte en frontend moderno con <span
                class="text-white font-bold">Nuxt</span> y bases sólidas en backend.
            </p>
            <div class="grid grid-cols-1 xs:grid-cols-3 gap-8">
              <div
                v-for="stat in [{ l: 'Atención', v: 'Personalizada' }, { l: 'Proyectos', v: 'Bien pensados' }, { l: 'Enfoque', v: 'Calidad' }]"
                :key="stat.l"
                class="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 min-h-[140px] flex flex-col justify-center">
                <div class="text-emerald-400 text-xs font-black uppercase tracking-widest mb-3">{{ stat.l }}</div>
                <div class="text-2xl font-bold leading-tight break-words">{{ stat.v }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contacto Section -->
    <section class="py-32 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400"></div>
      <div class="max-w-4xl mx-auto text-center relative z-10">
        <h2 class="text-gray-900 text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-12">¿Hablamos?</h2>
        <p class="text-gray-600 text-xl md:text-2xl mb-16 leading-relaxed max-w-3xl mx-auto">
          Si necesitas una página web profesional para tu negocio o quieres mejorar la que ya tienes, conversemos.
        </p>
        <button
          class="group relative bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-16 py-6 rounded-full font-black uppercase tracking-[0.2em] text-sm hover:shadow-2xl hover:shadow-emerald-500/50 transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
          <span class="relative z-10">Contactar ahora</span>
          <div
            class="absolute inset-0 bg-gradient-to-r from-emerald-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          </div>
        </button>

        <div class="mt-20 pt-12 border-t border-gray-100">
          <p class="text-gray-500 text-sm tracking-widest uppercase">DACAV • Estudio de Desarrollo Web</p>
        </div>
      </div>

      <!-- Elementos decorativos -->
      <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-300/10 rounded-full blur-3xl"></div>
      <div class="absolute -top-20 -right-20 w-80 h-80 bg-cyan-300/10 rounded-full blur-3xl"></div>
    </section>

  </div>
</template>

<script setup>
const services = [
  { title: 'Sitios web corporativos', desc: 'Webs profesionales para mostrar tus servicios, generar confianza y posicionar tu marca.' },
  { title: 'Landing pages', desc: 'Páginas enfocadas en conversión: captar clientes, mensajes o ventas.' },
  { title: 'Optimización y SEO', desc: 'Estructura preparada para que Google entienda tu negocio y te encuentre.' },
  { title: 'Mantenimiento', desc: 'Actualizaciones, correcciones y mejoras continuas cuando lo necesites.' }
]

const reasons = [
  'Comunicación clara y acompañamiento cercano',
  'Procesos simples y transparentes',
  'Código limpio y buenas prácticas',
  'Atención directa en cada proyecto',
  'Soluciones realistas según tu presupuesto'
]

const steps = [
  { title: 'Análisis y objetivos', desc: 'Entendemos tu negocio, tus clientes y qué necesitas lograr.' },
  { title: 'Propuesta clara', desc: 'Definimos alcance, tiempos y entregables sin letra pequeña.' },
  { title: 'Diseño y desarrollo', desc: 'Construimos tu sitio con una estructura clara y diseño profesional.' },
  { title: 'Revisión y ajustes', desc: 'Revisamos juntos y ajustamos lo necesario.' },
  { title: 'Entrega y soporte', desc: 'Publicamos tu web y te acompañamos después del lanzamiento.' }
]
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

html {
  scroll-behavior: smooth;
  font-family: 'Inter', sans-serif;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

/* Animación personalizada para gradientes */
@keyframes gradient-shift {

  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

.bg-gradient-animate {
  background-size: 200% 200%;
  animation: gradient-shift 15s ease infinite;
}
</style>