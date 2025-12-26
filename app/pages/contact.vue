<template>
  <div class="bg-[#F2F2F2] min-h-screen">
    <section class="py-16 px-6 bg-[#404040] text-[#F2F2F2]">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-4xl md:text-6xl font-black mb-6 italic tracking-tighter">Hablemos de tu proyecto</h1>
        <p class="text-[#D7D7D9] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Si tienes una idea, necesitas una página web profesional o quieres mejorar la que ya tienes, completa el formulario y conversemos.
        </p>
      </div>
    </section>

    <section class="py-20 px-6">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        <div class="bg-white p-8 md:p-12 border border-[#D7D7D9] rounded-sm shadow-sm">
          <h2 class="text-[#404040] text-2xl font-bold mb-8 uppercase tracking-widest text-sm border-b border-[#F2F2F2] pb-4">
            🧾 Formulario de contacto
          </h2>
          
          <form @submit.prevent class="space-y-6">
            <div>
              <label class="block text-[#595959] text-xs font-bold uppercase mb-2 tracking-wider">Nombre completo</label>
              <input type="text" placeholder="Ej. Juan Pérez" class="w-full bg-[#F2F2F2] border border-[#D7D7D9] p-4 text-[#404040] focus:outline-none focus:border-[#404040] transition-colors rounded-sm">
            </div>

            <div>
              <label class="block text-[#595959] text-xs font-bold uppercase mb-2 tracking-wider">Correo electrónico</label>
              <input type="email" placeholder="correo@ejemplo.com" class="w-full bg-[#F2F2F2] border border-[#D7D7D9] p-4 text-[#404040] focus:outline-none focus:border-[#404040] transition-colors rounded-sm">
            </div>

            <div>
              <label class="block text-[#595959] text-xs font-bold uppercase mb-2 tracking-wider">Nombre del negocio (Opcional)</label>
              <input type="text" placeholder="Tu empresa o marca" class="w-full bg-[#F2F2F2] border border-[#D7D7D9] p-4 text-[#404040] focus:outline-none focus:border-[#404040] transition-colors rounded-sm">
            </div>

            <div>
              <label class="block text-[#595959] text-xs font-bold uppercase mb-2 tracking-wider">Tipo de proyecto</label>
              <select class="w-full bg-[#F2F2F2] border border-[#D7D7D9] p-4 text-[#404040] focus:outline-none focus:border-[#404040] transition-colors rounded-sm appearance-none">
                <option>Sitio web corporativo</option>
                <option>Página de destino (Landing Page)</option>
                <option>Sistema web (CRUD/Admin)</option>
                <option>Otro</option>
              </select>
            </div>

            <div>
              <label class="block text-[#595959] text-xs font-bold uppercase mb-2 tracking-wider">Mensaje</label>
              <textarea rows="5" placeholder="Cuéntame brevemente qué necesitas lograr..." class="w-full bg-[#F2F2F2] border border-[#D7D7D9] p-4 text-[#404040] focus:outline-none focus:border-[#404040] transition-colors rounded-sm resize-none"></textarea>
            </div>

            <button type="submit" class="w-full bg-[#404040] text-[#F2F2F2] py-4 font-black uppercase tracking-widest hover:bg-[#595959] transition-all shadow-lg">
              Enviar mensaje
            </button>
          </form>

          <p class="mt-8 text-[10px] text-[#B0B7BF] uppercase tracking-widest leading-relaxed">
            La información enviada será utilizada únicamente para responder a tu solicitud. No compartimos tus datos con terceros.
          </p>
        </div>

        <div class="space-y-12">
          <div>
            <h2 class="text-[#404040] text-2xl font-bold mb-8 italic">💡 ¿Qué pasa después?</h2>
            <div class="space-y-8">
              <div v-for="(item, index) in steps" :key="index" class="flex gap-4 items-start">
                <span class="bg-[#B0B7BF] text-[#404040] w-8 h-8 rounded-full flex items-center justify-center font-black flex-shrink-0">
                  {{ index + 1 }}
                </span>
                <p class="text-[#595959] font-medium pt-1">{{ item }}</p>
              </div>
            </div>
          </div>

          <div class="bg-[#D7D7D9] p-8 rounded-sm">
            <h3 class="text-[#404040] font-bold uppercase text-xs tracking-[0.2em] mb-6">📍 Otros medios de contacto</h3>
            <div class="space-y-6">
              <div class="flex items-center gap-4 group">
                <div class="w-10 h-10 bg-[#404040] flex items-center justify-center text-[#F2F2F2] shrink-0">📧</div>
                <div>
                  <p class="text-[10px] font-bold text-[#595959] uppercase tracking-widest">Email</p>
                  <a href="mailto:dacav.contacto@gmail.com" class="text-[#404040] font-bold hover:underline break-all">
                    dacav.contacto@gmail.com
                  </a>
                </div>
              </div>

              <div class="flex items-center gap-4 group">
                <div class="w-10 h-10 bg-[#404040] flex items-center justify-center text-[#F2F2F2] shrink-0">💬</div>
                <div>
                  <p class="text-[10px] font-bold text-[#595959] uppercase tracking-widest">WhatsApp</p>
                  <a href="https://wa.me/573193831573" target="_blank" class="text-[#404040] font-bold hover:underline">
                    +57 319 383 1573
                  </a>
                </div>
              </div>

              <div class="flex items-center gap-4 group">
                <div class="w-10 h-10 bg-[#404040] flex items-center justify-center text-[#F2F2F2] shrink-0">🌐</div>
                <div>
                  <p class="text-[10px] font-bold text-[#595959] uppercase tracking-widest">GitHub</p>
                  <a href="https://github.com/DavidCantor" target="_blank" class="text-[#404040] font-bold hover:underline">
                    github.com/DavidCantor
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center lg:text-left pt-6">
            <h3 class="text-[#404040] text-xl font-bold mb-2">🤝 ¿Listo para empezar?</h3>
            <p class="text-[#595959]">Si estás buscando una web profesional, clara y bien hecha, estás en el lugar correcto.</p>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
const steps = [
  'Revisamos tu mensaje en menos de 24 horas.',
  'Analizamos a fondo tu necesidad y objetivos.',
  'Te respondemos con preguntas clave o una propuesta inicial.',
  'Si hay acuerdo en tiempos y costos, comenzamos el proyecto.'
]
</script>