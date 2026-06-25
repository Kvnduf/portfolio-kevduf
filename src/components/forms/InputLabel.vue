<template>
  <div class="input-label">
    <label :for="targetId">{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  targetId: String
});
</script>

<style scoped>
.input-label {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    width: 100%;
}


</style>