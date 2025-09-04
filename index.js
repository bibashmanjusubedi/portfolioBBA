document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('header nav a');
    // Normalize path to file name only (strip folders)
    let path = window.location.pathname.split('/').filter(Boolean).pop() || 'index.html';
    let hash = window.location.hash;
  
    // Remove .html from both path and href for insensitive matching
    let normPath = path.replace(/\.html$/i, '');
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (!href) return;
      if (href.startsWith('#')) {
        // For anchor navigation
        if (href === hash) {
          link.classList.add('active');
        }
      } else {
        // For page navigation: ignore .html for matching
        let normHref = href.replace(/\.html$/i, '');
        if (
          normHref === normPath ||
          (normHref === 'index' && (normPath === '' || normPath === 'index'))
        ) {
          link.classList.add('active');
        }
      }
    });
  });