<script setup>
import { watch, onMounted, onUnmounted } from 'vue'

import AppHeader from '@/components/AppHeader.vue'
import AboutSection from '@/components/AboutSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import FooterContent from '@/components/footer/FooterContent.vue'

import {
    currentSection,
    initCurrentSection,
    destroyCurrentSection
} from '@/composables/CurrentSection'

function onSectionChange(newSection) {
    console.log('Current section changed to:', newSection)
}

function getCurrentColorFromSection(section) {
    switch (section) {
        case 'about':
            return 'theme-blue';
        case 'skills':
            return 'theme-orange';
        case 'projects':
            return 'theme-green';
        case 'contact':
            return 'theme-red';
        default:
            return 'theme-blue';
    }
}

watch(currentSection, (newSection) => {
    const colorClass = getCurrentColorFromSection(newSection)
    document.body.className = colorClass
})

onMounted(() => {
    initCurrentSection()
})

onUnmounted(() => {
    destroyCurrentSection()
})
</script>

<template>
    <AppHeader/>
    <main>
        <section id="about" :class="getCurrentColorFromSection('about')">
            <AboutSection />
        </section>
        <hr/>
        <section id="skills" :class="getCurrentColorFromSection('skills')">
            <SkillsSection />
        </section>
        <hr/>
        <section id="projects" :class="getCurrentColorFromSection('projects')">
            <ProjectsSection />
        </section>
        <hr/>
        <section id="contact" :class="getCurrentColorFromSection('contact')">
            <ContactSection />
        </section>
    </main>
    <footer>
        <FooterContent/>
    </footer>
</template>

<style scoped>

hr {
  border: none;
  height: 3px;
  margin: 5vh 0;
  width: 100%;
  background-color: var(--color-separator);
}

section {
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 95vh;
    width: 100%;
    background: radial-gradient(
            ellipse at center,
            var(--color-interactive-1) 1%,
            rgba(255, 0, 128, 0) 70%
    );
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0 15vw;
}

section {
    scroll-margin-top: 7em;
}


@media (max-width: 1200px) {
    main {
        margin: 0 5vw;
    }
}



@media (max-width: 768px) {
    main {
        font-size: 0.8em;
    }
}

</style>
