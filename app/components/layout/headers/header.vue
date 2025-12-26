<template>
  <nav class="sticky top-0 z-50 bg-[#FFF]/80 backdrop-blur-xl border-b border-gray-100 px-6 py-4">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      
      <NuxtLink to="/" class="flex items-center gap-3 group">
        <div class="bg-[#022326] text-[#FFF] w-10 h-10 flex items-center justify-center rounded-xl font-black text-xl transition-all group-hover:bg-[#02735E] group-hover:rotate-3 shadow-lg shadow-[#022326]/10">
          D
        </div>
        <span class="text-[#022326] font-black text-2xl tracking-tighter italic transition-colors group-hover:text-[#02735E]">DACAV</span>
      </NuxtLink>

      <div class="hidden md:flex items-center gap-10">
        <NuxtLink 
          v-for="item in navLinks" 
          :key="item.path" 
          :to="item.path"
          class="nav-link text-[#034040]/70 hover:text-[#02735E] font-bold text-[11px] uppercase tracking-[0.2em] transition-all relative py-2"
        >
          {{ item.name }}
        </NuxtLink>
      </div>

      <div class="hidden md:block">
        <NuxtLink 
          to="/contact" 
          class="bg-[#022326] text-white px-7 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.2em] hover:bg-[#02735E] hover:shadow-xl hover:shadow-[#02735E]/20 transition-all active:scale-95 inline-block"
        >
          Cotizar
        </NuxtLink>
      </div>

      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-[#022326] p-2 hover:bg-gray-100 rounded-lg transition-colors">
        <div class="w-6 h-5 relative flex flex-col justify-between">
          <span :class="['w-full h-0.5 bg-current transition-all', isMenuOpen ? 'rotate-45 translate-y-2' : '']"></span>
          <span :class="['w-full h-0.5 bg-current transition-all', isMenuOpen ? 'opacity-0' : '']"></span>
          <span :class="['w-full h-0.5 bg-current transition-all', isMenuOpen ? '-rotate-45 -translate-y-2' : '']"></span>
        </div>
      </button>
    </div>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-10"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-10"
    >
      <div v-if="isMenuOpen" class="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 px-8 py-12 flex flex-col gap-8 shadow-2xl">
        <NuxtLink 
          v-for="item in navLinks" 
          :key="item.path" 
          :to="item.path"
          @click="isMenuOpen = false"
          class="text-[#022326] font-black text-2xl uppercase tracking-tighter border-l-4 border-transparent hover:border-[#02735E] pl-6 transition-all"
        >
          {{ item.name }}
        </NuxtLink>
        <NuxtLink 
          to="/contact" 
          @click="isMenuOpen = false"
          class="bg-[#02735E] text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-[#02735E]/20"
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
/* Línea de hover refinada */
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #02735E;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 60%;
}

.nav-link.router-link-active {
  color: #02735E !important;
  opacity: 1;
}
</style>