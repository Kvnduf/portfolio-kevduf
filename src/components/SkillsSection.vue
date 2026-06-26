<template>

<div class="skills-section-content">
    <SectionTitle>
        {{t('sections.skills.title')}}
    <template #subtitle>
        {{t('sections.skills.subtitle')}}
    </template>
    </SectionTitle>
    <div class="skills-containers">
        <SkillsContainer :title="t('sections.skills.development')" :icon="'fa-solid fa-code'" :skills="developmentSkills" />
        <SkillsContainer :title="t('sections.skills.toolsAndServices')" :icon="'fa-solid fa-diagram-project'" :skills="toolsSkills" />
    </div>
</div>

</template>
<script setup>
import { useI18n } from 'vue-i18n'
import SectionTitle from './common/SectionTitle.vue'
import SkillsContainer from './skills/SkillsContainer.vue';

const { t } = useI18n()


const developmentSkills = [
  { name: 'Python', img: new URL('/icons/skills/python.svg', import.meta.url).href },
  { name: 'C', img: new URL('/icons/skills/c.svg', import.meta.url).href },
  { name: 'Java', img: new URL('/icons/skills/java.svg', import.meta.url).href },
  { name: 'OCaml', img: new URL('/icons/skills/ocaml.svg', import.meta.url).href },
  { name: 'MySQL', img: new URL('/icons/skills/mysql.svg', import.meta.url).href },
  { name: 'HTML', img: new URL('/icons/skills/html.svg', import.meta.url).href },
  { name: 'CSS', img: new URL('/icons/skills/css.svg', import.meta.url).href },
  { name: 'JavaScript', img: new URL('/icons/skills/javascript.svg', import.meta.url).href },
  { name: 'Vue.js', img: new URL('/icons/skills/vue-js.svg', import.meta.url).href }
]

const toolsSkills = [
  { name: 'Git', img: new URL('/icons/skills/git.svg', import.meta.url).href },
  { name: 'Linux', img: new URL('/icons/skills/linux.svg', import.meta.url).href },
  { name: 'Figma', img: new URL('/icons/skills/figma.svg', import.meta.url).href },
  { name: 'DaVinci Resolve', img: new URL('/icons/skills/daVinci-resolve.svg', import.meta.url).href }
]
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
