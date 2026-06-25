<template>
    <div class="main-title">
        <img src="/images/profile-picture.jpg" class="logo-image">
        <h1>Kévin DUFAUT</h1>
    </div>
</template>

<style scoped>

.main-title {
    display: flex;
    align-items: center;
    gap: 1em;
}



.main-title h1 {
    font-size: 2em;
    line-height: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
    flex: 1;
}

.main-title .logo-image {
    width: 5em;
    height: auto;
    border-radius: 50%;
    border: 2px solid var(--color-text-primary);
}


</style>