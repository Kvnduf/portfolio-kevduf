<template>
    <div class="skills-container">
        <div class="skills-header">
            <i v-if="icon" :class="icon"></i>
            <h3>{{ title }}</h3>
        </div>
        <div class="skills-list">
            <SkillBox v-for="skill in skills" :key="skill.name" class="skill" :img="skill.img" :text="skill.name" />
        </div>
    </div>
</template>

<script setup>
import SkillBox from './SkillBox.vue';
defineProps({
    title: String,
    icon: String,
    skills: Array
})
</script>

<style scoped>

/* .skills-list *, .skills-list {
    border: 2px solid var(--color-separator);
} */


.skills-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5em;
    padding: 1em 0em;
}

.skills-header {
    display: flex;
    align-items: center;
    gap: 0.5em;
    font-size: 1.2em;
}
.skills-header i {
    color: var(--color-solid);
}

</style>
