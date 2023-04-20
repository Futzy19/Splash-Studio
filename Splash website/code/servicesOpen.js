document.addEventListener('DOMContentLoaded', () => {

    const followCursor = () => { 
        const el = document.querySelector('.services-section-subtext') 

        window.addEventListener('onClick', e => { 
        const target = e.target
        if (!target) return

        if (target.closest('.services-section-btn')) { 
            el.classList.add('services-section-subtext-active') 
        } else { 
            el.classList.remove('services-section-subtext-active') 
        }
        })
    }

    followCursor() 

    })