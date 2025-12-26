<template>
  <div class="bg-[#FFF] min-h-screen font-sans text-[#022326] selection:bg-[#02735E] selection:text-white">
    
    <section class="relative min-h-[90vh] flex items-center px-6 pt-20 overflow-hidden bg-gradient-to-b from-white to-[#F9F9F9]">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div class="lg:col-span-7 space-y-10 text-center lg:text-left z-10">
          <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#035951]/5 border border-[#035951]/10 text-[#035951] text-xs font-bold uppercase tracking-widest">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#02735E] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-[#02735E]"></span>
            </span>
            Estudio de Desarrollo Web
          </div>
          
          <h1 class="text-[#022326] text-5xl md:text-8xl font-black leading-[0.95] tracking-tighter">
            Creamos páginas <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#034040] to-[#02735E]">profesionales.</span>
          </h1>
          
          <p class="text-[#034040]/70 text-xl md:text-2xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
            Diseñamos y desarrollamos sitios web claros, elegantes y optimizados para que tus clientes <span class="text-[#022326] font-semibold">confíen en ti y te contacten.</span>
          </p>
          
          <div class="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
            <button class="group relative bg-[#022326] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm overflow-hidden transition-all hover:pr-14 shadow-2xl">
              <span class="relative z-10">Solicitar cotización</span>
              <span class="absolute right-5 opacity-0 group-hover:opacity-100 transition-all">→</span>
            </button>
            <button class="px-10 py-5 rounded-full border border-[#022326]/10 font-bold uppercase tracking-widest text-sm hover:bg-gray-50 transition-all">
              Ver proyectos
            </button>
          </div>
        </div>

        <div class="lg:col-span-5 relative hidden lg:block">
          <div class="relative w-full aspect-[4/5] bg-[#022326] rounded-[40px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(2,35,38,0.3)] group">
            <div class="absolute inset-0 bg-gradient-to-tr from-[#02735E]/40 to-transparent"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-white/5 text-[12rem] font-black rotate-90 tracking-tighter group-hover:scale-110 transition-transform duration-700">DACAV</span>
            </div>
            <div class="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
              <p class="text-white font-medium text-lg leading-tight">Soluciones reales para el crecimiento de tu negocio.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div class="max-w-2xl">
            <h2 class="text-[#022326] text-4xl md:text-6xl font-bold tracking-tighter mb-6">Pensadas para negocios reales</h2>
            <p class="text-[#034040]/60 text-lg leading-relaxed">
              En DACAV ayudamos a profesionales y pequeñas empresas a tener una presencia digital sólida, sin complicaciones técnicas ni procesos confusos.
            </p>
          </div>
          <div class="text-[#02735E] font-bold text-sm tracking-widest uppercase py-2 border-b-2 border-[#02735E]">
            Nuestros Servicios
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="(service, index) in services" :key="index" 
               class="group p-12 bg-[#F9F9F9] rounded-[32px] hover:bg-[#022326] transition-all duration-500 flex flex-col justify-between min-h-[320px]">
            <div>
              <div class="w-12 h-12 bg-[#02735E] rounded-full mb-8 flex items-center justify-center text-white font-bold">
                0{{ index + 1 }}
              </div>
              <h3 class="text-[#022326] group-hover:text-white font-bold text-3xl mb-4 transition-colors">{{ service.title }}</h3>
              <p class="text-[#034040]/70 group-hover:text-white/60 text-lg max-w-sm transition-colors">{{ service.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="bg-[#022326] rounded-[60px] p-8 md:p-20 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#02735E]/20 via-transparent to-transparent"></div>
          
          <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 class="text-white text-4xl md:text-6xl font-bold tracking-tight mb-12">Un enfoque claro y directo</h2>
              <ul class="space-y-6">
                <li v-for="item in reasons" :key="item" class="flex items-center gap-4 text-white/80 text-lg">
                  <div class="w-6 h-6 rounded-full bg-[#02735E] flex items-center justify-center text-[10px]">✔</div>
                  {{ item }}
                </li>
              </ul>
            </div>
            <div class="flex flex-col justify-center">
              <div class="bg-white/5 backdrop-blur-sm border border-white/10 p-12 rounded-[40px]">
                <p class="text-3xl text-white font-light italic leading-snug">
                  "No vendemos humo ni promesas exageradas. Construimos <span class="text-[#02735E] font-bold">webs bien hechas.</span>"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 bg-[#F9F9F9]">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-[#022326] text-4xl md:text-5xl font-bold mb-24 text-center tracking-tight">Nuestro proceso de trabajo</h2>
        <div class="space-y-24">
          <div v-for="(step, index) in steps" :key="index" class="relative pl-12 md:pl-0">
            <div class="md:grid md:grid-cols-12 md:gap-12 items-start">
              <div class="hidden md:block md:col-span-2 text-6xl font-black text-[#02735E]/20">0{{ index + 1 }}</div>
              <div class="md:col-span-10">
                <h3 class="text-[#022326] font-bold text-2xl mb-4">{{ step.title }}</h3>
                <p class="text-[#034040]/70 text-lg leading-relaxed">{{ step.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 bg-white">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-[#022326] text-sm font-black uppercase tracking-[0.4em] mb-12 border-l-4 border-[#02735E] pl-6">Proyectos Reales</h2>
        <div class="group relative bg-[#022326] rounded-[40px] overflow-hidden flex flex-col lg:flex-row min-h-[500px]">
          <div class="lg:w-1/2 bg-[#034040] relative overflow-hidden">
            <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-[#FFF]/10 font-bold uppercase tracking-[20px] text-4xl">Portfolio</span>
            </div>
          </div>
          <div class="p-12 lg:p-20 lg:w-1/2 flex flex-col justify-center text-white">
            <h3 class="text-[#02735E] font-bold text-sm uppercase tracking-widest mb-4">Caso de Éxito</h3>
            <h4 class="text-4xl md:text-5xl font-bold mb-8 italic">Asconfi-JY</h4>
            <p class="text-white/60 text-xl leading-relaxed mb-10">Sitio web profesional con enfoque en SEO, rendimiento y conversión de clientes.</p>
            <div class="grid grid-cols-2 gap-4 mb-12">
              <div v-for="tag in ['Diseño corporativo', 'Representación SSR', 'Optimización SEO', 'Formulario contacto']" 
                   :key="tag" class="flex items-center gap-2 text-sm text-white/40">
                <div class="w-1 h-1 bg-[#02735E] rounded-full"></div> {{ tag }}
              </div>
            </div>
            <a href="#" class="text-white font-bold text-lg inline-flex items-center group/link">
              Ver Proyecto <span class="ml-4 transition-transform group-hover/link:translate-x-2 text-[#02735E]">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 bg-[#022326] text-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <h2 class="text-5xl md:text-7xl font-bold tracking-tighter leading-none">Acerca de <br/> <span class="text-[#02735E]">DACAV.</span></h2>
          <div class="space-y-12">
            <p class="text-2xl text-white/70 font-light leading-relaxed">
              DACAV es un estudio liderado por un desarrollador junior con enfoque fuerte en frontend moderno con <span class="text-white font-bold">Nuxt</span> y bases sólidas en backend.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div v-for="stat in [{l:'Atención', v:'Personalizada'}, {l:'Proyectos', v:'Bien pensados'}, {l:'Enfoque', v:'Calidad'}]" :key="stat.l">
                <div class="text-[#02735E] text-xs font-black uppercase tracking-widest mb-2">{{ stat.l }}</div>
                <div class="text-xl font-bold">{{ stat.v }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-40 px-6 bg-white">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-[#022326] text-6xl md:text-8xl font-black tracking-tighter mb-12">¿Hablamos?</h2>
        <p class="text-[#034040]/60 text-2xl mb-12 leading-relaxed">
          Si necesitas una página web profesional para tu negocio o quieres mejorar la que ya tienes, conversemos.
        </p>
        <button class="bg-[#02735E] text-white px-16 py-7 rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-[#034040] hover:scale-105 transition-all shadow-[0_20px_50px_rgba(2,115,94,0.3)]">
          Contactar ahora
        </button>
      </div>
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
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;700;800&display=swap');

html {
  scroll-behavior: smooth;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

body {
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
</style>