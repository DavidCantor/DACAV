<template>
  <section class="py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-gray-900 text-4xl md:text-5xl font-bold mb-20 text-center tracking-tight">
        Nuestro proceso de trabajo
      </h2>
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
</template>

<script setup>
const steps = [
  { title: 'Análisis y objetivos', desc: 'Entendemos tu negocio, tus clientes y qué necesitas lograr.' },
  { title: 'Propuesta clara', desc: 'Definimos alcance, tiempos y entregables sin letra pequeña.' },
  { title: 'Diseño y desarrollo', desc: 'Construimos tu sitio con una estructura clara y diseño profesional.' },
  { title: 'Revisión y ajustes', desc: 'Revisamos juntos y ajustamos lo necesario.' },
  { title: 'Entrega y soporte', desc: 'Publicamos tu web y te acompañamos después del lanzamiento.' }
]
</script>