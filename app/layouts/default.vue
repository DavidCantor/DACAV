<template>
  <div class="flex flex-col min-h-screen">
    <LayoutHeadersHeader />

    <main class="flex-grow">
      <slot />
    </main>

    <LayoutFootersFooter />
  </div>
</template>