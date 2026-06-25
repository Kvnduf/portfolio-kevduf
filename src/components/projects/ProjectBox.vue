<template>
    <article class="project-box">
        <div class="project-image">
            <img :src="image" :alt="title" />
        </div>

        <div class="project-content">
            <div class="project-info">
                <div class="project-header">
                    <h3>{{ title }}</h3>
                    <div class="project-links">
                        <UiIcon
                        v-if="githubLink"
                        tag="a"
                        target="_blank"
                        :href="githubLink"
                        >
                        <i class="fa-brands fa-github"></i>
                        </UiIcon>
                    </div>
                </div>
                <p>{{ description }}</p>
            </div>
        </div>
    </article>
</template>

<script setup>

import UiIcon from '@/components/common/UiIcon.vue'

defineProps({
    title: String,
    description: String,
    image: String,
    githubLink: String
});
</script>

<style scoped>




.project-box {
    display: flex;
    flex-direction: column;
    overflow: hidden;

    background: var(--color-bg-2);

    border: 1px solid var(--color-separator);
    border-radius: 10px;

    
    width: 100%;
    max-width: 35em;
    height: auto;
}



.project-image {
    height: 15em;
}


.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}


.project-content {
    display: flex;
    gap: 1em;

    padding: 1em;
    flex: 1;
}

.project-header {
    display: flex;
    align-items: center;
    gap: 1em;
}

.project-info {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.project-info h3 {
    color: var(--color-text-primary);
    font-size: 1.4em;
    font-weight: 700;
}

.project-info p {
    color: var(--color-text-secondary);
    line-height: 1.4;
    font-size: 1em;
    margin: 0;
    text-align: justify;
    font-style: italic;
    flex: 1;
}


.project-links {
    margin-left: auto;
}


</style>