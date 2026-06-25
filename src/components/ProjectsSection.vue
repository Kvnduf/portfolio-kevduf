<template>

<div class="projects-section-content">
    <SectionTitle>
        {{t('sections.projects.title')}}
    <template #subtitle>
        {{t('sections.projects.subtitle')}}
    </template>
    </SectionTitle>
    <div class="projects-container">
        <ProjectBox
            v-for="(project, index) in projects"
            :key="index"
            :title="project.title"
            :description="project.description"
            :image="project.image"
            :githubLink="project.githubLink"
            :liveLink="project.liveLink"
        />
    </div>
</div>

</template>
<script setup>

import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionTitle from './common/SectionTitle.vue'
import ProjectBox from './projects/ProjectBox.vue'
const { t } = useI18n()
const projects = computed(() => [
    {
        title: t('sections.projects.portfolio.title'),
        description: t('sections.projects.portfolio.description'),
        image: '/images/projects/portfolio.png',
        githubLink: 'https://github.com/Kvnduf/portfolio-kevduf',
    },
    {
        title: t('sections.projects.systemUpdater.title'),
        description: t('sections.projects.systemUpdater.description'),
        image: '/images/projects/system-updater.jpg',
        githubLink: 'https://github.com/Kvnduf/package-manager-updater',
    }
])
</script>

<style scoped>


.projects-section-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5em;
}

.projects-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2em;
}
</style>