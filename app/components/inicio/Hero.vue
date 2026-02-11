<template>
  <section class="relative min-h-screen flex items-center px-4 sm:px-6 pt-16 overflow-hidden py-6">
    <!-- Fondo con fade-in -->
    <div class="absolute inset-0 z-0 animate-fade-in">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-emerald-900/85"></div>
      <div class="absolute inset-0 bg-[url('/images/inicio/hero.webp')] bg-cover bg-center opacity-40"></div>
    </div>

    <div class="max-w-7xl mx-auto w-full relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Contenido izquierdo - Animaciones escalonadas -->
        <div class="space-y-8 text-center lg:text-left order-2 lg:order-1">
          <!-- Badge con fade-in y slide-up -->
          <div
            class="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold uppercase tracking-wider animate-slide-up"
            style="animation-delay: 0.2s; animation-fill-mode: both;">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            Estudio de Desarrollo Web
          </div>

          <!-- Título con fade-in y slide-up -->
          <h1 class="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight animate-slide-up"
            style="animation-delay: 0.4s; animation-fill-mode: both;">
            Impulsa tu negocio <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 animate-gradient">
              con una web profesional
            </span>
          </h1>

          <!-- Párrafo con fade-in y slide-up -->
          <p class="text-white/90 text-xl md:text-2xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light animate-slide-up"
            style="animation-delay: 0.6s; animation-fill-mode: both;">
            Landing pages, sitios corporativos y optimización SEO 
            <span class="text-white font-semibold">para emprendedores y negocios que quieren crecer.</span>
          </p>

          <!-- Botones con fade-in y slide-up -->
          <div class="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-6 animate-slide-up"
            style="animation-delay: 0.8s; animation-fill-mode: both;">
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

        <!-- Logo con animación de rotación y escala -->
        <div class="order-1 lg:order-2 flex justify-center lg:justify-end animate-float-in"
          style="animation-delay: 0.5s; animation-fill-mode: both;">
          <div class="relative group">
            <div class="absolute -inset-4 bg-emerald-500/20 rounded-[4rem] blur-3xl group-hover:bg-emerald-500/30 transition duration-700"></div>
            <div
              class="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] bg-white/5 backdrop-blur-md rounded-[4rem] border border-white/10 p-4 shadow-2xl overflow-hidden flex items-center justify-center transform lg:rotate-3 hover:rotate-0 transition-all duration-700 animate-rotate-in">
              <img src="/dacav-logo.webp" alt="DACAV Logo"
                class="w-full h-full object-cover rounded-[3.5rem] transform transition-transform duration-1000 group-hover:scale-110" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animaciones personalizadas */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes floatIn {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(30px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes rotateIn {
  from {
    opacity: 0;
    transform: rotate(-10deg) scale(0.8);
  }
  to {
    opacity: 1;
    transform: rotate(3deg) scale(1);
  }
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Clases de animación */
.animate-fade-in {
  animation: fadeIn 1.2s cubic-bezier(0.23, 1, 0.32, 1);
}

.animate-slide-up {
  animation: slideUp 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.animate-float-in {
  animation: floatIn 1s cubic-bezier(0.23, 1, 0.32, 1);
}

.animate-rotate-in {
  animation: rotateIn 1.2s cubic-bezier(0.23, 1, 0.32, 1);
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradientShift 4s ease infinite;
}

/* Respetar preferencias de movimiento reducido */
@media (prefers-reduced-motion: reduce) {
  .animate-fade-in,
  .animate-slide-up,
  .animate-float-in,
  .animate-rotate-in,
  .animate-gradient {
    animation: none;
  }
  
  .animate-fade-in,
  .animate-slide-up,
  .animate-float-in,
  .animate-rotate-in {
    opacity: 1;
    transform: none;
  }
}

/* Optimización de rendimiento */
.animate-fade-in,
.animate-slide-up,
.animate-float-in,
.animate-rotate-in {
  will-change: transform, opacity;
  backface-visibility: hidden;
}
</style>