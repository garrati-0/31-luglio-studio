// Canvas Animation
const canvas = document.getElementById("arrows");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resize);
resize();

const arrows = [];
const rows = 20;
const cols = 20;
const spacing = 50;

for (let y = 0; y < rows; y++) {
  for (let x = 0; x < cols; x++) {
    arrows.push({
      x: x * spacing,
      y: y * spacing,
      angle: Math.random() * Math.PI * 2,
    });
  }
}

function drawArrow(x, y, angle) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.beginPath();
  ctx.moveTo(-5, -10);
  ctx.lineTo(0, -20);
  ctx.lineTo(5, -10);
  ctx.moveTo(0, -20);
  ctx.lineTo(0, 10);
  ctx.strokeStyle = getComputedStyle(document.body).getPropertyValue('--marrone');
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.restore();
}

function animate(time) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  arrows.forEach(a => {
    const dx = a.x - centerX;
    const dy = a.y - centerY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) + Math.sin(time * 0.001 + dist * 0.01) * 0.5;
    drawArrow(a.x, a.y, angle);
  });

  requestAnimationFrame(animate);
}

animate(0);

// Theme Toggle Functionality
function toggleTheme() {
  const root = document.documentElement;
  const currentVerde = getComputedStyle(root).getPropertyValue('--verde').trim();
  
  if (currentVerde === '#387B66') {
    root.style.setProperty('--verde', '#D0BA98');
    root.style.setProperty('--sabbia', '#23140C');
    root.style.setProperty('--marrone', '#91040c');
  } else {
    root.style.setProperty('--verde', '#387B66');
    root.style.setProperty('--sabbia', '#FFCB82');
    root.style.setProperty('--marrone', '#381E05');
  }
}

// Add event listeners for both theme toggle buttons
document.getElementById("toggleTheme").addEventListener("click", toggleTheme);
document.getElementById("toggleThemeMobile").addEventListener("click", toggleTheme);

// jQuery functionality
$(document).ready(function() {
  // Toggle mobile menu
  $('.button-container').click(function() {
    $(this).toggleClass('active');
    $('.overlay').toggleClass('open');
  });

  // Close mobile menu when clicking on a link
  $('.overlay a').click(function() {
    $('.button-container').removeClass('active');
    $('.overlay').removeClass('open');
  });

  // Add scrolled class to navbar on scroll
  function handleScroll() {
    var header = $('.desk-nav');
    var scrollPosition = $(window).scrollTop();

    if (scrollPosition > 50) {
      header.addClass('scrolled');
    } else {
      header.removeClass('scrolled');
    }
  }

  $(window).on('scroll', handleScroll);
  handleScroll();

  // Smooth scrolling for anchor links
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 80
      }, 1000);
    }
  });
});



