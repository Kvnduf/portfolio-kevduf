<template>
    <a class="nav-item" :class="{ 'on': on }">
        <slot></slot>
    </a>
</template>

<script setup>
defineProps({
    on: {
        type: Boolean,
        default: false
    }
})
</script>

<style scoped>


.nav-item {
    position: relative;
    display: inline-block;
    text-decoration: none;
    color: var(--text-primary-color);
    font-weight: 600;
    padding-bottom: 0.2em;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
    flex: 1;
}


.nav-item::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 100%;
    height: 5px;
    border-radius: 500px;
    background: var(--color-solid);
    transform: translateX(-50%) scaleX(0);
    transform-origin: center;
    transition: transform 0.15s ease;
}

.nav-item:hover::after,
.nav-item.on::after {
    transform: translateX(-50%) scaleX(1);
}

</style>