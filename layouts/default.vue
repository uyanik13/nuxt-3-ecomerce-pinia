<template>
  <div>
    <StaticHeader />
    <div class="my-3">
      <slot />
    </div>
    <StaticFooter />
  </div>
</template>

<script setup>
const meta = useMeta({
  meta: [
    {
      name: "description",
      content: "e-commerce starter Nuxt.js ",
    },
  ],
});
</script>
