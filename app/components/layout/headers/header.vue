<template>
  <nav class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 px-4 sm:px-6 py-3 transition-all duration-300">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      
      <NuxtLink to="/" class="flex items-center gap-3 group transition-transform duration-200 active:scale-95">
        <div class="bg-gradient-to-br from-emerald-500 to-cyan-500 text-white w-10 h-10 flex items-center justify-center rounded-xl font-black text-xl shadow-lg shadow-emerald-500/20  transition-transform">
          D
        </div>
        <div class="flex flex-col">
          <span class="text-gray-900 font-black text-xl tracking-tight leading-none group-hover:text-emerald-600 transition-colors">DACAV</span>
          <span class="text-gray-400 text-[9px] font-bold tracking-[0.2em] uppercase mt-0.5">Web Studio</span>
        </div>
      </NuxtLink>

      <div class="hidden md:flex items-center gap-2">
        <NuxtLink 
          v-for="item in navLinks" 
          :key="item.path" 
          :to="item.path"
          class="group relative py-2 px-4 text-sm font-medium transition-all duration-200"
          :class="[$route.path === item.path ? 'text-emerald-600' : 'text-gray-500 hover:text-emerald-600']"
        >
          {{ item.name }}
          <span 
            class="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full transition-all duration-300"
            :class="[$route.path === item.path ? 'w-2/3' : 'w-0 group-hover:w-2/3']"
          ></span>
        </NuxtLink>
      </div>

      <div class="hidden md:flex items-center">
        <NuxtLink 
          to="/contact" 
          class="relative overflow-hidden bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-2"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
          </svg>
          <span>Cotizar</span>
        </NuxtLink>
      </div>

      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden p-2 text-gray-600 outline-none">
        <div class="w-6 h-5 relative flex flex-col justify-between">
          <span :class="['w-full h-0.5 bg-current transition-all duration-300 transform origin-left', isMenuOpen ? 'rotate-45 translate-x-1' : '']"></span>
          <span :class="['w-full h-0.5 bg-current transition-all duration-300', isMenuOpen ? 'opacity-0' : '']"></span>
          <span :class="['w-full h-0.5 bg-current transition-all duration-300 transform origin-left', isMenuOpen ? '-rotate-45 translate-x-1' : '']"></span>
        </div>
      </button>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isMenuOpen" class="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl">
        <div class="px-6 py-6 flex flex-col gap-1">
          <NuxtLink 
            v-for="item in navLinks" 
            :key="item.path" 
            :to="item.path"
            @click="isMenuOpen = false"
            :class="['py-3 px-4 rounded-xl transition-all duration-200 font-medium', 
                    $route.path === item.path ? 'text-emerald-600 bg-emerald-50 font-bold' : 'text-gray-600 hover:bg-gray-50']"
          >
            {{ item.name }}
          </NuxtLink>
          
          <div class="mt-4 pt-4 border-t border-gray-100">
            <NuxtLink 
              to="/contact" 
              @click="isMenuOpen = false"
              class="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-center p-4 rounded-xl font-bold shadow-lg shadow-emerald-500/20 active:scale-[0.98] transition-transform block"
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
/* Transición refinada para el desenfoque */
nav {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
</style>