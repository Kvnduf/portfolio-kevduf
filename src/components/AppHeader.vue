<template>
    <header class="header-content">
        <MainTitle class="main-title" />
        <div class="header-right">
            <div class="desktop-nav">
                <NavLinks direction="row"/>
                <LangSelector/>
            </div>
            <UiIcon :tag="button" class="burger-button" @click="menuOpen = !menuOpen">
                <i class="fa-solid fa-bars"></i>
            </UiIcon>
        </div>

        <Transition name="mobile-menu">
            <div v-if="menuOpen" class="mobile-nav">
                <NavLinks direction="column" @click="menuOpen = false" />
                <LangSelector relative="true"/>
            </div>
        </Transition>
    </header>
</template>

<script setup>
import MainTitle from './header/MainTitle.vue'
import NavLinks from './header/NavLinks.vue'
import UiIcon from './common/UiIcon.vue';
import LangSelector from './header/LangSelector.vue'
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

<style scoped>



.header-content {
    position: sticky;
    top: 0;
    padding: 2em;
    padding-top: 0.75rem;
    display: flex;
    align-items: center;
    z-index: 1000;
    transition: all 0.3s ease;
}



.header-content::before {
    content: "";
    position: absolute;
    inset: 0;

    backdrop-filter: blur(70px);
    mask-image: linear-gradient(
        to bottom,
        black 60%,
        transparent 100%
    );
    z-index: -2;
}

.header-content::after {
    content: "";
    position: absolute;
    inset: 0;

    background-image: var(--navbar);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    z-index: -1;
    pointer-events: none;
}



.header-right {
    display: flex;
    align-items: center;
    margin-left: auto;
    gap: 2em;
}


.desktop-nav {
    display: flex;
    gap: 1.5em;
}

.burger-button {
    display: none;
}


.mobile-nav {
    display: none;
}

@media (max-width: 900px) {
    .header-content {
        padding: 1.5rem 1rem;
        padding-top: 0.4rem;
    }
    .desktop-nav {
        display: none;
    }
    .burger-button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border: none;
        cursor: pointer;
        font-size: 1.5rem;
    }
    .main-title {
        font-size: 0.8em;
    }

    .mobile-nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: auto;
        gap: 1.2em;
        position: absolute;
        top: 100%;
        right: 1em;
        padding: 1em;
        background: var(--color-bg-2);
        backdrop-filter: blur(20px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        z-index: 999;
        border : 1px solid var(--color-separator);
        border-radius: 0.5em;
        margin-left: 0.5em;
    }
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
    transition: all 0.25s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

</style>