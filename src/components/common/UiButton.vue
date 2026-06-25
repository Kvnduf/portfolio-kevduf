<script setup>
defineProps({
    tag: {
        type: String,
        default: 'a'
    },
    variant: {
        type: String, // 'primary' / 'secondary' / emphasis
        default: 'primary'
    },
    maxWidth: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
<component :is="tag"
 :class="['ui-button', variant, { 'max-width': maxWidth }]">
    <slot></slot>
</component>
</template>


<style scoped>
.ui-button {
    font-size: 1.0em;
    padding: 0.75em 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border-radius: 10px;
    text-decoration: none;
    transition: background-color 0.3s, border 0.3s;
}

.ui-button.max-width {
    width: 100%;
}

.ui-button.primary {
    background-color: var(--color-solid);
    border: 2px solid var(--color-solid);
    color: var(--color-text-primary);
}

.ui-button.primary:hover {
    background-color: var(--color-solid-hover);
    color: var(--color-text-primary);
}


.ui-button.secondary {
    background-color: transparent;
    color: var(--color-text-secondary);
    border: 2px solid var(--color-separator);
}

.ui-button.secondary:hover {
    border: 2px solid var(--color-solid);
}


.ui-button.emphasis {
    background-color: var(--color-solid);
    color: var(--color-text-primary);
    box-shadow: 0 0 5px var(--color-solid);
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
}

.ui-button.emphasis:hover {
    background-color: var(--color-solid-hover);
    color: var(--color-text-primary);
    box-shadow: 0 0 7px var(--color-solid);
}

</style>
