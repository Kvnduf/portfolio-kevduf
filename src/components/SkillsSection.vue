<template>

<div class="skills-section-content">
    <SectionTitle>
        {{t('sections.skills.title')}}
    <template #subtitle>
        {{t('sections.skills.subtitle')}}
    </template>
    </SectionTitle>
    <div class="skills-containers">
        <SkillsContainer :title="t('sections.skills.development')" :icon="'fa-solid fa-code'" :skills="[
            {name: 'Python', img: '/icons/skills/python.svg'},
            {name: 'C', img: '/icons/skills/c.svg'},
            {name: 'Java', img: '/icons/skills/java.svg'},
            {name: 'OCaml', img: '/icons/skills/ocaml.svg'},
            {name: 'MySQL', img: '/icons/skills/mysql.svg'},
            {name: 'HTML', img: '/icons/skills/html.svg'},
            {name: 'CSS', img: '/icons/skills/css.svg'},
            {name: 'JavaScript', img: '/icons/skills/javascript.svg'},
            {name: 'Vue.js', img: '/icons/skills/vue-js.svg'},
        ]" />
        <SkillsContainer :title="t('sections.skills.toolsAndServices')" :icon="'fa-solid fa-diagram-project'" :skills="[
            {name: 'Git', img: '/icons/skills/git.svg'},
            {name: 'Linux', img: '/icons/skills/linux.svg'},
            {name: 'Figma', img: '/icons/skills/figma.svg'},
            {name: 'DaVinci Resolve', img: '/icons/skills/daVinci-resolve.svg'},
        ]" />
    </div>
</div>

</template>
<script setup>
import { useI18n } from 'vue-i18n'
import SectionTitle from './common/SectionTitle.vue'
import SkillsContainer from './skills/SkillsContainer.vue';

const { t } = useI18n()
</script>

<style scoped>
.skills-section-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5em;
}
.skills-containers {
    display: flex;
    flex-direction: column;
    gap: 3em;
}
</style>
