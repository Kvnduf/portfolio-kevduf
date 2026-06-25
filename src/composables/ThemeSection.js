import { ref, watch } from 'vue'

export const currentSection = ref(null)
export const themeSection = ref(null)


watch(currentSection, (newSection) => {
    themeSection.value = getCurrentColorFromSection(newSection)
})
