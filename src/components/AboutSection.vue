<template>

<div class="about-section-content">
    <div class="about-presentation">
        <div class="intro">
            <p>{{ t('sections.about.hiIm') }}</p>
            <h1>Kévin DUFAUT</h1>
        </div>
        <ul class="nav-buttons">
            <li><UiButton variant="emphasis" href="#projects">{{ t('sections.about.myProjects') }}</UiButton></li>
            <li><UiButton variant="secondary" href="#contact">{{ t('sections.about.contactMe') }}</UiButton></li>
        </ul>
        <ul class="social-icons">
            <li><UiIcon tag="a" target="_blank" href="https://www.linkedin.com/in/k%C3%A9vin-dufaut-365b53407/" size="lg"><i class="fa-brands fa-linkedin"></i></UiIcon></li>
            <li><UiIcon tag="a" target="_blank" href="https://github.com/Kvnduf" size="lg"><i class="fa-brands fa-github"></i></UiIcon></li>
        </ul>
    </div>
    <div class="about-text">
        <p>{{ t('sections.about.description.p1') }}</p>
        <p>{{ t('sections.about.description.p2') }}</p>
        <p>{{ t('sections.about.description.p3') }}</p>
        <p>{{ t('sections.about.description.p4') }}</p>
    </div>
</div>

</template>
<script setup>
import UiButton from './common/UiButton.vue'
import UiIcon from './common/UiIcon.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>

.about-section-content {
    display: flex;
    align-items: center;
    gap: 2em;
}

/* Main Intro Styles */

.about-section-content .about-presentation {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 3.5em;
}

.about-section-content > .about-presentation > .intro {
    width: 100%;
}

.about-section-content > .about-presentation >.intro p {
    font-size: 2em;
}

.about-section-content  > .about-presentation > .intro > h1 {
    font-size: 4em;
    line-height: 1;
    color: var(--color-solid);
}

.about-section-content ul {
    list-style: none;
}



.about-section-content > .about-presentation > .nav-buttons {
    list-style: none;
    flex-wrap: wrap;
    display: flex;
    gap: 2em;
}


.about-section-content > .about-presentation > .social-icons {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
}



/* About Section Styles */

.about-section-content > .about-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2em;
}

.about-section-content > .about-text > p {
    font-size: 	1.2em;
    line-height: 1.5em;
    text-align: justify;
    padding: 0;
    margin: 0;
}

@media (max-width: 1200px) {


    .about-section-content {
        flex-direction: column;
    }

    .about-section-content > .about-presentation {
        flex: none;
        flex-direction: column;
    }


    .intro p, .intro h1 {
        text-align: center;
    }

    .nav-buttons, .social-icons {
        justify-content: center;
    }
}

</style>