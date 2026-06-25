<template>
<div class="contact-section-content">
    <SectionTitle>
        {{ t('sections.contact.title') }}
    </SectionTitle>


    <form class="contact-form" @submit.prevent="handleSubmit">
        <InputLabel :label="t('sections.contact.name')" targetId="name">
            <input id="name" type="text" :placeholder="t('sections.contact.placeholderName')" />
        </InputLabel>
        <InputLabel :label="t('sections.contact.email')" targetId="email">
            <input id="email" type="email" :placeholder="t('sections.contact.placeholderEmail')" />
        </InputLabel>
        <InputLabel :label="t('sections.contact.message')" targetId="message">
            <textarea id="message" :placeholder="t('sections.contact.placeholderMessage')"></textarea>
        </InputLabel>

        <UiButton id="submit-button" type="submit" tag="button" :maxWidth="true">
            <div class="button-content">
                <i class="fa-solid fa-paper-plane"></i>
                {{ t('sections.contact.send') }}
            </div>
        </UiButton>
    </form>

    <ul class="social-icons">
        <li><UiIcon tag="a" target="_blank" href="https://www.linkedin.com/in/k%C3%A9vin-dufaut-365b53407/" size="lg"><i class="fa-brands fa-linkedin"></i></UiIcon></li>
        <li><UiIcon tag="a" target="_blank" href="https://github.com/Kvnduf" size="lg"><i class="fa-brands fa-github"></i></UiIcon></li>
    </ul>
</div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import SectionTitle from './common/SectionTitle.vue'
import InputLabel from './forms/InputLabel.vue'
import UiButton from './common/UiButton.vue'
import UiIcon from './common/UiIcon.vue'

const { t } = useI18n()
</script>


<style scoped>

.social-icons {
    display: flex;
    gap: 1em;
}

.social-icons li {
    list-style: none;
}




.contact-section-content {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 5em;
}

.contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 40em;
    padding: 1em;
    background-color: color-mix(in srgb, var(--color-bg-1) 50%, transparent);
    border: 1px solid var(--color-separator);
    border-radius: 10px;
    gap: 2em;
}


.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 0.5em;
    border-radius: 6px;
    border: 1px solid var(--color-separator);
    background-color: var(--color-bg-1);
}

.contact-form textarea {
    min-height: 12em;
    resize: vertical;
}


.contact-form,
.contact-form input,
.contact-form textarea, 
.contact-form button {
    transition: border-color 0.3s, background-color 0.3s;
    font-size: 1.1em;
}

.contact-form input:focus,
.contact-form textarea:focus {
    outline: none;
    border-color: var(--color-solid);
}


.contact-form button:focus {
    outline: none;
    border-color: var(--color-primary);
}



.button-content {
    display: flex;
    align-items: center;
    gap: 0.5em;
}

</style>