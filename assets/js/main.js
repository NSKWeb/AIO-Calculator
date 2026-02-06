document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const navLinks = document.querySelector('.nav-links');
  const menuToggle = document.querySelector('.menu-toggle');

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

// Utility functions for calculators
function formatNumber(num, decimals = 2) {
  return num.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
}

function showError(element, message) {
  const errorDiv = element.nextElementSibling;
  if (errorDiv && errorDiv.classList.contains('error')) {
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
  }
}

function clearError(element) {
  const errorDiv = element.nextElementSibling;
  if (errorDiv && errorDiv.classList.contains('error')) {
    errorDiv.textContent = '';
    errorDiv.style.display = 'none';
  }
}

function showResults(resultsDiv) {
  resultsDiv.classList.add('show');
  resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function validateInput(value, min = 0, max = Infinity) {
  const num = parseFloat(value);
  if (isNaN(num)) {
    return { valid: false, message: 'Please enter a valid number' };
  }
  if (num < min) {
    return { valid: false, message: `Value must be at least ${min}` };
  }
  if (num > max) {
    return { valid: false, message: `Value must be at most ${max}` };
  }
  return { valid: true, value: num };
}

function validateRequired(value) {
  if (!value || value.trim() === '') {
    return { valid: false, message: 'This field is required' };
  }
  return { valid: true, value: value.trim() };
}
