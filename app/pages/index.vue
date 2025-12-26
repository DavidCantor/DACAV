<template>
  <div class="bg-[#F2F2F2] min-h-screen font-sans">
    
    <section class="min-h-screen flex items-center px-6 py-20">
      <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-8 text-center lg:text-left">
          <h1 class="text-[#404040] text-5xl md:text-7xl font-extrabold leading-[1.1]">
            Creamos páginas web profesionales que ayudan a tu negocio a crecer
          </h1>
          <p class="text-[#595959] text-xl md:text-2xl max-w-xl mx-auto lg:mx-0">
            Diseñamos y desarrollamos sitios web claros, elegantes y optimizados para que tus clientes confíen en ti y te contacten.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button class="bg-[#404040] text-[#F2F2F2] px-8 py-4 rounded-sm font-bold uppercase tracking-wide hover:bg-[#595959] transition-colors shadow-lg">
              Solicitar cotización
            </button>
            <button class="border-2 border-[#B0B7BF] text-[#404040] px-8 py-4 rounded-sm font-bold uppercase tracking-wide hover:bg-[#D7D7D9] transition-colors">
              Ver proyectos
            </button>
          </div>
        </div>
        <div class="hidden lg:flex justify-center">
          <div class="w-full aspect-square bg-[#D7D7D9] rounded-2xl border border-[#B0B7BF] flex items-center justify-center relative shadow-inner">
            <span class="text-[#404040] text-8xl font-black opacity-10">DACAV</span>
            <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-[#B0B7BF] rounded-full blur-3xl opacity-40"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 px-6 bg-white border-y border-[#D7D7D9]">
      <div class="max-w-6xl mx-auto">
        <div class="mb-16 text-center lg:text-left">
          <h2 class="text-[#404040] text-4xl font-bold mb-6">Soluciones web pensadas para negocios reales</h2>
          <p class="text-[#595959] text-lg max-w-3xl leading-relaxed">
            En DACAV ayudamos a profesionales y pequeñas empresas a tener una presencia digital sólida, sin complicaciones técnicas ni procesos confusos. Nos enfocamos en páginas web que no solo se ven bien, sino que funcionan, cargan rápido y comunican claramente lo que haces.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(service, index) in services" :key="index" class="p-8 bg-[#F2F2F2] border border-[#D7D7D9] rounded-sm hover:border-[#404040] transition-colors group">
            <h3 class="text-[#404040] font-bold text-xl mb-4 group-hover:text-[#595959]">{{ service.title }}</h3>
            <p class="text-[#595959] text-sm leading-relaxed">{{ service.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 px-6">
      <div class="max-w-6xl mx-auto bg-[#404040] p-10 md:p-16 rounded-sm text-[#F2F2F2] relative overflow-hidden">
        <div class="relative z-10">
          <h2 class="text-3xl md:text-4xl font-bold mb-10">Un enfoque claro, directo y sin complicaciones</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul class="space-y-4">
              <li v-for="item in reasons" :key="item" class="flex items-start gap-3 text-[#D7D7D9]">
                <span class="text-[#B0B7BF] mt-1">✔</span> {{ item }}
              </li>
            </ul>
            <div class="bg-[#595959] p-6 border-l-4 border-[#B0B7BF]">
              <p class="italic text-lg text-[#F2F2F2]">"No vendemos humo ni promesas exageradas. Construimos webs bien hechas."</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 px-6 bg-[#D7D7D9]">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-[#404040] text-4xl font-bold mb-16 text-center">Nuestro proceso de trabajo</h2>
        <div class="space-y-8">
          <div v-for="(step, index) in steps" :key="index" class="flex flex-col md:flex-row gap-6 items-center bg-[#F2F2F2] p-8 rounded-sm shadow-sm border border-[#B0B7BF]">
            <span class="text-4xl font-black text-[#B0B7BF]">{{ index + 1 }}</span>
            <div>
              <h3 class="text-[#404040] font-bold text-xl mb-2">{{ step.title }}</h3>
              <p class="text-[#595959]">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-[#404040] text-4xl font-bold mb-12">Proyectos reales</h2>
        <div class="bg-white border border-[#D7D7D9] rounded-sm overflow-hidden flex flex-col md:flex-row group hover:shadow-xl transition-shadow">
          <div class="md:w-1/2 bg-[#B0B7BF] h-64 md:h-auto flex items-center justify-center">
             <span class="text-[#404040] font-bold uppercase tracking-[10px] opacity-30">Preview</span>
          </div>
          <div class="p-10 md:w-1/2 space-y-6">
            <h3 class="text-[#404040] text-2xl font-bold italic">Asconfi-JY – Asesoría contable y financiera</h3>
            <p class="text-[#595959]">Sitio web profesional con enfoque en SEO, rendimiento y conversión de clientes.</p>
            <ul class="grid grid-cols-2 gap-2 text-sm text-[#595959]">
              <li>• Diseño corporativo</li>
              <li>• Representación SSR</li>
              <li>• Optimización SEO</li>
              <li>• Formulario contacto</li>
            </ul>
            <a href="#" class="inline-block text-[#404040] font-bold border-b-2 border-[#404040] pb-1 hover:text-[#595959] hover:border-[#595959] transition-all">
              👉 Ver proyecto
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 px-6 bg-[#404040] text-[#F2F2F2]">
      <div class="max-w-4xl mx-auto text-center space-y-8">
        <h2 class="text-3xl md:text-4xl font-bold">Acerca de DACAV</h2>
        <p class="text-lg text-[#D7D7D9] leading-relaxed">
          DACAV es un estudio de desarrollo web liderado por un desarrollador junior, con enfoque fuerte en frontend moderno con Nuxt y bases sólidas en backend.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          <div class="border-t border-[#595959] pt-4">
            <h4 class="font-bold text-[#B0B7BF] mb-2 uppercase text-xs tracking-widest">Atención</h4>
            <p>Personalizada</p>
          </div>
          <div class="border-t border-[#595959] pt-4">
            <h4 class="font-bold text-[#B0B7BF] mb-2 uppercase text-xs tracking-widest">Proyectos</h4>
            <p>Bien pensados</p>
          </div>
          <div class="border-t border-[#595959] pt-4">
            <h4 class="font-bold text-[#B0B7BF] mb-2 uppercase text-xs tracking-widest">Enfoque</h4>
            <p>Calidad, no volumen</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 px-6 bg-[#F2F2F2] text-center">
      <div class="max-w-2xl mx-auto space-y-8">
        <h2 class="text-[#404040] text-4xl md:text-5xl font-extrabold">¿Hablamos de tu proyecto?</h2>
        <p class="text-[#595959] text-xl leading-relaxed">
          Si necesitas una página web profesional para tu negocio o quieres mejorar la que ya tienes, conversemos.
        </p>
        <button class="bg-[#404040] text-[#F2F2F2] px-12 py-5 rounded-sm font-black uppercase tracking-tighter text-lg hover:scale-105 transition-transform shadow-2xl">
          Contactar ahora
        </button>
      </div>
    </section>

    <footer class="py-8 text-center text-[#595959] border-t border-[#D7D7D9] text-sm uppercase tracking-widest">
      &copy; 2024 DACAV — Hecho con Nuxt & Tailwind
    </footer>

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
/* Estética minimalista global */
html {
  scroll-behavior: smooth;
}
</style>