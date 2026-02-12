<template>
  <section class="py-16 md:py-24 px-4 sm:px-6 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-gray-900 text-3xl md:text-5xl font-black tracking-tighter mb-4">Valor Agregado</h2>
        <p class="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">Servicios complementarios para que tu web no solo exista, sino que destaque y convierta.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div class="group bg-gradient-to-br from-white to-emerald-50 p-8 md:p-10 rounded-3xl border border-emerald-100 transition-all duration-500">
          <div class="flex flex-col sm:flex-row items-start gap-6">
            <div class="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 shadow-lg">🔍</div>
            <div class="flex-1">
              <h3 class="text-gray-900 text-2xl md:text-3xl font-bold tracking-tight mb-4">Optimización y SEO Base</h3>
              <p class="text-gray-600 text-base md:text-lg leading-relaxed mb-6">Aseguro que tu sitio tenga los fundamentos técnicos correctos para ser encontrado y ofrezca una experiencia de carga rápida.</p>
              <ul class="space-y-3 text-sm text-gray-500">
                <li v-for="item in seoItems" :key="item" class="flex items-center gap-2">✓ {{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-10 flex flex-col justify-center items-center text-center">
          <div class="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center text-3xl mb-6">💡</div>
          <h3 class="text-gray-900 text-xl md:text-2xl font-bold mb-4">¿Tienes otra necesidad?</h3>
          <p class="text-gray-600 mb-6 text-sm md:text-base">Hablemos de tu proyecto específico. Podemos crear un plan a tu medida.</p>
          <NuxtLink to="/contact" class="px-8 py-3 border-2 border-gray-800 text-gray-800 font-bold uppercase text-xs rounded-full hover:bg-gray-800 hover:text-white transition-all">Consultar</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const seoItems = [
  'Estructura HTML semántica para SEO',
  'Meta etiquetas y títulos optimizados',
  'Sitemap XML y robots.txt configurados'
]
</script>