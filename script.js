(() => {
  // Mobile Navigation toggle with sleek animation
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  const header = document.querySelector(".site-header");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
      toggle.innerHTML = isOpen ? '<span aria-hidden="true">✕</span> Close' : '<span aria-hidden="true">☰</span> Menu';
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open navigation menu");
        toggle.innerHTML = '<span aria-hidden="true">☰</span> Menu';
      });
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open navigation menu");
        toggle.innerHTML = '<span aria-hidden="true">☰</span> Menu';
        toggle.focus();
      }
    });

    // Close when tapping outside
    document.addEventListener("click", event => {
      if (nav.classList.contains("open") && !nav.contains(event.target) && !toggle.contains(event.target)) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open navigation menu");
        toggle.innerHTML = '<span aria-hidden="true">☰</span> Menu';
      }
    });
  }

  // Sticky header blur elevation on scroll
  window.addEventListener("scroll", () => {
    if (header) {
      if (window.scrollY > 30) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  }, { passive: true });

  // Interactive 3D tilt and ripple effect for Liquid Metal Buttons
  const liquidButtons = document.querySelectorAll(".liquid-metal-btn");
  liquidButtons.forEach(btn => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;
      btn.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "";
    });

    btn.addEventListener("click", (e) => {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement("span");
      const diameter = Math.max(rect.width, rect.height);
      const radius = diameter / 2;

      ripple.style.width = ripple.style.height = `${diameter}px`;
      ripple.style.left = `${e.clientX - rect.left - radius}px`;
      ripple.style.top = `${e.clientY - rect.top - radius}px`;
      ripple.style.position = "absolute";
      ripple.style.borderRadius = "50%";
      ripple.style.background = "radial-gradient(circle, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0) 70%)";
      ripple.style.transform = "scale(0)";
      ripple.style.animation = "rippleEffect 0.6s linear";
      ripple.style.pointerEvents = "none";
      ripple.style.zIndex = "3";

      btn.appendChild(ripple);
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Dynamic CSS injection for ripple animation
  const styleEl = document.createElement("style");
  styleEl.textContent = `
    @keyframes rippleEffect {
      to {
        transform: scale(3.5);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(styleEl);

  // Appointment Form
  const form = document.querySelector("#appointment-form");
  const status = document.querySelector("#form-status");
  if (form && status) {
    const dateField = form.querySelector('input[name="preferred-date"]');
    if (dateField) {
      const today = new Date();
      const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
      dateField.min = localToday;
    }
    form.addEventListener("submit", event => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const data = new FormData(form);
      const patientName = String(data.get("name") || "").trim();
      status.innerHTML = `<strong>Thank you, ${patientName}!</strong><br>This is a sample enquiry preview. Your details are secure and have not been stored. Please call <strong><a href="tel:+919849051299" style="color:var(--green-900);text-decoration:underline;">098490 51299</a></strong> directly to confirm your appointment.`;
      status.classList.add("show");
      status.setAttribute("tabindex", "-1");
      status.focus();
      form.reset();
    });
  }

  // Dynamic Year
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
})();
