<template>
  <div class="flex flex-col min-h-screen">
    <!-- Skip link for keyboard users -->
    <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-gray-900 px-3 py-2 rounded z-50">Saltar al contenido</a>

    <LayoutHeadersHeader />

    <main id="main-content" role="main" class="flex-grow">
      <slot />
    </main>

    <LayoutFootersFooter />
  </div>
</template>