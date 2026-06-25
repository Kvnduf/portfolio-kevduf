<template>
    <nav>
        <ul class="nav-links" :class="{ 
            'direction-row': direction === 'row',
            'direction-column': direction === 'column'
        }">
            <li v-for="link in navLinks" :key="link.href">
                <NavItem :on="selectedLink == link.href" :class="'theme-' + link.color" :href="link.href">{{ link.name }}</NavItem>
            </li>
        </ul>
    </nav>
</template>

<script setup>

import { computed } from 'vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import NavItem from './NavItem.vue';
const { t } = useI18n()
import {
    currentSection,
    initCurrentSection,
    destroyCurrentSection
} from '@/composables/CurrentSection'



const props = defineProps({
    direction: {
        type: String,
        default: "row"
    }
})

// temporary solution to highlight the selected link
const selectedLink = ref(null)


const navLinks = computed(() => [
    {color:"blue", name: t('header.nav.about'), href: '#about' },
    {color:"orange", name: t('header.nav.skills'), href: '#skills' },
    {color:"green", name: t('header.nav.projects'), href: '#projects' },
    {color:"red", name: t('header.nav.contact'), href: '#contact' }
])



</script>

<style scoped>

.nav-links li {
  display: flex;
  align-items: center;
}

.nav-links {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    gap: 1.5em;
}

.nav-links.direction-row {
    flex-direction: row;
}

.nav-links.direction-column {
    flex-direction: column;
}
</style>

