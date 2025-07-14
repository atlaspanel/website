import './style.css'

// Loading screen functionality
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen')
  
  setTimeout(() => {
    loadingScreen?.classList.add('hidden')
    
    // Remove loading screen from DOM after fade out
    setTimeout(() => {
      loadingScreen?.remove()
    }, 300)
  }, 1500)
})

// Simple smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]')
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const target = document.querySelector(link.getAttribute('href')!) as HTMLElement
      if (target) {
        const offsetTop = target.offsetTop - 80
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      }
    })
  })

  // Simple navbar scroll effect
  const navbar = document.querySelector('.navbar')
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled')
    } else {
      navbar?.classList.remove('scrolled')
    }
  })
})