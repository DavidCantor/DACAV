<template>
  <nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100 px-4 sm:px-6 py-3">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3 group">
        <div class="bg-gradient-to-br from-emerald-500 to-cyan-500 text-white w-10 h-10 flex items-center justify-center rounded-xl font-black text-xl shadow-md shadow-emerald-500/20">
          D
        </div>
        <div class="flex flex-col">
          <span class="text-gray-900 font-black text-xl tracking-tight">DACAV</span>
          <span class="text-gray-500 text-[9px] font-medium tracking-widest uppercase">WEB STUDIO</span>
        </div>
      </NuxtLink>

      <!-- Navegación Desktop -->
      <div class="hidden md:flex items-center gap-8">
        <NuxtLink 
          v-for="item in navLinks" 
          :key="item.path" 
          :to="item.path"
          :class="['text-gray-600 hover:text-emerald-600 font-medium text-sm transition-colors duration-200 relative py-2 px-1', 
                  $route.path === item.path ? 'text-emerald-600 font-semibold' : '']"
        >
          {{ item.name }}
          <span v-if="$route.path === item.path" class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"></span>
          <span v-else class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
        </NuxtLink>
      </div>

      <!-- Botones Desktop -->
      <div class="hidden md:flex items-center gap-4">
        <NuxtLink 
          to="/contact" 
          class="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-md hover:shadow-emerald-500/30 transition-all duration-200 inline-flex items-center gap-2"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
          </svg>
          Cotizar
        </NuxtLink>
      </div>

      <!-- Botón Menú Móvil -->
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden p-2">
        <div class="w-6 h-5 relative flex flex-col justify-between">
          <span :class="['w-full h-0.5 bg-gray-700 transition-all duration-300', isMenuOpen ? 'rotate-45 translate-y-2' : '']"></span>
          <span :class="['w-full h-0.5 bg-gray-700 transition-all duration-300', isMenuOpen ? 'opacity-0' : '']"></span>
          <span :class="['w-full h-0.5 bg-gray-700 transition-all duration-300', isMenuOpen ? '-rotate-45 -translate-y-2' : '']"></span>
        </div>
      </button>
    </div>

    <!-- Menú Móvil - Versión Simplificada -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isMenuOpen" class="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg">
        <div class="px-6 py-6 flex flex-col gap-1">
          <NuxtLink 
            v-for="item in navLinks" 
            :key="item.path" 
            :to="item.path"
            @click="isMenuOpen = false"
            :class="['py-3 px-4 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium',
                    $route.path === item.path ? 'text-emerald-600 bg-emerald-50 font-semibold' : '']"
          >
            {{ item.name }}
          </NuxtLink>
          
          <div class="mt-4 pt-4 border-t border-gray-100">
            <NuxtLink 
              to="/contact" 
              @click="isMenuOpen = false"
              class="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-center p-3 rounded-lg font-semibold shadow-md shadow-emerald-500/20"
            >
              Solicitar Cotización
            </NuxtLink>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)

const navLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Servicios', path: '/services' },
  { name: 'Proyectos', path: '/projects' },
  { name: 'Nosotros', path: '/about' },
  { name: 'Contacto', path: '/contact' }
]
</script>

<style scoped>
/* Efecto simple para enlaces hover - sin parpadeos */
nav a:not(.router-link-active):hover {
  position: relative;
  color: #059669; /* emerald-600 */
}

/* Estilo para enlace activo */
.router-link-active {
  position: relative;
}

/* Removido todos los efectos complejos que causaban parpadeo */
nav {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* Transición suave para el menú móvil */
.mobile-enter-active,
.mobile-leave-active {
  transition: opacity 0.2s ease;
}
</style>