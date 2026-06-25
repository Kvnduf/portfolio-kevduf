<template>
  <div class="dropdown">
  <button class="dropdown-button" @click="open = !open">
    <img :src="currentFlag" />
    <i class="fa-solid fa-chevron-down"></i>
  </button>

  <Transition name="dropdown">
    <div v-if="open" class="dropdown-menu"  :class="{ 'relative': props.relative }">
      <button
        v-for="(lang, key) in langs"
        :key="key"
        @click="changeLanguage(key)"
        v-show="key !== locale"
      >
        <img :src="lang.flag" />
      </button>
    </div>
  </Transition>
</div>

</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const open = ref(false)


const props = defineProps({
  relative: {
    type: Boolean,
    default: false
  }
})


const langs = {
  en: {
    flag: new URL('/icons/flags/english-flag.svg', import.meta.url).href
  },
  fr: {
    flag: new URL('/icons/flags/french-flag.svg', import.meta.url).href
  }
}

const currentFlag = computed(() =>
  langs[locale.value]?.flag || langs[Object.keys(langs)[0]].flag
)

const changeLanguage = (lang) => {
  locale.value = lang
  open.value = false
}

</script>
<style scoped>


.dropdown {
  display: inline-block;
}

button {
  display: flex;
  align-items: center;
  background: transparent;
  padding: 0;
  cursor: pointer;
  border: none;
}

button img {
  width: 3em;
  height: auto;
  display: block;
}

.dropdown-button i {
  margin-left: 0.5em;
  color: var(--color-text-primary);
}

.dropdown-menu {
  position: absolute;
}

.relative {
  position: relative;
}


.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
}

.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
}


</style>