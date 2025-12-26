<template>
  <div class="bg-white min-h-screen font-sans text-[#022326] selection:bg-[#02735E] selection:text-white">
    
    <section class="py-24 px-6 bg-[#022326] text-white relative overflow-hidden">
      <div class="absolute top-0 right-0 w-1/3 h-full bg-[#02735E] blur-[150px] opacity-20"></div>
      
      <div class="max-w-7xl mx-auto text-center relative z-10 space-y-6">
        <h1 class="text-5xl md:text-8xl font-black mb-6 italic tracking-tighter leading-none">
          Hablemos de tu <span class="text-[#02735E] not-italic">visión.</span>
        </h1>
        <p class="text-white/60 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
          Si tienes una idea, necesitas una página web profesional o quieres escalar tu infraestructura actual, completa el formulario y diseñemos una solución.
        </p>
      </div>
    </section>

    <section class="py-32 px-6">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
        
        <div class="lg:col-span-7 bg-white p-8 md:p-16 rounded-[40px] border border-gray-100 shadow-2xl shadow-gray-200/50">
          <div class="flex items-center gap-4 mb-12">
            <div class="w-12 h-12 bg-[#F9F9F9] rounded-2xl flex items-center justify-center text-xl">🧾</div>
            <h2 class="text-[#022326] text-sm font-black uppercase tracking-[0.4em]">Brief de contacto</h2>
          </div>
          
          <form @submit.prevent class="space-y-10">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div class="group">
                <label class="block text-[#022326] text-[10px] font-black uppercase mb-3 tracking-widest group-focus-within:text-[#02735E] transition-colors">Nombre completo</label>
                <input type="text" placeholder="Ej. Juan Pérez" class="w-full bg-[#F9F9F9] border-b-2 border-gray-100 p-4 text-[#022326] focus:outline-none focus:border-[#02735E] transition-all rounded-t-xl">
              </div>

              <div class="group">
                <label class="block text-[#022326] text-[10px] font-black uppercase mb-3 tracking-widest group-focus-within:text-[#02735E] transition-colors">Correo electrónico</label>
                <input type="email" placeholder="correo@ejemplo.com" class="w-full bg-[#F9F9F9] border-b-2 border-gray-100 p-4 text-[#022326] focus:outline-none focus:border-[#02735E] transition-all rounded-t-xl">
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div class="group">
                <label class="block text-[#022326] text-[10px] font-black uppercase mb-3 tracking-widest group-focus-within:text-[#02735E] transition-colors">Nombre del negocio</label>
                <input type="text" placeholder="Empresa o marca" class="w-full bg-[#F9F9F9] border-b-2 border-gray-100 p-4 text-[#022326] focus:outline-none focus:border-[#02735E] transition-all rounded-t-xl">
              </div>

              <div class="group">
                <label class="block text-[#022326] text-[10px] font-black uppercase mb-3 tracking-widest group-focus-within:text-[#02735E] transition-colors">Tipo de proyecto</label>
                <div class="relative">
                  <select class="w-full bg-[#F9F9F9] border-b-2 border-gray-100 p-4 text-[#022326] focus:outline-none focus:border-[#02735E] transition-all rounded-t-xl appearance-none cursor-pointer">
                    <option>Sitio web corporativo</option>
                    <option>Página de destino (Landing Page)</option>
                    <option>Sistema web (CRUD/Admin)</option>
                    <option>Otro servicio técnico</option>
                  </select>
                  <span class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">↓</span>
                </div>
              </div>
            </div>

            <div class="group">
              <label class="block text-[#022326] text-[10px] font-black uppercase mb-3 tracking-widest group-focus-within:text-[#02735E] transition-colors">Mensaje</label>
              <textarea rows="5" placeholder="¿Qué objetivos quieres alcanzar?" class="w-full bg-[#F9F9F9] border-b-2 border-gray-100 p-4 text-[#022326] focus:outline-none focus:border-[#02735E] transition-all rounded-t-xl resize-none"></textarea>
            </div>

            <button type="submit" class="w-full bg-[#022326] text-white py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-[#02735E] transition-all shadow-xl hover:shadow-[#02735E]/30 active:scale-[0.98]">
              Enviar mensaje →
            </button>
          </form>

          <p class="mt-12 text-[9px] text-gray-400 font-medium uppercase tracking-[0.2em] leading-relaxed text-center">
            🔐 Privacidad garantizada. Datos procesados únicamente para fines de consultoría técnica.
          </p>
        </div>

        <div class="lg:col-span-5 space-y-16">
          
          <div>
            <h2 class="text-[#022326] text-3xl font-black mb-10 italic tracking-tighter">¿Qué pasa después?</h2>
            <div class="space-y-12 relative before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-px before:bg-gray-100">
              <div v-for="(item, index) in steps" :key="index" class="flex gap-8 items-start relative group">
                <span class="bg-white border-2 border-[#02735E] text-[#02735E] w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black flex-shrink-0 z-10 group-hover:bg-[#02735E] group-hover:text-white transition-colors">
                  0{{ index + 1 }}
                </span>
                <p class="text-[#034040]/70 text-lg font-light leading-snug group-hover:text-[#022326] transition-colors">{{ item }}</p>
              </div>
            </div>
          </div>

          <div class="bg-[#F9F9F9] p-10 rounded-[40px] border border-gray-100 space-y-10">
            <h3 class="text-[#02735E] font-black uppercase text-[10px] tracking-[0.4em]">Canales directos</h3>
            
            <div class="space-y-8">
              <a v-for="link in socialLinks" :key="link.label" :href="link.url" target="_blank" class="flex items-center gap-6 group">
                <div class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-xl shadow-sm group-hover:bg-[#022326] group-hover:text-white transition-all duration-300">
                  {{ link.icon }}
                </div>
                <div>
                  <p class="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">{{ link.label }}</p>
                  <p class="text-[#022326] font-bold group-hover:text-[#02735E] transition-colors break-all">{{ link.value }}</p>
                </div>
              </a>
            </div>
          </div>

          <div class="pt-6">
            <div class="inline-block p-1 bg-[#02735E]/5 rounded-2xl">
              <div class="border border-[#02735E]/20 p-8 rounded-xl bg-white space-y-4">
                <h3 class="text-[#022326] text-xl font-black italic">🤝 Compromiso DACAV</h3>
                <p class="text-[#034040]/60 text-sm leading-relaxed">
                  Estás a un paso de trabajar con un desarrollador que prioriza la **escalabilidad** y el **rendimiento**. Sin intermediarios, sin sorpresas.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
const steps = [
  'Revisamos tu requerimiento en menos de 24 horas.',
  'Analizamos la viabilidad técnica y objetivos.',
  'Agendamos una breve sesión de consultoría inicial.',
  'Iniciamos el desarrollo bajo un cronograma preciso.'
]

const socialLinks = [
  { label: 'Email Estratégico', value: 'dacav.contacto@gmail.com', icon: '✉️', url: 'mailto:dacav.contacto@gmail.com' },
  { label: 'WhatsApp Directo', value: '+57 319 383 1573', icon: '💬', url: 'https://wa.me/573193831573' },
  { label: 'Código & Repo', value: 'github.com/DavidCantor', icon: '👨‍💻', url: 'https://github.com/DavidCantor' }
]
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;700;800&display=swap');

html {
  font-family: 'Plus Jakarta Sans', sans-serif;
  scroll-behavior: smooth;
}

input::placeholder, textarea::placeholder {
  color: #B0B7BF;
  font-weight: 400;
  font-size: 14px;
}
</style>