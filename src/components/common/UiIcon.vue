<script setup>
defineProps({
    tag: {
        type: String,
        default: 'a'
    },
    size: {
        type: String,
        default: 'md' // sm | md | lg
    }
})
</script>

<template>
<component :is="tag"
 :class="['ui-icon', `size-${size}`]">
    <slot></slot>
</component>
</template>


<style scoped>

.ui-icon :deep(*) {
    color: inherit;
}

.ui-icon {
    color: var(--color-text-primary);
    text-decoration: none;
    transition: background-color 0.3s, color 0.3s;
}

.ui-icon:hover {
    color: var(--color-text-primary-hover);
}

.size-sm {
    font-size: 1em;
}

.size-md {
    font-size: 2em;
}

.size-lg {
    font-size: 3em;
}


</style>
