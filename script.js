function toggleInvitation() {
    const container = document.getElementById("invitation");
    const btn = document.getElementById("btn");
  
    const isOpening = !container.classList.contains("show");
  
    container.classList.toggle("show");
  
    if (isOpening) {
      btn.textContent = "Hide Invitation";
  
      // wait for layout + animation start
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTimeout(() => {
            const yOffset = -80;
  
            const y =
              container.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset;
  
            window.scrollTo({
              top: y,
              behavior: "smooth"
            });
          }, 250);
        });
      });
  
    } else {
      btn.textContent = "View Invitation";
    }
  }
  
  /* scroll fade-in */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.15 });
  
  document.querySelectorAll(".fade-in").forEach(el => {
    observer.observe(el);
  });

  window.addEventListener("load", () => {
  setTimeout(() => {
    if (typeof confetti !== "function") return;

    const gold = ["#d4af37", "#f5e6a3", "#ffffff"];

    confetti({
      particleCount: 140,
      spread: 85,
      startVelocity: 35,
      gravity: 0.9,
      ticks: 200,
      origin: { y: 0.2 },
      colors: gold
    });

    setTimeout(() => {
      confetti({
        particleCount: 90,
        spread: 110,
        startVelocity: 25,
        gravity: 1,
        ticks: 180,
        origin: { y: 0.3 },
        colors: gold
      });
    }, 500);

  }, 700);
});

function createSparkles() {
    const container = document.querySelector(".sparkle-container");
  
    for (let i = 0; i < 25; i++) {
      const sparkle = document.createElement("div");
      sparkle.classList.add("sparkle");
  
      sparkle.style.left = Math.random() * 100 + "vw";
      sparkle.style.animationDuration = (4 + Math.random() * 6) + "s";
      sparkle.style.animationDelay = Math.random() * 5 + "s";
  
      container.appendChild(sparkle);
    }
  }
  
  window.addEventListener("load", createSparkles);

  function toggleVip() {
    const section = document.getElementById("vipSection");
    const btn = document.getElementById("vipBtn");
    const featBtn = document.getElementById("featBtn");
  
    const isOpening = !section.classList.contains("show");
  
    section.classList.toggle("show");
  
    if (isOpening) {
      btn.textContent = "Hide VIP Guest";
  
      // show Featuring ONLY after VIP opens
      setTimeout(() => {
        featBtn.style.display = "inline-block";
      }, 400);
  
      setTimeout(() => {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 250);
  
    } else {
      btn.textContent = "VIP GUEST";
  
      // hide everything related to Featuring
      featBtn.style.display = "none";
      document.getElementById("featSection").classList.remove("show");
      featBtn.textContent = "Featuring";
    }
  }

  function toggleFeaturing() {
    const section = document.getElementById("featSection");
    const btn = document.getElementById("featBtn");
  
    const isOpening = !section.classList.contains("show");
  
    section.classList.toggle("show");
  
    if (isOpening) {
      btn.textContent = "Hide Featuring";
  
      setTimeout(() => {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 250);
  
    } else {
      btn.textContent = "Featuring";
    }
  }
  