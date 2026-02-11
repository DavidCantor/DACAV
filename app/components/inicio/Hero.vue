<template>
  <section class="relative min-h-screen flex items-center px-4 sm:px-6 pt-16 overflow-hidden">
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-emerald-900/85"></div>
      <div
  class="absolute inset-0 bg-[url('/images/inicio/hero.webp')] bg-cover bg-center opacity-40">
</div>
    </div>

    <div class="max-w-7xl mx-auto w-full relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-8 text-center lg:text-left order-2 lg:order-1">
          <div
            class="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold uppercase tracking-wider">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            Estudio de Desarrollo Web
          </div>

          <h1 class="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight">
            Creamos páginas <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">profesionales.</span>
          </h1>

          <p class="text-white/90 text-xl md:text-2xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
            Diseñamos y desarrollamos sitios web claros, elegantes y optimizados para que tus clientes
            <span class="text-white font-semibold">confíen en ti y te contacten.</span>
          </p>

          <div class="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-6">
            <NuxtLink to="/contact"
              class="group relative bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm overflow-hidden transition-all hover:shadow-2xl hover:shadow-emerald-500/30 transform hover:-translate-y-1 text-center">
              <span class="relative z-10">Solicitar cotización</span>
              <span
                class="absolute right-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300">→</span>
            </NuxtLink>
            <NuxtLink to="/projects"
              class="px-10 py-5 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm text-white font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all transform hover:-translate-y-1 text-center">
              Ver proyectos
            </NuxtLink>
          </div>
        </div>

        <div class="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div class="relative group">
            <div class="absolute -inset-4 bg-emerald-500/20 rounded-[4rem] blur-3xl group-hover:bg-emerald-500/30 transition duration-700"></div>
            <div
              class="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] bg-white/5 backdrop-blur-md rounded-[4rem] border border-white/10 p-4 shadow-2xl overflow-hidden flex items-center justify-center transform lg:rotate-3 hover:rotate-0 transition-all duration-700">
              <img src="/dacav-logo.webp" alt="DACAV Logo"
                class="w-full h-full object-cover rounded-[3.5rem] transform transition-transform duration-1000 group-hover:scale-110" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>