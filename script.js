function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(sec => {
      sec.classList.remove('active');
    });
  
    // Show the clicked section
    const section = document.getElementById(sectionId);
    section.classList.add('active');
  }
  
  
