document.addEventListener('DOMContentLoaded', function() {
  // Initialize theme system
  initTheme();

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

// Theme System
function initTheme() {
  const html = document.documentElement;
  const pageDefaultTheme = html.getAttribute('data-theme') || 'light';

  // Try to get user preference: first page-specific, then global, then default
  const pagePath = window.location.pathname;
  const pageKey = 'calctools-theme-' + pagePath.replace(/\//g, '-');
  const storedTheme = localStorage.getItem(pageKey) || localStorage.getItem('calctools-theme-global') || pageDefaultTheme;

  // Apply the theme
  html.setAttribute('data-theme', storedTheme);

  // Create theme picker UI
  createThemePicker(storedTheme);
}

function createThemePicker(currentTheme) {
  const nav = document.querySelector('nav');
  if (!nav) return;

  const themePicker = document.createElement('div');
  themePicker.className = 'theme-picker';

  const select = document.createElement('select');
  select.setAttribute('aria-label', 'Select theme');

  const themes = [
    { value: 'light', label: '☀️ Light' },
    { value: 'dark', label: '🌙 Dark' },
    { value: 'doctor-loved', label: '🏥 Doctor-Loved' },
    { value: 'aesthetic', label: '✨ Aesthetic' },
    { value: 'child-friendly', label: '🌈 Child-Friendly' },
    { value: 'eye-friendly', label: '📖 Eye-Friendly' }
  ];

  themes.forEach(theme => {
    const option = document.createElement('option');
    option.value = theme.value;
    option.textContent = theme.label;
    if (theme.value === currentTheme) {
      option.selected = true;
    }
    select.appendChild(option);
  });

  select.addEventListener('change', function() {
    switchTheme(this.value);
  });

  themePicker.appendChild(select);
  nav.appendChild(themePicker);
}

function switchTheme(themeName) {
  const html = document.documentElement;
  html.setAttribute('data-theme', themeName);

  // Store user preference - global preference
  localStorage.setItem('calctools-theme-global', themeName);
}

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
