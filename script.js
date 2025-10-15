function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('.content-section').forEach(sec => {
    sec.classList.remove('active', 'fade-in');
  });

  // Remove active class from nav links
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.classList.remove('active');
  });

  // Show selected section
  const section = document.getElementById(sectionId);
  section.classList.add('active', 'fade-in');

  // Highlight active nav link
  const activeLink = document.querySelector(`nav ul li a[onclick*="${sectionId}"]`);
  if (activeLink) activeLink.classList.add('active');

  // Smooth scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
