<template>
  <div class="bg-white min-h-screen font-sans text-[#022326] selection:bg-[#02735E] selection:text-white">
    
    <section class="py-32 px-6 border-b border-gray-100 bg-[#F9F9F9]">
      <div class="max-w-5xl mx-auto text-center space-y-10">
        <h1 class="text-[#02735E] text-xs font-black uppercase tracking-[0.5em] mb-4">Acerca de DACAV</h1>
        <h2 class="text-[#022326] text-5xl md:text-7xl font-black mb-12 leading-[0.9] tracking-tighter italic">
          Desarrollo web <span class="not-italic text-[#02735E]">honesto</span> y funcional.
        </h2>
        <div class="space-y-8 text-[#034040]/70 text-xl md:text-2xl leading-relaxed text-left md:text-center max-w-4xl mx-auto font-light">
          <p>
            DACAV no es solo una agencia; es un compromiso con la <span class="text-[#022326] font-bold">excelencia técnica</span>. Creamos ecosistemas digitales que permiten a profesionales y empresas destacar en un mercado saturado.
          </p>
          <p>
            Eliminamos la fricción entre la idea y la ejecución. Entendemos tu negocio antes de escribir la primera línea de código.
          </p>
        </div>
      </div>
    </section>

    <section class="py-32 px-6">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        
        <div class="bg-[#022326] p-12 md:p-20 text-white rounded-[60px] shadow-3xl relative overflow-hidden group">
          <div class="absolute top-0 right-0 w-64 h-64 bg-[#02735E] blur-[120px] opacity-20"></div>
          <h3 class="text-4xl font-black mb-12 italic tracking-tighter">Nuestra filosofía</h3>
          <p class="mb-10 text-white/50 uppercase tracking-widest text-xs font-bold">Principios irrenunciables:</p>
          <ul class="space-y-6">
            <li v-for="point in philosophy" :key="point" class="flex items-center gap-4 group/item">
              <span class="w-8 h-px bg-[#02735E] group-hover/item:w-12 transition-all"></span>
              <span class="text-lg font-light text-white/80 group-hover/item:text-white transition-colors">{{ point }}</span>
            </li>
          </ul>
          <div class="mt-16 pt-8 border-t border-white/10">
            <p class="text-[#02735E] font-black italic text-xl leading-tight">
              "La tecnología es el motor, pero el propósito es tu negocio."
            </p>
          </div>
        </div>
        
        <div class="space-y-10">
          <div class="space-y-4">
            <h3 class="text-[#022326] text-4xl font-black tracking-tighter">El ADN de DACAV</h3>
            <div class="h-1 w-20 bg-[#02735E]"></div>
          </div>
          <p class="text-[#034040]/70 text-xl leading-relaxed font-light">
            Liderado por un desarrollador con visión integral: la estética del <span class="text-[#022326] font-bold">Frontend moderno (Nuxt)</span> con la robustez de un <span class="text-[#022326] font-bold">Backend sólido (Django)</span>.
          </p>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div v-for="benefit in benefits" :key="benefit.title" class="group">
              <h4 class="text-[#02735E] font-black text-[10px] uppercase tracking-[0.3em] mb-3 group-hover:translate-x-2 transition-transform inline-block">
                {{ benefit.title }}
              </h4>
              <p class="text-[#034040]/80 text-sm leading-relaxed">{{ benefit.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 bg-[#F9F9F9]">
      <div class="max-w-7xl mx-auto">
        <h3 class="text-[#022326] text-4xl font-black mb-20 text-center tracking-tighter italic">Workflow de Ingeniería</h3>
        <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div v-for="(step, i) in workSteps" :key="i" class="relative group">
            <div class="bg-white p-10 rounded-[30px] border border-gray-100 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all h-full flex flex-col items-center text-center">
              <span class="text-[#02735E]/20 font-black text-6xl mb-6 group-hover:text-[#02735E] transition-colors leading-none italic">
                0{{ i + 1 }}
              </span>
              <p class="text-[#022326] text-xs font-black uppercase tracking-widest leading-tight">{{ step }}</p>
            </div>
            <div v-if="i < 4" class="hidden md:block absolute top-1/2 -right-4 translate-y-[-50%] z-10 text-gray-200 text-xl">→</div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-stretch">
        <div class="flex-1 space-y-10">
          <h3 class="text-[#022326] text-4xl font-black italic tracking-tighter">Aliados estratégicos</h3>
          <p class="text-[#034040]/70 text-lg font-light">Diseñamos soluciones para quienes valoran la calidad sobre la inmediatez genérica.</p>
          <div class="flex flex-wrap gap-4">
            <span v-for="target in targets" :key="target" 
                  class="px-6 py-3 bg-white border-2 border-[#022326] text-[#022326] text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-[#02735E] hover:text-white hover:border-[#02735E] transition-all cursor-default">
              {{ target }}
            </span>
          </div>
        </div>
        
        <div class="flex-1 bg-[#02735E] p-12 md:p-16 text-white rounded-[50px] shadow-2xl relative">
          <div class="absolute -left-10 -bottom-10 w-40 h-40 bg-[#022326] rounded-full opacity-10"></div>
          <h4 class="text-2xl font-black mb-8 italic tracking-tight">Nuestro compromiso innegociable</h4>
          <ul class="space-y-5">
            <li v-for="item in ['Transparencia radical', 'Código limpio y escalable', 'Diseño enfocado en conversión', 'Soporte técnico post-lanzamiento']" 
                :key="item" class="flex items-center gap-4 text-sm font-medium">
              <span class="w-1.5 h-1.5 bg-white rounded-full"></span> {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="py-32 px-6">
      <div class="max-w-4xl mx-auto text-center space-y-10 bg-[#022326] p-16 md:p-24 rounded-[80px] shadow-3xl relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-b from-[#02735E]/10 to-transparent"></div>
        <div class="relative z-10 space-y-8">
          <h3 class="text-white text-5xl md:text-7xl font-black italic tracking-tighter">¿Hablamos de tu próximo paso?</h3>
          <p class="text-white/60 text-xl font-light max-w-xl mx-auto leading-relaxed">
            Estamos listos para transformar tu visión técnica en una ventaja competitiva real.
          </p>
          <NuxtLink to="/contact" 
            class="inline-block bg-[#02735E] text-white px-16 py-6 rounded-full font-black uppercase tracking-[0.3em] text-xs hover:bg-white hover:text-[#022326] transition-all shadow-2xl hover:scale-105 active:scale-95">
            Iniciar conversación
          </NuxtLink>
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