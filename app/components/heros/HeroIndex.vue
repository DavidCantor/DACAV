<template>
  <section class="bg-[#F2F2F2] min-h-[90vh] flex items-center px-6 py-12">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      <div class="space-y-8">
        <h1 class="text-[#404040] text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
          Creamos páginas web <span class="text-[#595959]">profesionales</span> que ayudan a tu negocio a crecer
        </h1>
        
        <p class="text-[#595959] text-xl md:text-2xl max-w-xl leading-relaxed">
          Diseñamos y desarrollamos sitios web claros, elegantes y optimizados para que tus clientes confíen en ti y te contacten.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 pt-4">
          <button class="bg-[#404040] text-[#F2F2F2] px-10 py-4 rounded-sm font-bold uppercase tracking-wider text-sm hover:bg-[#595959] transition-all duration-300 shadow-lg">
            Solicitar cotización
          </button>
          
          <button class="border-2 border-[#B0B7BF] text-[#404040] px-10 py-4 rounded-sm font-bold uppercase tracking-wider text-sm hover:bg-[#D7D7D9] transition-all duration-300">
            Ver proyectos
          </button>
        </div>

        <div class="pt-8 border-t border-[#D7D7D9] flex items-center gap-4">
          <div class="flex -space-x-2">
            <div class="w-8 h-8 rounded-full bg-[#B0B7BF]"></div>
            <div class="w-8 h-8 rounded-full bg-[#D7D7D9]"></div>
            <div class="w-8 h-8 rounded-full bg-[#404040]"></div>
          </div>
          <span class="text-[#595959] text-sm font-medium">Potenciando negocios con Nuxt & Tailwind</span>
        </div>
      </div>

      <div class="hidden lg:block relative">
        <div class="bg-[#D7D7D9] aspect-video rounded-lg shadow-2xl overflow-hidden border border-[#B0B7BF] flex items-center justify-center relative z-10">
          <div class="text-[#404040] text-6xl font-black opacity-20 select-none">
            DACAV
          </div>
        </div>
        <div class="absolute -top-10 -right-10 w-64 h-64 bg-[#B0B7BF] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div class="absolute -bottom-10 -left-10 w-64 h-64 bg-[#D7D7D9] rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

    </div>
  </section>
</template>