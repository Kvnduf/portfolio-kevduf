<template>
    <div class="section-title-container">
        <div class="main-title-container">
            <h1><slot></slot></h1>
        </div>
        <h2 v-if="slots.subtitle"><slot name="subtitle"></slot></h2>
    </div>
</template>

<script setup>

import { useSlots } from 'vue'

const slots = useSlots()

</script>

<style scoped>

.section-title-container {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 4em;
}

h1 {
    font-size: 2.5em;
    display: inline-block;
    position: relative;
}

h1::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -0.2em;
    transform: translateX(-50%);
    width: 75%;
    height: 0.2em;
    background-color: var(--color-solid);
    border-radius: 10px;
}

h2 {
    font-size: 1.4em;
    line-height: 1.2em;
    color: var(--color-text-secondary);
    font-weight: normal;
}
</style>