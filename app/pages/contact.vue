<template>
  <div class="bg-white min-h-screen font-sans text-gray-900">
    
    <!-- Hero Section con imagen -->
    <section class="relative py-24 px-4 sm:px-6 overflow-hidden">
      <!-- Imagen de fondo hero -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-emerald-900/85"></div>
        <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80')] bg-cover bg-center opacity-30"></div>
      </div>
      
      <div class="max-w-7xl mx-auto text-center relative z-10 space-y-8">
        <div class="inline-flex items-center gap-3 px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-semibold uppercase tracking-wider">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Conectemos
        </div>
        
        <h1 class="text-white text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-none">
          Hablemos de tu <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">visión.</span>
        </h1>
        <p class="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Si tienes una idea, necesitas una página web profesional o quieres escalar tu infraestructura actual, completa el formulario y diseñemos una solución.
        </p>
      </div>
    </section>

    <!-- Formulario y Información -->
    <section class="py-20 px-4 sm:px-6">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        <!-- Formulario con imagen de fondo sutil -->
        <div class="lg:col-span-7 relative">
          <div class="bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-2xl shadow-gray-200/30 relative overflow-hidden">
            <!-- Imagen de fondo sutil para el formulario -->
            <div class="absolute inset-0 opacity-5">
              <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')] bg-cover bg-center"></div>
            </div>
            
            <div class="relative z-10">
              <div class="flex items-center gap-4 mb-10">
                <div class="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg shadow-emerald-500/30">
                  📝
                </div>
                <h2 class="text-gray-900 text-lg font-bold uppercase tracking-wider">Brief de Contacto</h2>
              </div>
              
              <form @submit.prevent="submitForm" class="space-y-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div class="group">
                    <label class="block text-gray-700 text-sm font-semibold uppercase mb-3 tracking-wider group-focus-within:text-emerald-600 transition-colors">Nombre completo</label>
                    <input type="text" placeholder="Ej. Juan Pérez" 
                           v-model="formData.name"
                           class="w-full bg-gray-50 border-2 border-gray-200 p-4 text-gray-900 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all placeholder-gray-400">
                  </div>

                  <div class="group">
                    <label class="block text-gray-700 text-sm font-semibold uppercase mb-3 tracking-wider group-focus-within:text-emerald-600 transition-colors">Correo electrónico</label>
                    <input type="email" placeholder="correo@ejemplo.com"
                           v-model="formData.email"
                           class="w-full bg-gray-50 border-2 border-gray-200 p-4 text-gray-900 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all placeholder-gray-400">
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div class="group">
                    <label class="block text-gray-700 text-sm font-semibold uppercase mb-3 tracking-wider group-focus-within:text-emerald-600 transition-colors">Nombre del negocio</label>
                    <input type="text" placeholder="Empresa o marca"
                           v-model="formData.business"
                           class="w-full bg-gray-50 border-2 border-gray-200 p-4 text-gray-900 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all placeholder-gray-400">
                  </div>

                  <div class="group">
                    <label class="block text-gray-700 text-sm font-semibold uppercase mb-3 tracking-wider group-focus-within:text-emerald-600 transition-colors">Tipo de proyecto</label>
                    <div class="relative">
                      <select v-model="formData.projectType"
                              class="w-full bg-gray-50 border-2 border-gray-200 p-4 text-gray-900 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all appearance-none cursor-pointer">
                        <option value="" disabled selected>Selecciona una opción</option>
                        <option value="corporate">Sitio web corporativo</option>
                        <option value="landing">Página de destino (Landing Page)</option>
                        <option value="system">Sistema web (CRUD/Admin)</option>
                        <option value="other">Otro servicio técnico</option>
                      </select>
                      <span class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</span>
                    </div>
                  </div>
                </div>

                <div class="group">
                  <label class="block text-gray-700 text-sm font-semibold uppercase mb-3 tracking-wider group-focus-within:text-emerald-600 transition-colors">Mensaje</label>
                  <textarea rows="5" placeholder="¿Qué objetivos quieres alcanzar? ¿Cuál es tu visión para este proyecto?"
                            v-model="formData.message"
                            class="w-full bg-gray-50 border-2 border-gray-200 p-4 text-gray-900 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all resize-none placeholder-gray-400"></textarea>
                </div>

                <button type="submit" 
                        :disabled="loading"
                        :class="['w-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white py-4 rounded-xl font-bold text-sm uppercase tracking-wider hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 inline-flex items-center justify-center gap-2',
                                 loading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02]']">
                  <span v-if="loading">
                    <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                  <span v-else class="flex items-center gap-2">
                    Enviar mensaje
                    <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </button>
              </form>

              <p class="mt-10 text-xs text-gray-500 text-center">
                <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
                Privacidad garantizada. Datos procesados únicamente para fines de consultoría técnica.
              </p>
            </div>
          </div>
        </div>

        <!-- Información lateral -->
        <div class="lg:col-span-5 space-y-12">
          
          <!-- Proceso -->
          <div class="relative">
            <h2 class="text-gray-900 text-2xl font-bold mb-8 tracking-tight">¿Qué pasa después?</h2>
            <div class="space-y-8 relative before:absolute before:left-4 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-emerald-200 before:to-cyan-200">
              <div v-for="(item, index) in steps" :key="index" class="flex gap-6 items-start relative group">
                <span class="bg-white border-2 border-emerald-500 text-emerald-600 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 z-10 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-md">
                  {{ index + 1 }}
                </span>
                <p class="text-gray-600 text-base leading-relaxed pt-1 group-hover:text-gray-900 transition-colors">{{ item }}</p>
              </div>
            </div>
          </div>

          <!-- Canales directos con imágenes -->
          <div class="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-200 space-y-8 shadow-lg">
            <h3 class="text-emerald-600 font-bold uppercase text-sm tracking-wider">Canales Directos</h3>
            
            <div class="space-y-6">
              <a v-for="link in socialLinks" :key="link.label" :href="link.url" target="_blank" class="flex items-center gap-5 group p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
                <div class="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
                  {{ link.icon }}
                </div>
                <div class="flex-1">
                  <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{{ link.label }}</p>
                  <p class="text-gray-900 font-semibold group-hover:text-emerald-600 transition-colors break-all">{{ link.value }}</p>
                </div>
                <svg class="w-5 h-5 text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>

          <!-- Compromiso con imagen -->
          <div class="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl relative overflow-hidden">
            <!-- Imagen de fondo compromiso -->
            <div class="absolute inset-0 opacity-10">
              <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
            </div>
            
            <div class="relative z-10 space-y-6">
              <div class="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg shadow-emerald-500/30">
                🤝
              </div>
              <h3 class="text-white text-xl font-bold">Compromiso DACAV</h3>
              <p class="text-gray-300 leading-relaxed">
                Estás a un paso de trabajar con un desarrollador que prioriza la <span class="text-emerald-400 font-semibold">escalabilidad</span> y el <span class="text-emerald-400 font-semibold">rendimiento</span>. Sin intermediarios, sin sorpresas.
              </p>
              
              <div class="flex items-center gap-4 pt-4">
                <div class="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">✓</div>
                <span class="text-gray-300 text-sm">Respuesta en 24 horas</span>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">✓</div>
                <span class="text-gray-300 text-sm">Análisis técnico detallado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mapa de ubicación -->
    <section class="py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-gray-900 text-3xl font-bold tracking-tight mb-4">Ubicación y Alcance</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Trabajamos de forma remota con alcance internacional</p>
        </div>
        
        <div class="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
          <!-- Mapa visual con imagen -->
          <div class="relative h-64 bg-gradient-to-br from-emerald-50 to-cyan-50 overflow-hidden">
            <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
            
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center space-y-4 relative z-10">
                <div class="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                  <svg class="w-10 h-10 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-gray-900 font-bold text-lg">Colombia</p>
                  <p class="text-gray-600">Base operativa • Trabajo remoto</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="p-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="text-center">
                <div class="text-emerald-600 text-2xl font-bold">🌎</div>
                <h4 class="text-gray-900 font-bold mt-2">Alcance Global</h4>
                <p class="text-gray-600 text-sm mt-2">Proyectos internacionales vía remota</p>
              </div>
              <div class="text-center">
                <div class="text-emerald-600 text-2xl font-bold">⏰</div>
                <h4 class="text-gray-900 font-bold mt-2">Horario Flexible</h4>
                <p class="text-gray-600 text-sm mt-2">Adaptado a tu zona horaria</p>
              </div>
              <div class="text-center">
                <div class="text-emerald-600 text-2xl font-bold">💬</div>
                <h4 class="text-gray-900 font-bold mt-2">Comunicación Clara</h4>
                <p class="text-gray-600 text-sm mt-2">Reuniones virtuales cuando sea necesario</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(false)
const formData = ref({
  name: '',
  email: '',
  business: '',
  projectType: '',
  message: ''
})

const steps = [
  'Revisamos tu requerimiento en menos de 24 horas.',
  'Analizamos la viabilidad técnica y objetivos.',
  'Agendamos una breve sesión de consultoría inicial.',
  'Iniciamos el desarrollo bajo un cronograma preciso.'
]

const socialLinks = [
  { label: 'Email Estratégico', value: 'dacav.contacto@gmail.com', icon: '✉️', url: 'mailto:dacav.contacto@gmail.com' },
  { label: 'WhatsApp Directo', value: '+57 319 383 1573', icon: '💬', url: 'https://wa.me/573193831573' },
  { label: 'GitHub & Repos', value: 'github.com/DavidCantor', icon: '👨‍💻', url: 'https://github.com/DavidCantor' }
]

const submitForm = async () => {
  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    alert('Por favor completa los campos requeridos')
    return
  }
  
  loading.value = true
  
  // Simular envío del formulario
  setTimeout(() => {
    loading.value = false
    alert('¡Mensaje enviado! Te contactaremos en menos de 24 horas.')
    
    // Resetear formulario
    formData.value = {
      name: '',
      email: '',
      business: '',
      projectType: '',
      message: ''
    }
  }, 1500)
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

html {
  font-family: 'Inter', sans-serif;
  scroll-behavior: smooth;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Efectos de selección */
::selection {
  background: linear-gradient(135deg, #10b981, #06b6d4);
  color: white;
}

/* Animación de carga */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* Placeholder styling */
input::placeholder, textarea::placeholder, select::placeholder {
  color: #9CA3AF;
  font-size: 14px;
}

/* Focus styles */
input:focus, textarea:focus, select:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #10b981, #06b6d4);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #0da271, #0591b3);
}
</style>