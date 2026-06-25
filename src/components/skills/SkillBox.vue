<template>
    <div class="skill-container">
        <img :src="img" class="skill-icon" />
        <span>{{ text }}</span>
    </div>
</template>

<script setup>
defineProps({
    img: String,
    text: String
})
</script>

<style scoped>

.skill-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5em;
    min-width: 8em;
    height: auto;
    border: 2px solid var(--color-separator);
    border-radius: 2px;
    padding: 0.5em;
    box-shadow: 3px 3px 3px #0000008e;
    background: var(--color-interactive-1);
}

img {
    width: 4em;
    height: 4em;
}

span {
    line-height: 1.0em;
    width: 100%;
    white-space: nowrap;
}


</style>