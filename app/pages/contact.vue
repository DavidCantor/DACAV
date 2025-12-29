<template>
  <div class="bg-white min-h-screen font-sans text-gray-900">
    
    <!-- Hero Section con imagen -->
    <section class="relative py-44 px-4 sm:px-6 overflow-hidden">
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

        <!-- Formulario - Rediseñado -->
    <section class="py-20 px-4 sm:px-6">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        <!-- Formulario simplificado -->
        <div class="lg:col-span-7">
          <div class="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 md:p-10">
            <!-- Encabezado más limpio -->
            <div class="text-center mb-10">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl mb-6 mx-auto shadow-lg shadow-emerald-500/30">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h2 class="text-gray-900 text-2xl font-bold mb-3">Inicia tu proyecto</h2>
              <p class="text-gray-600">Completa este formulario y te contactaremos en menos de 24 horas</p>
            </div>
            
            <form @submit.prevent="submitForm" class="space-y-6" >
              <!-- Campos del formulario -->
              <div class="space-y-6">
                <!-- Nombre y Email -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-gray-700 text-sm font-medium mb-2">Nombre completo</label>
                    <input 
                      type="text" 
                      placeholder="Tu nombre"
                      v-model="formData.name"
                      required
                      class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors placeholder-gray-400"
                    />
                  </div>
                  
                  <div>
                    <label class="block text-gray-700 text-sm font-medium mb-2">Correo electrónico</label>
                    <input 
                      type="email" 
                      placeholder="tu@email.com"
                      v-model="formData.email"
                      required
                      class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors placeholder-gray-400"
                    />
                  </div>
                </div>
                
                <!-- Negocio y Tipo de Proyecto -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-gray-700 text-sm font-medium mb-2">Nombre del negocio</label>
                    <input 
                      type="text" 
                      placeholder="Empresa o marca"
                      v-model="formData.business"
                      class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors placeholder-gray-400"
                    />
                  </div>
                  
                  <div>
                    <label class="block text-gray-700 text-sm font-medium mb-2">Tipo de proyecto</label>
                    <select 
                      v-model="formData.projectType"
                      class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors appearance-none"
                    >
                      <option value="" disabled selected>¿Qué necesitas?</option>
                      <option value="corporate">Sitio web corporativo</option>
                      <option value="landing">Landing page</option>
                      <option value="system">Sistema web</option>
                      <option value="other">Otro servicio</option>
                    </select>
                  </div>
                </div>
                
                <!-- Mensaje -->
                <div>
                  <label class="block text-gray-700 text-sm font-medium mb-2">Cuéntanos sobre tu proyecto</label>
                  <textarea 
                    rows="4"
                    placeholder="¿Qué objetivos tienes? ¿Cuál es tu visión?"
                    v-model="formData.message"
                    required
                    class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none placeholder-gray-400"
                  ></textarea>
                </div>
              </div>
              
              <!-- Botón de envío -->
              <div class="pt-4">
                <button 
                  type="submit"
                  :disabled="loading"
                  :class="['w-full bg-emerald-600 text-white py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-300 flex items-center justify-center gap-2',
                           loading ? 'opacity-70 cursor-not-allowed' : '']"
                >
                  <span v-if="loading">
                    <svg class="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                  <span v-else class="flex items-center gap-2">
                    Enviar solicitud
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </button>
                
                <!-- Nota de privacidad -->
                <p class="mt-4 text-center text-gray-500 text-xs">
                  Tus datos están seguros. No compartimos información con terceros.
                </p>
              </div>
            </form>
            <!-- Mensaje de éxito -->
<Transition
  enter-active-class="transition duration-300 ease-out"
  enter-from-class="opacity-0 translate-y-2"
  enter-to-class="opacity-100 translate-y-0"
  leave-active-class="transition duration-200 ease-in"
  leave-from-class="opacity-100 translate-y-0"
  leave-to-class="opacity-0 translate-y-2"
>
  <div v-if="showSuccessMessage" class="fixed top-6 right-6 z-50 max-w-sm">
    <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4 shadow-lg">
      <div class="flex items-start gap-3">
        <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
          <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <div class="flex-1">
          <p class="text-emerald-800 font-medium">¡Mensaje enviado con éxito!</p>
          <p class="text-emerald-600 text-sm mt-1">Te contactaremos en menos de 48 horas.</p>
        </div>
        <button @click="closeSuccessMessage" class="text-emerald-400 hover:text-emerald-600 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</Transition>

<!-- Mensaje de error -->
<Transition
  enter-active-class="transition duration-300 ease-out"
  enter-from-class="opacity-0 translate-y-2"
  enter-to-class="opacity-100 translate-y-0"
  leave-active-class="transition duration-200 ease-in"
  leave-from-class="opacity-100 translate-y-0"
  leave-to-class="opacity-0 translate-y-2"
>
  <div v-if="submitError" class="fixed top-6 right-6 z-50 max-w-sm">
    <div class="bg-red-50 border border-red-200 rounded-xl p-4 shadow-lg">
      <div class="flex items-start gap-3">
        <div class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
          <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </div>
        <div class="flex-1">
          <p class="text-red-800 font-medium">Error al enviar</p>
          <p class="text-red-600 text-sm mt-1">{{ submitError }}</p>
        </div>
        <button @click="clearError" class="text-red-400 hover:text-red-600 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</Transition>
          </div>
        </div>
        
        <!-- Información lateral (sin cambios) -->
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
          
          <!-- Canales directos -->
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
        </div>
      </div>
    </section>

        <!-- Sección de Ubicación - Rediseña -->
    <section class="py-20 px-4 sm:px-6 bg-white">
      <div class="max-w-5xl mx-auto">
        
        <!-- Encabezado simple -->
        <div class="text-center mb-14">
          <div class="inline-flex items-center gap-2 px-5 py-2 bg-emerald-50 rounded-full text-emerald-700 text-sm font-medium mb-6">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            Alcance Global
          </div>
          <h2 class="text-gray-900 text-3xl font-bold tracking-tight mb-4">Ubicación y Cobertura</h2>
          <p class="text-gray-600 max-w-xl mx-auto">Trabajamos completamente de forma remota, conectando con clientes en cualquier parte del mundo</p>
        </div>

        <!-- Card principal -->
        <div class="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl p-8 md:p-10 shadow-lg">
          
          <!-- Información de ubicación -->
          <div class="flex flex-col md:flex-row items-center gap-8 mb-10">
            <!-- Icono de ubicación -->
            <div class="w-24 h-24 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
              <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
              </svg>
            </div>
            
            <!-- Detalles de ubicación -->
            <div class="text-center md:text-left">
              <h3 class="text-gray-900 text-2xl font-bold mb-3">Sin importar tu ubicación, construimos juntos</h3>
              <p class="text-gray-600 mb-4">Nuestra base operativa está en Colombia, pero nuestro alcance es completamente global gracias al trabajo remoto.</p>
              <div class="inline-flex items-center gap-2 text-emerald-600 font-medium">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
                Proyectos internacionales vía remota
              </div>
            </div>
          </div>

          <!-- Ventajas del trabajo remoto -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Ventaja 1 -->
            <div class="bg-white border border-gray-100 rounded-xl p-6 hover:border-emerald-200 transition-colors">
              <div class="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 text-xl mb-4">
                🌎
              </div>
              <h4 class="text-gray-900 font-bold mb-2">Sin Fronteras</h4>
              <p class="text-gray-500 text-sm">Trabajamos con clientes en cualquier país, sin limitaciones geográficas.</p>
            </div>

            <!-- Ventaja 2 -->
            <div class="bg-white border border-gray-100 rounded-xl p-6 hover:border-emerald-200 transition-colors">
              <div class="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 text-xl mb-4">
                ⏰
              </div>
              <h4 class="text-gray-900 font-bold mb-2">Horario Flexible</h4>
              <p class="text-gray-500 text-sm">Nos adaptamos a tu zona horaria para coordinaciones eficientes.</p>
            </div>

            <!-- Ventaja 3 -->
            <div class="bg-white border border-gray-100 rounded-xl p-6 hover:border-emerald-200 transition-colors">
              <div class="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 text-xl mb-4">
                💬
              </div>
              <h4 class="text-gray-900 font-bold mb-2">Comunicación Efectiva</h4>
              <p class="text-gray-500 text-sm">Herramientas modernas para comunicación clara y constante.</p>
            </div>
          </div>

          <!-- Nota adicional -->
          <div class="mt-10 pt-8 border-t border-gray-100 text-center">
            <p class="text-gray-500 text-sm">
              <span class="font-medium text-gray-700">Modalidad 100% remota</span> • Sin desplazamientos • Sin costos adicionales por ubicación
            </p>
          </div>

        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'

// Estados del formulario
const loading = ref(false)
const submitSuccess = ref(false)
const submitError = ref(null)
const showSuccessMessage = ref(false)

// Datos del formulario
const formData = ref({
  name: '',
  email: '',
  business: '',
  projectType: '',
  message: ''
})

// Datos estáticos
const steps = [
  'Revisamos tu requerimiento en menos de 48 horas.',
  'Analizamos la viabilidad técnica y objetivos.',
  'Agendamos una breve sesión de consultoría inicial.',
  'Iniciamos el desarrollo bajo un cronograma preciso.'
]

const socialLinks = [
  { label: 'Email Estratégico', value: 'dsantiagocanvar@gmail.com', icon: '✉️', url: 'mailto:dacav.contacto@gmail.com' },
  { label: 'WhatsApp Directo', value: '+57 319 383 1573', icon: '💬', url: 'https://wa.me/573193831573' },
  { label: 'GitHub & Repos', value: 'github.com/DavidCantor', icon: '👨‍💻', url: 'https://github.com/DavidCantor' }
]

// Método para enviar formulario
const submitForm = async () => {
  // Resetear estados previos
  submitSuccess.value = false
  submitError.value = null
  showSuccessMessage.value = false

  // 1. Validación básica
  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    submitError.value = 'Por favor completa los campos requeridos: nombre, email y mensaje'
    return
  }

  // Validar formato de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.value.email)) {
    submitError.value = 'Por favor ingresa un email válido'
    return
  }

  // Validar longitud mínima del mensaje
  if (formData.value.message.trim().length < 10) {
    submitError.value = 'Por favor escribe un mensaje más detallado (mínimo 10 caracteres)'
    return
  }

  // 2. Mostrar estado de carga
  loading.value = true

  try {
    // 3. Enviar datos a Formspree
    const response = await fetch('https://formspree.io/f/xdaoygld', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.value.name,
        email: formData.value.email,
        business: formData.value.business || 'No especificado',
        projectType: formData.value.projectType || 'No especificado',
        message: formData.value.message,
        _subject: `Nuevo contacto DACAV - ${formData.value.business || formData.value.name}`,
        _replyto: formData.value.email
      })
    })

    // 4. Manejar respuesta
    if (response.ok) {
      // Éxito
      submitSuccess.value = true
      showSuccessMessage.value = true
      
      // Resetear formulario
      formData.value = {
        name: '',
        email: '',
        business: '',
        projectType: '',
        message: ''
      }
      
      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        showSuccessMessage.value = false
      }, 5000)
      
    } else {
      // Error del servidor
      const errorData = await response.json()
      throw new Error(errorData.error || 'Error al enviar el formulario')
    }

  } catch (error) {
    // 5. Manejar errores
    console.error('Error enviando formulario:', error)
    
    // Determinar tipo de error
    if (error.message.includes('Failed to fetch')) {
      submitError.value = 'Error de conexión. Por favor verifica tu internet e intenta nuevamente.'
    } else if (error.message.includes('rate limit') || error.message.includes('too many requests')) {
      submitError.value = 'Demasiados intentos. Por favor espera unos minutos antes de intentar nuevamente.'
    } else {
      submitError.value = 'Hubo un error al enviar tu mensaje. Por favor intenta nuevamente o contáctanos directamente por email.'
    }
    
  } finally {
    // 6. Quitar estado de carga (siempre se ejecuta)
    loading.value = false
  }
}

// Método para limpiar errores
const clearError = () => {
  submitError.value = null
}

// Método para cerrar mensaje de éxito manualmente
const closeSuccessMessage = () => {
  showSuccessMessage.value = false
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