<template>
  <nav class="sticky top-0 z-50 bg-[#F2F2F2]/90 backdrop-blur-md border-b border-[#D7D7D9] px-6 py-4">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      
      <NuxtLink to="/" class="flex items-center gap-2 group">
        <div class="bg-[#404040] text-[#F2F2F2] w-10 h-10 flex items-center justify-center rounded-sm font-black text-xl transition-transform group-hover:scale-105">
          D
        </div>
        <span class="text-[#404040] font-black text-2xl tracking-tighter">DACAV</span>
      </NuxtLink>

      <div class="hidden md:flex items-center gap-8">
        <NuxtLink 
          v-for="item in navLinks" 
          :key="item.path" 
          :to="item.path"
          class="nav-link text-[#595959] hover:text-[#404040] font-medium text-sm uppercase tracking-widest transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#404040] hover:after:w-full after:transition-all"
        >
          {{ item.name }}
        </NuxtLink>
      </div>

      <div class="hidden md:block">
        <NuxtLink 
          to="/contact" 
          class="cta-button bg-[#404040] text-[#F2F2F2] !text-[#F2F2F2] px-5 py-2 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-[#595959] transition-colors"
        >
          Cotizar
        </NuxtLink>
      </div>

      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-[#404040] p-2">
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isMenuOpen" class="md:hidden absolute top-full left-0 w-full bg-[#F2F2F2] border-b border-[#D7D7D9] px-6 py-8 flex flex-col gap-6 shadow-xl">
        <NuxtLink 
          v-for="item in navLinks" 
          :key="item.path" 
          :to="item.path"
          @click="isMenuOpen = false"
          class="text-[#404040] font-bold text-xl uppercase tracking-widest border-l-4 border-transparent hover:border-[#B0B7BF] pl-4 transition-all"
        >
          {{ item.name }}
        </NuxtLink>
        <NuxtLink 
          to="/contact" 
          @click="isMenuOpen = false"
          class="bg-[#404040] text-[#F2F2F2] text-center py-4 rounded-sm font-black uppercase tracking-widest"
        >
          Solicitar Cotización
        </NuxtLink>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

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
/* Solo aplicamos el estilo de "activo" a los links normales, no al botón */
.nav-link.router-link-active {
  color: #404040 !important;
  font-weight: 800;
}

/* Forzamos que el botón siempre mantenga su color de texto original */
.cta-button {
  color: #F2F2F2 !important;
}
</style>