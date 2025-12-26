<template>
  <div class="bg-[#F2F2F2] min-h-screen">
    
    <section class="py-24 px-6 border-b border-[#D7D7D9]">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-[#404040] text-xs font-bold uppercase tracking-[0.3em] mb-4">Acerca de DACAV</h1>
        <h2 class="text-[#404040] text-4xl md:text-6xl font-black mb-8 leading-tight">
          Desarrollo web claro, profesional y enfocado en resultados
        </h2>
        <div class="space-y-6 text-[#595959] text-lg md:text-xl leading-relaxed text-left md:text-center max-w-3xl mx-auto">
          <p>
            DACAV es un estudio de desarrollo web enfocado en crear páginas web funcionales, elegantes y bien estructuradas para profesionales, emprendimientos y pequeñas empresas.
          </p>
          <p>
            No creemos en soluciones genéricas ni promesas exageradas. Cada proyecto se trabaja de forma personalizada, entendiendo primero el negocio y luego construyendo la solución adecuada.
          </p>
        </div>
      </div>
    </section>

    <section class="py-20 px-6">
      <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="bg-[#404040] p-10 md:p-16 text-[#F2F2F2] rounded-sm shadow-xl">
          <h3 class="text-3xl font-bold mb-8 italic">🎯 Nuestra filosofía</h3>
          <p class="mb-8 text-[#D7D7D9]">Creemos que una buena página web debe:</p>
          <ul class="space-y-4">
            <li v-for="point in philosophy" :key="point" class="flex items-center gap-3">
              <span class="w-2 h-2 bg-[#B0B7BF]"></span>
              <span class="font-medium">{{ point }}</span>
            </li>
          </ul>
          <p class="mt-10 pt-6 border-t border-[#595959] text-[#B0B7BF] italic">
            "La tecnología es un medio, no el fin."
          </p>
        </div>
        
        <div class="space-y-8">
          <h3 class="text-[#404040] text-3xl font-bold">🧠 ¿Quién está detrás de DACAV?</h3>
          <p class="text-[#595959] leading-relaxed">
            DACAV es liderado por un desarrollador junior con enfoque fuerte en frontend moderno con <strong>Nuxt</strong> y bases sólidas en backend con <strong>Django y PostgreSQL</strong>.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div v-for="benefit in benefits" :key="benefit.title" class="border-l-4 border-[#B0B7BF] pl-4">
              <h4 class="text-[#404040] font-bold text-sm uppercase mb-1">{{ benefit.title }}</h4>
              <p class="text-[#595959] text-sm">{{ benefit.desc }}</p>
            </div>
          </div>
          <p class="text-[#404040] font-bold italic pt-4">Cada proyecto recibe el mismo nivel de cuidado, sin importar su tamaño.</p>
        </div>
      </div>
    </section>

    <section class="py-20 px-6 bg-[#D7D7D9]">
      <div class="max-w-6xl mx-auto">
        <h3 class="text-[#404040] text-3xl font-bold mb-12 text-center">🛠️ Cómo trabajamos</h3>
        <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div v-for="(step, i) in workSteps" :key="i" class="bg-[#F2F2F2] p-6 border border-[#B0B7BF] flex flex-col items-center text-center">
            <span class="text-[#B0B7BF] font-black text-2xl mb-4">{{ i + 1 }}</span>
            <p class="text-[#404040] text-sm font-bold">{{ step }}</p>
          </div>
        </div>
        <p class="mt-8 text-center text-[#595959] font-medium tracking-widest uppercase text-xs">
          Sin intermediarios. Sin letra pequeña.
        </p>
      </div>
    </section>

    <section class="py-20 px-6">
      <div class="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div class="flex-1">
          <h3 class="text-[#404040] text-3xl font-bold mb-6 italic">🤝 Para quién trabajamos</h3>
          <div class="flex flex-wrap gap-3">
            <span v-for="target in targets" :key="target" class="bg-white border border-[#D7D7D9] px-4 py-2 text-[#595959] text-sm font-bold">
              {{ target }}
            </span>
          </div>
        </div>
        <div class="flex-1 bg-[#404040] p-8 text-[#F2F2F2]">
          <h4 class="text-xl font-bold mb-4">🚀 Nuestro compromiso</h4>
          <ul class="text-sm space-y-3 text-[#D7D7D9]">
            <li>• Transparencia desde el inicio</li>
            <li>• Código limpio y mantenible</li>
            <li>• Diseño funcional, no sobrecargado</li>
            <li>• Acompañamiento post-proyecto</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="py-24 px-6 bg-[#F2F2F2] border-t border-[#D7D7D9]">
      <div class="max-w-4xl mx-auto text-center space-y-8">
        <h3 class="text-[#404040] text-4xl font-black italic tracking-tighter">¿Trabajamos juntos?</h3>
        <p class="text-[#595959] text-lg max-w-xl mx-auto">
          Si tienes un proyecto en mente o necesitas mejorar tu presencia digital, conversemos.
        </p>
        <NuxtLink to="/contact" class="inline-block bg-[#404040] text-[#F2F2F2] px-12 py-5 rounded-sm font-black uppercase tracking-widest hover:bg-[#595959] transition-all shadow-xl">
          Contactar ahora
        </NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup>
const philosophy = [
  'Comunicar con claridad',
  'Cargar rápido y ser responsive',
  'Transmitir confianza',
  'Construida con buenas prácticas',
  'Fácil de mantener y escalar'
]

const benefits = [
  { title: 'Atención Directa', desc: 'Sin intermediarios, hablas con el desarrollador.' },
  { title: 'Comunicación Clara', desc: 'Sin tecnicismos innecesarios.' },
  { title: 'Decisiones Técnicas', desc: 'Enfoque en calidad y rendimiento.' },
  { title: 'Compromiso Real', desc: 'Atención total a cada entrega.' }
]

const workSteps = [
  'Escuchamos tu idea',
  'Analizamos la solución',
  'Definimos alcance',
  'Desarrollamos',
  'Revisamos y publicamos'
]

const targets = [
  'Profesionales independientes',
  'Oficinas y negocios locales',
  'Emprendimientos',
  'Pequeñas empresas'
]
</script>