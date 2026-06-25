<template>
    <a :class="['ancre-icon']">
        <slot></slot>
    </a>
</template>


<style scoped>


.ancre-icon {
    text-decoration: none;
    color: var(--text-secondary-color);
    font-size: 3em;
    transition: background-color 0.3s, color 0.3s;
}


</style>