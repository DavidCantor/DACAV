<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 sm:px-6 lg:px-8" :class="[
    isScrolled
      ? 'bg-white py-2 shadow-lg'
      : 'bg-transparent py-4 sm:py-6'
  ]">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2 sm:gap-4 group transition-transform duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-2xl">
        <div class="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-2xl transition-transform group-hover:shadow-emerald-500/20 transform">
          <NuxtImg src="/dacav-logo.webp" alt="Logo DACAV"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            width="80"
            height="80"
            loading="eager"
            fetchpriority="high"
          />
        </div>

        <div class="flex flex-col">
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 font-black text-2xl sm:text-3xl lg:text-3xl tracking-tight leading-none transition-colors">
            DACAV
          </span>
          <span class="text-[10px] sm:text-[12px] font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase mt-0.5 sm:mt-1 transition-colors duration-500"
            :class="isScrolled ? 'text-gray-700' : 'text-white'">
            Web Studio
          </span>
        </div>
      </NuxtLink>

      <!-- Navegación desktop - CORREGIDO: los links ahora son visibles -->
      <div
        class="hidden md:flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-500 ease-in-out border"
        :class="[
          isScrolled
            ? 'bg-transparent border-transparent'
            : 'bg-white/10 backdrop-blur-sm border-white/20 shadow-sm'
        ]">
        <NuxtLink v-for="item in navLinks" :key="item.path" :to="item.path"
          class="group relative py-2 px-3 lg:px-4 text-xs lg:text-sm font-semibold transition-colors duration-500 whitespace-nowrap block" 
          :class="[
            isScrolled
              ? ($route.path === item.path ? 'text-emerald-600' : 'text-gray-600 hover:text-emerald-900')
              : ($route.path === item.path ? 'text-emerald-400' : 'text-white hover:text-emerald-400')
          ]">
          <span class="relative z-10">{{ item.name }}</span>
          <span class="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-500"
            :class="[
              $route.path === item.path ? 'w-1/2' : 'w-0 group-hover:w-1/2',
              isScrolled ? 'bg-emerald-500' : 'bg-white'
            ]"></span>
        </NuxtLink>
      </div>

      <!-- Botón Cotizar desktop -->
      <div class="hidden md:flex items-center">
        <NuxtLink to="/contact"
          class="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-5 lg:px-6 py-2 lg:py-2.5 rounded-full text-xs lg:text-sm font-bold shadow-md hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 whitespace-nowrap">
          <span>Cotizar</span>
        </NuxtLink>
      </div>

      <!-- Botón hamburguesa - CORREGIDA la X -->
      <button @click="isMenuOpen = !isMenuOpen" 
        class="md:hidden p-2 rounded-xl transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
        :class="isScrolled ? 'text-gray-600' : 'text-white bg-white/10'"
        :aria-label="isMenuOpen ? 'Cerrar menú' : 'Abrir menú'"
        :aria-expanded="isMenuOpen">
        <div class="w-6 h-5 relative flex flex-col justify-between">
          <!-- Línea superior -->
          <span 
            class="w-full h-0.5 bg-current transition-all duration-300 origin-center"
            :class="isMenuOpen ? 'rotate-45 translate-y-2.5' : ''"
          ></span>
          <!-- Línea media -->
          <span 
            class="w-full h-0.5 bg-current transition-all duration-300"
            :class="isMenuOpen ? 'opacity-0' : ''"
          ></span>
          <!-- Línea inferior -->
          <span 
            class="w-full h-0.5 bg-current transition-all duration-300 origin-center"
            :class="isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''"
          ></span>
        </div>
      </button>
    </div>

    <!-- MENÚ MÓVIL -->
    <Transition name="menu-fade">
      <div v-if="isMenuOpen"
        class="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-2xl">
        <div class="px-4 sm:px-6 py-6 sm:py-8 flex flex-col gap-1">
          <NuxtLink v-for="item in navLinks" :key="item.path" :to="item.path" @click="isMenuOpen = false"
            class="py-3 sm:py-4 px-4 rounded-xl text-gray-600 font-medium hover:bg-gray-50 transition-colors block w-full text-left"
            :class="{ 'bg-gray-50 text-emerald-600': $route.path === item.path }">
            {{ item.name }}
          </NuxtLink>
          
          <NuxtLink to="/contact" @click="isMenuOpen = false"
            class="mt-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-3 sm:py-4 px-4 rounded-xl font-bold text-center shadow-md hover:shadow-emerald-500/30 transition-all duration-300 block w-full">
            Cotizar
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 30
}

// Cerrar menú al cambiar de ruta
watch(() => route.path, () => {
  isMenuOpen.value = false
})

// Cerrar menú con tecla Escape
const handleEscape = (event) => {
  if (event.key === 'Escape' && isMenuOpen.value) {
    isMenuOpen.value = false
  }
}

// Prevenir scroll cuando el menú está abierto
watch(isMenuOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = ''
})

const navLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Servicios', path: '/services' },
  { name: 'Casos de éxito', path: '/results' },
  { name: 'Nosotros', path: '/about' },
  { name: 'Contacto', path: '/contact' }
]
</script>

<style scoped>
.transition-all {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: all 0.3s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Ajuste para pantallas muy pequeñas */
@media (max-width: 360px) {
  .group .text-2xl {
    font-size: 1.25rem;
  }
  .group .text-\[10px\] {
    font-size: 8px;
    letter-spacing: 0.15em;
  }
}
</style>