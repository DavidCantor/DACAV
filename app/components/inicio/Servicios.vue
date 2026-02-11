<template>
  <section class="py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
        <div class="max-w-2xl">
          <h2 class="text-gray-900 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Pensadas para negocios reales
          </h2>
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
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  { title: 'Sitios web corporativos', desc: 'Webs profesionales para mostrar tus servicios, generar confianza y posicionar tu marca.' },
  { title: 'Landing pages', desc: 'Páginas enfocadas en conversión: captar clientes, mensajes o ventas.' },
  { title: 'Optimización y SEO', desc: 'Estructura preparada para que Google entienda tu negocio y te encuentre.' },
  { title: 'Mantenimiento', desc: 'Actualizaciones, correcciones y mejoras continuas cuando lo necesites.' }
]
</script>