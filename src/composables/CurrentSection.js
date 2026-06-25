import { ref } from 'vue'

export const currentSection = ref(null)

let observer = null

export function initCurrentSection() {
    const sections = document.querySelectorAll('section[id]')

    if (observer) {
        observer.disconnect()
    }

    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    currentSection.value = entry.target.id
                }
            })
        },
        {
            threshold: 0.5
        }
    )

    sections.forEach((section) => observer.observe(section))
}

export function destroyCurrentSection() {
    if (observer) {
        observer.disconnect()
        observer = null
    }
}