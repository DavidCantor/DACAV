<template>
    <section ref="sectionRef" class="relative py-24 px-4 sm:px-6 bg-slate-50 overflow-hidden">
   

        <div class="max-w-6xl mx-auto relative z-10">
            <div class="text-center max-w-3xl mx-auto mb-20 opacity-0" :class="{ 'animate-slide-up': isVisible }">
                <h2 class="text-slate-900 text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-[1.2]">
                    Nuestro proceso de <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600 inline-block py-2">trabajo</span>
                </h2>
                <p class="text-slate-500 text-lg font-medium">Una metodología transparente diseñada para que sepas
                    exactamente en qué etapa estamos.</p>
            </div>

            <div class="relative space-y-12">
                <div class="hidden md:block absolute left-[12.5%] top-10 bottom-10 w-px bg-slate-200" aria-hidden="true">
                    <div class="h-full bg-gradient-to-b from-emerald-500 to-cyan-500 origin-top transition-transform duration-1000 scale-y-0"
                        :class="{ 'scale-y-100': isVisible }"></div>
                </div>

                <div v-for="(step, index) in steps" :key="index" class="relative group opacity-0"
                    :class="{ 'animate-slide-up': isVisible }"
                    :style="{ animationDelay: `${0.2 + index * 0.15}s`, animationFillMode: 'forwards' }">

                    <div class="grid grid-cols-1 md:grid-cols-12 md:gap-12 items-center">

                        <div class="md:col-span-3 mb-4 md:mb-0 flex flex-col items-start md:items-center">
                            <div class="relative">
                                <div class="text-8xl md:text-9xl font-black leading-none transition-all duration-500 
                            text-slate-200 group-hover:text-emerald-500/20"
                                    style="-webkit-text-stroke: 1.5px rgba(16, 185, 129, 0.2);">
                                    0{{ index + 1 }}
                                </div>

                                <div
                                    class="hidden md:block absolute top-1/2 -right-6 w-6 h-6 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)] z-20 translate-x-1/2 -translate-y-1/2 border-4 border-white">
                                </div>
                            </div>
                        </div>

                        <div
                            class="md:col-span-9 bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200 group-hover:border-emerald-500/30 transition-all duration-500 relative overflow-hidden group-hover:-translate-y-1 shadow-lg hover:shadow-2xl">
                            
                            <div class="relative z-10">
                                <h3
                                    class="text-slate-900 font-bold text-2xl mb-4 flex items-center gap-3 transition-colors group-hover:text-emerald-600">
                                    <span
                                        class="md:hidden w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-sm font-black">0{{
                                        index + 1 }}</span>
                                    {{ step.title }}
                                </h3>
                                <p
                                    class="text-slate-600 text-lg leading-relaxed max-w-3xl group-hover:text-slate-800 transition-colors">
                                    {{ step.desc }}</p>

                                <div class="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                                    <div class="flex items-center gap-2 min-w-[120px]">
                                        <span
                                            class="text-[10px] font-black uppercase tracking-[0.15em] text-emerald-600">Fase
                                            Actual</span>
                                    </div>
                                    <div class="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                        <div class="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-1000 ease-out"
                                            :style="{ width: isVisible ? `${(index + 1) * 20}%` : '0%' }"></div>
                                    </div>
                                    <span class="text-xs font-bold text-slate-400">{{ (index + 1) * 20 }}%</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const steps = [
    { title: 'Análisis y objetivos', desc: 'Entendemos tu negocio y qué necesitas lograr. No solo hacemos una web, creamos una herramienta comercial estratégica.' },
    { title: 'Propuesta clara', desc: 'Definimos alcance, tiempos y entregables sin letra pequeña. Recibes un presupuesto cerrado y transparente.' },
    { title: 'Diseño y desarrollo', desc: 'Construimos tu sitio con una estructura clara, diseño profesional y código optimizado para máximo rendimiento.' },
    { title: 'Revisión y ajustes', desc: 'Revisamos juntos cada detalle. Tu feedback es fundamental para asegurar que el resultado supere tus expectativas.' },
    { title: 'Entrega y soporte', desc: 'Publicamos tu web y te acompañamos después del lanzamiento para asegurar que todo funcione como un reloj.' }
]

const sectionRef = ref(null)
const isVisible = ref(false)

onMounted(() => {
    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            isVisible.value = true
            observer.disconnect()
        }
    }, { threshold: 0.15 })

    if (sectionRef.value) observer.observe(sectionRef.value)
})
</script>

<style scoped>
.opacity-0 {
    opacity: 0;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-slide-up {
    animation: slideUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

section {
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>