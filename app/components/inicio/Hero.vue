<template>
  <section class="relative min-h-screen flex items-center px-4 sm:px-6 pt-16 overflow-hidden py-6 bg-[#020406]">
    <div class="absolute inset-0 z-0 animate-fade-in">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-emerald-900/85"></div>
      <div class="absolute inset-0 bg-[url('/images/inicio/hero.webp')] bg-cover bg-center opacity-40"></div>
    </div>

    <div class="max-w-7xl mx-auto w-full relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div class="space-y-8 text-center lg:text-left order-2 lg:order-1">
          <div class="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold uppercase tracking-wider animate-slide-up"
            style="animation-delay: 0.2s; animation-fill-mode: both;">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            Estudio de Desarrollo Web
          </div>

          <h1 class="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight animate-slide-up"
            style="animation-delay: 0.4s; animation-fill-mode: both;">
            Impulsa tu negocio <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 animate-gradient-text">
              con una web profesional
            </span>
          </h1>

          <p class="text-white/90 text-xl md:text-2xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light animate-slide-up"
            style="animation-delay: 0.6s; animation-fill-mode: both;">
            Landing pages, sitios corporativos y optimización SEO 
            <span class="text-white font-semibold">para emprendedores y negocios que quieren crecer.</span>
          </p>

          <div class="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-6 animate-slide-up"
            style="animation-delay: 0.8s; animation-fill-mode: both;">
            <NuxtLink to="/contact"
              class="group relative bg-emerald-500 text-black px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:scale-105 text-center">
              Solicitar cotización
            </NuxtLink>
            <NuxtLink to="/projects"
              class="px-10 py-5 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all hover:-translate-y-1 text-center">
              Ver proyectos
            </NuxtLink>
          </div>
        </div>

        <div class="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div class="relative group animate-hero-entrance" style="animation-delay: 0.5s; animation-fill-mode: both;">
            
            
            <div class="relative animate-float-infinite">
              <div class="w-72 h-72 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] bg-white/5 backdrop-blur-xl rounded-[4rem] border border-white/10 p-3 shadow-2xl overflow-hidden transform lg:rotate-3 group-hover:rotate-0 transition-all duration-1000 ease-out">
                <img 
                  src="/dacav-logo.webp" 
                  alt="DACAV Logo"
                  class="w-full h-full object-cover rounded-[3.5rem] transform transition-transform duration-1000 group-hover:scale-105" 
                />
                
                <div class="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>

      
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* --- ANIMACIONES DE ENTRADA --- */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Entrada triunfal para la imagen */
@keyframes heroEntrance {
  from {
    opacity: 0;
    transform: scale(0.8) rotate(-5deg) translateY(50px);
    filter: blur(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg) translateY(0);
    filter: blur(0);
  }
}

/* --- ANIMACIONES CONTINUAS --- */
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-20px) rotate(1deg); }
}

@keyframes floatDelayed {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@keyframes pulseSlow {
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(1.1); }
}

@keyframes gradientText {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* --- ASIGNACIÓN DE CLASES --- */
.animate-fade-in { animation: fadeIn 1.5s ease-out forwards; }
.animate-slide-up { animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

.animate-hero-entrance {
  animation: heroEntrance 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-float-infinite {
  animation: float 6s ease-in-out infinite;
}

.animate-float-infinite-delayed {
  animation: floatDelayed 5s ease-in-out infinite 1s;
}

.animate-pulse-slow {
  animation: pulseSlow 4s ease-in-out infinite;
}

.animate-gradient-text {
  background-size: 200% auto;
  animation: gradientText 4s linear infinite;
}

/* Optimizaciones */
.animate-hero-entrance, .animate-float-infinite {
  will-change: transform, opacity;
  backface-visibility: hidden;
}

/* Media query para movimiento reducido */
@media (prefers-reduced-motion: reduce) {
  .animate-float-infinite, .animate-float-infinite-delayed, .animate-pulse-slow {
    animation: none !important;
  }
}
</style>