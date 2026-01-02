<template>
  <div class="bg-white min-h-screen font-sans text-gray-900">
    <!-- Hero Section con imagen de fondo -->
    <section class="relative py-32 px-4 sm:px-6 overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-emerald-900/85"></div>
        <div
          class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-no-repeat opacity-40"
        ></div>
      </div>

      <div class="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        <div
          class="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-semibold uppercase tracking-wider mb-4"
        >
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Soluciones Rápidas & Profesionales
        </div>

        <h1 class="text-white text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-none">
          Tu presencia web,
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">funcional y lista</span>
          en pocas semanas.
        </h1>
        <p class="text-white/80 text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto font-light">
          Landing pages profesionales y ajustes urgentes para que tu negocio empiece a recibir contactos de calidad de inmediato.
        </p>
        <div
          class="inline-block px-8 py-4 bg-gradient-to-r from-emerald-600/90 to-cyan-600/90 backdrop-blur-sm rounded-2xl shadow-2xl shadow-emerald-500/20"
        >
          <p class="text-white font-bold text-sm tracking-wide">
            Sin paquetes confusos. Sin esperas eternas. Resultados en menos de una semana.
          </p>
        </div>
      </div>
    </section>

    <!-- Servicios Principales (Nuevos) -->
    <section class="py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- SERVICIO 1: Landing Page Profesional -->
        <div
          class="group bg-white p-8 md:p-12 border border-gray-200 rounded-3xl hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 hover:scale-[1.02] shadow-2xl shadow-gray-900/30 flex flex-col justify-between relative overflow-hidden"
        >
          <div
            class="absolute -top-20 -right-20 w-40 h-40 bg-emerald-100 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"
          ></div>

          <div class="relative z-10">
            <div class="flex items-center gap-4 mb-10">
              <div
                class="w-14 h-14 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform"
              >
                🚀
              </div>
              <div>
                <h2 class="text-3xl font-black tracking-tight text-gray-900">Landing Page Profesional</h2>
                <h4 class="text-1xl font-black tracking-tight">Tu página web lista en pocos días para recibir clientes</h4>
                <p class="text-emerald-600 font-bold text-sm mt-1">Lista en 7-14 días • Desde 300.000 COP</p>
              </div>
            </div>

            <div class="space-y-8">
              <div>
                <h4 class="text-emerald-600 font-black text-xs uppercase tracking-widest mb-3">¿QUÉ INCLUYE?</h4>
                <ul class="text-gray-500 space-y-3 text-sm font-medium">
                  <li class="flex items-center gap-2">
                    <span class="w-2 h-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"></span>
                    <strong class="text-gray-700">Página web moderna y clara</strong> (1 sola página)
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="w-2 h-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"></span>
                    <strong class="text-gray-700">Botón directo a WhatsApp</strong> (para que te contacten al instante)
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="w-2 h-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"></span>
                    Información clara: servicios, horarios, ubicación
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="w-2 h-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"></span>
                    Formulario de contacto
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="w-2 h-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"></span>
                    Publicación incluida (queda funcionando en línea)
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="w-2 h-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"></span>
                    <em class="text-gray-400">Dominio y hosting: el cliente los contrata. Yo me encargo de la configuración si lo necesita.</em>
                  </li>
                </ul>
              </div>

              <div>
                <h4 class="text-emerald-600 font-black text-xs uppercase tracking-widest mb-3">SOLUCIONA ESTE PROBLEMA</h4>
                <p class="text-gray-600">
                  Tus clientes no encuentran información clara, tu negocio depende solo de redes sociales, pierdes contactos por no tener WhatsApp directo y proyectas una imagen poco profesional.
                </p>
              </div>
            </div>
          </div>
          <div class="mt-12 pt-8 border-t border-gray-100 relative z-10">
            <p class="text-gray-900 font-bold flex items-center gap-3">
              <span class="text-emerald-600 text-xl">→</span>
              <span class="text-lg">"Ahora mis clientes me encuentran fácil, me escriben directo y confían más en mi negocio."</span>
            </p>
            <p class="text-gray-500 text-sm mt-2 font-medium">Ideal para: Restaurantes, Barberías, Tiendas, Emprendimientos, Negocios locales.</p>
          </div>
        </div>

        <!-- SERVICIO 2: Ajustes, mejoras y soporte web (rápido) -->
        <div
          class="group bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-12 rounded-3xl text-white overflow-hidden relative transition-all duration-500 hover:scale-[1.02] shadow-2xl shadow-gray-900/30"
        >
          <div class="absolute inset-0 opacity-10">
            <div
              class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"
            ></div>
          </div>
          <div class="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 blur-[120px] opacity-30"></div>

          <div class="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-4 mb-10">
                <div
                  class="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-3xl group-hover:rotate-12 transition-transform"
                >
                  ⚡
                </div>
                <div>
                  <h2 class="text-3xl font-black tracking-tight">Ajustes, mejoras y soporte web rápido</h2>
                  <h4 class="text-1xl font-black tracking-tight">Mejoro o arreglo tu página web sin rehacerla desde cero</h4>
                  <p class="text-cyan-400 font-bold text-sm mt-1">Solución en 7 días • Precio por ajuste solicitado</p>
                </div>
              </div>

              <div class="space-y-8">
                <div>
                  <h4 class="text-cyan-400 font-black text-xs uppercase tracking-widest mb-3">¿QUÉ PUEDO HACER?</h4>
                  <ul class="text-white/60 space-y-3 text-sm font-medium">
                    <li class="flex items-center gap-3"><span class="text-cyan-400 font-bold text-lg">✓</span> Arreglar errores o caídas</li>
                    <li class="flex items-center gap-3"><span class="text-cyan-400 font-bold text-lg">✓</span> Mejora de diseño y visual</li>
                    <li class="flex items-center gap-3"><span class="text-cyan-400 font-bold text-lg">✓</span> Mejorar velocidad (web lenta)</li>
                    <li class="flex items-center gap-3"><span class="text-cyan-400 font-bold text-lg">✓</span> Cambiar textos, imágenes o diseños</li>
                    <li class="flex items-center gap-3"><span class="text-cyan-400 font-bold text-lg">✓</span> Agregar/Mejorar botón de WhatsApp</li>
                    <li class="flex items-center gap-3"><span class="text-cyan-400 font-bold text-lg">✓</span> Publicar o volver a poner online</li>
                    <li class="flex items-center gap-3"><span class="text-cyan-400 font-bold text-lg">✓</span> Configurar dominio/hosting o Deploy</li>
                  </ul>
                </div>

                <div>
                  <h4 class="text-cyan-400 font-black text-xs uppercase tracking-widest mb-3">SOLUCIONA ESTE PROBLEMA</h4>
                  <p class="text-white/80">
                    Tu web está lenta, dañada o "existe pero no sirve". Los clientes no te contactan y no sabes a quién pedirle ayuda rápida.
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-12 pt-8 border-t border-white/10">
              <p class="text-white font-bold flex items-center gap-3">
                <span class="text-cyan-400 text-xl">→</span>
                <span class="text-lg">"Mi página funciona mejor y ahora sí sirve para recibir clientes."</span>
              </p>
              <p class="text-white/60 text-sm mt-2 font-medium">Ideal para: Negocios con web vieja, Personas que "ya tienen algo", Clientes que necesitan solución urgente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Desarrollo a Medida (Mantengo como servicio premium/valor agregado) -->
    <section class="py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-7xl mx-auto">
        <div
          class="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-3xl p-8 md:p-16 border border-emerald-100 relative overflow-hidden shadow-xl shadow-emerald-500/10"
        >
          <div class="absolute top-0 right-0 w-96 h-96 opacity-10">
            <div
              class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')] bg-cover bg-center"
            ></div>
          </div>

          <div class="relative z-10">
            <div class="flex items-center gap-4 mb-12">
              <div
                class="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl"
              >
                ⚙️
              </div>
              <h2 class="text-gray-900 text-4xl md:text-5xl font-black tracking-tighter">¿Necesitas algo más complejo?</h2>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div class="space-y-10">
                <div>
                  <h4 class="text-emerald-600 font-black text-sm uppercase tracking-widest mb-6">DESARROLLO A MEDIDA</h4>
                  <p class="text-gray-600 text-lg mb-6">
                    Si tu proyecto requiere sistemas personalizados, dashboards, integraciones complejas o una plataforma completa, podemos construirlo juntos.
                  </p>
                  <ul class="space-y-6 text-lg text-gray-600">
                    <li class="flex items-center gap-4 font-medium">
                      <div
                        class="w-10 h-10 rounded-full bg-white border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold"
                      >
                        01
                      </div>
                      Dashboards y paneles de administración
                    </li>
                    <li class="flex items-center gap-4 font-medium">
                      <div
                        class="w-10 h-10 rounded-full bg-white border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold"
                      >
                        02
                      </div>
                      Sistemas CRUD y gestión de datos
                    </li>
                    <li class="flex items-center gap-4 font-medium">
                      <div
                        class="w-10 h-10 rounded-full bg-white border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold"
                      >
                        03
                      </div>
                      Integraciones con APIs y servicios externos
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 class="text-emerald-600 font-black text-sm uppercase tracking-widest mb-4">Tecnologías Robustas</h4>
                  <div class="flex flex-wrap gap-3">
                    <span
                      v-for="tech in ['Vue / Nuxt', 'Django REST', 'PostgreSQL', 'Tailwind CSS', 'TypeScript', 'Laravel']"
                      :key="tech"
                      class="px-4 py-2 bg-white border border-emerald-200 text-gray-800 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>

              <div class="bg-gradient-to-br from-gray-900 to-gray-800 p-10 rounded-3xl shadow-2xl">
                <div class="text-emerald-400 text-6xl mb-4">"</div>
                <p class="text-white text-2xl md:text-3xl font-light italic leading-snug mb-6">
                  Para cuando necesitas una <span class="text-emerald-400 font-bold">solución que va más allá</span> de una página informativa.
                </p>
                <p class="text-white/60 text-base leading-relaxed">
                  Desarrollamos herramientas a medida que optimizan procesos internos, automatizan tareas y resuelven problemas específicos de tu negocio.
                </p>
                <div class="mt-8 pt-6 border-t border-white/10">
                  <p class="text-white/40 text-sm">Presupuesto personalizado • Planificación por etapas • Soporte continuo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Servicios Adicionales (Optimización y SEO - Lo mantengo) -->
    <section class="py-24 px-4 sm:px-6 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-gray-900 text-4xl md:text-5xl font-black tracking-tighter mb-4">Valor Agregado</h2>
          <p class="text-gray-600 text-xl max-w-3xl mx-auto">Servicios complementarios para que tu web no solo exista, sino que destaque y convierta.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
          <!-- SEO y Optimización -->
          <div
            class="group bg-gradient-to-br from-white to-emerald-50 p-10 rounded-3xl border border-emerald-100 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500"
          >
            <div class="flex items-start gap-6">
              <div
                class="w-20 h-20 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/30"
              >
                🔍
              </div>
              <div class="flex-1">
                <h3 class="text-gray-900 text-3xl font-bold tracking-tight mb-4">Optimización y SEO Base</h3>
                <p class="text-gray-600 text-lg leading-relaxed mb-6">
                  Aseguro que tu sitio tenga los fundamentos técnicos correctos para ser encontrado y ofrezca una experiencia de carga rápida.
                </p>
                <ul class="space-y-3 text-gray-500">
                  <li class="flex items-center gap-2">✓ Estructura HTML semántica para SEO</li>
                  <li class="flex items-center gap-2">✓ Meta etiquetas y títulos optimizados</li>
                  <li class="flex items-center gap-2">✓ Sitemap XML y robots.txt configurados</li>
                </ul>
                <div
                  class="inline-flex items-center px-5 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-widest mt-8"
                >
                  Las bases para ser visible.
                </div>
              </div>
            </div>
          </div>

          <!-- (Este espacio lo dejé intencionalmente, podrías agregar un tercer servicio complementario aquí en el futuro, como "Capacitación" o "Auditoría Web") -->
          <div class="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-10 flex flex-col justify-center items-center text-center">
            <div class="w-20 h-20 bg-gradient-to-r from-gray-300 to-gray-400 rounded-2xl flex items-center justify-center text-3xl mb-6">
              💡
            </div>
            <h3 class="text-gray-900 text-2xl font-bold tracking-tight mb-4">¿Tienes otra necesidad?</h3>
            <p class="text-gray-600 mb-6">Hablemos de tu proyecto específico. Podemos crear un plan a tu medida.</p>
            <NuxtLink
              to="/contact"
              class="px-6 py-3 border-2 border-gray-800 text-gray-800 font-bold uppercase tracking-widest text-xs rounded-full hover:bg-gray-800 hover:text-white transition-all"
            >
              Consultar
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Proceso de Trabajo y Cotización (MANTENIDO - Funciona perfecto) -->
    <section
      class="py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-t-3xl md:rounded-t-[80px]"
    >
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <!-- Proceso de Trabajo -->
        <div class="lg:col-span-7 space-y-16">
          <div class="flex items-center gap-4">
            <div
              class="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl"
            >
              📋
            </div>
            <h2 class="text-4xl md:text-5xl font-bold italic tracking-tighter">Proceso Directo y Sin Complicaciones</h2>
          </div>
          <div class="space-y-8">
            <div v-for="(step, i) in steps" :key="i" class="flex gap-6 group items-start">
              <div class="flex-shrink-0">
                <div
                  class="w-14 h-14 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 rounded-xl flex items-center justify-center text-emerald-400 text-2xl font-black italic group-hover:scale-110 transition-transform"
                >
                  0{{ i + 1 }}
                </div>
              </div>
              <div class="pt-3">
                <p
                  class="text-white/80 text-lg md:text-xl leading-tight font-light transition-colors group-hover:text-white"
                >
                  {{ step }}
                </p>
              </div>
            </div>
          </div>
          <div class="pt-8 border-t border-white/10">
            <p class="text-emerald-400 text-sm font-bold uppercase tracking-widest">
              Comunicación directa • Entregas rápidas • Proceso transparente
            </p>
          </div>
        </div>

        <!-- Cotización -->
        <div class="lg:col-span-5">
          <div class="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl sticky top-32">
            <div class="absolute -top-10 right-10 w-20 h-20 opacity-10">
              <div
                class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center rounded-full"
              ></div>
            </div>

            <div class="relative z-10">
              <div class="flex items-center gap-4 mb-8">
                <div
                  class="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center text-xl"
                >
                  💬
                </div>
                <h2 class="text-3xl font-bold italic">¿Listo para empezar?</h2>
              </div>
              <p class="text-white/60 mb-6 text-lg">
                Para los <strong class="text-white">servicios rápidos</strong>, el precio es claro y el tiempo de entrega está definido.
              </p>
              <p class="text-white/60 mb-10 text-lg">
                Para <strong class="text-white">proyectos a medida</strong>, cotizamos en base a tus necesidades específicas.
              </p>

              <NuxtLink
                to="/contact"
                class="group w-full py-6 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold uppercase tracking-widest text-sm rounded-2xl hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500 flex items-center justify-center gap-3"
              >
                Solicitar cotización o información
                <span class="text-xl group-hover:translate-x-2 transition-transform">→</span>
              </NuxtLink>
              <p class="text-white/40 text-center text-sm mt-6">Respuesta en menos de 48 horas</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="py-32 px-4 sm:px-6 text-center bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-4xl mx-auto">
        <div class="relative">
          <div class="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 opacity-5">
            <div
              class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')] bg-contain bg-center bg-no-repeat"
            ></div>
          </div>

          <div
            class="relative z-10 border-2 border-gradient-to-r from-emerald-500 to-cyan-500 p-12 md:p-20 rounded-3xl bg-white shadow-2xl shadow-emerald-500/10"
          >
            <div
              class="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-cyan-600 px-8 py-2 text-white font-black text-sm uppercase tracking-widest rounded-full shadow-lg"
            >
              Tu próximo cliente te espera
            </div>
            <h2 class="text-gray-900 text-4xl md:text-6xl font-black tracking-tighter mb-8">
              ¿Listo para tener una web que <span class="text-emerald-600">sí funcione</span>?
            </h2>
            <p class="text-gray-600 text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
              Ya sea que necesites una landing page nueva y profesional, o arreglar urgentemente la que ya tienes, puedo ayudarte a lograrlo en cuestión de días.
            </p>
            <NuxtLink
              to="/contact"
              class="group bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-16 py-6 rounded-full font-bold uppercase tracking-widest text-sm shadow-2xl shadow-emerald-500/30 hover:shadow-3xl hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3 no-underline"
            >
              Hablar sobre mi proyecto
              <span class="text-xl group-hover:translate-x-2 transition-transform">→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Proceso de trabajo - Ajusté ligeramente el copy para que sea más rápido
const steps = [
  'Cuéntame tu idea o el problema que tienes con tu web.',
  'Te envío una propuesta clara con precio y plazo definido en horas.',
  'Trabajo en el desarrollo o ajustes de forma ágil y transparente.',
  'Revisamos juntos el resultado y realizamos los ajustes finales.',
  'Te entrego tu web funcionando y lista para recibir clientes.',
]
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

html {
  scroll-behavior: smooth;
  font-family: 'Inter', sans-serif;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Efecto de borde gradiente */
.border-gradient-to-r {
  border-image: linear-gradient(to right, #10b981, #06b6d4) 1;
}

/* Animación sutil para elementos */
@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

.floating {
  animation: float 6s ease-in-out infinite;
}
</style>