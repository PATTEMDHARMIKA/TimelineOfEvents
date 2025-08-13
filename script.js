document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.getElementById("timeline");
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("close");

  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalDescription = document.getElementById("modal-description");
  const modalCategory = document.getElementById("modal-category");
  const modalYear = document.getElementById("modal-year");

  fetch("data/events.json")
    .then(res => res.json())
    .then(events => {
      events.forEach(event => {
        const marker = document.createElement("div");
        marker.className = "marker";
        marker.textContent = `${event.year} - ${event.title}`;

        marker.addEventListener("click", () => {
          modalTitle.textContent = event.title;
          modalImage.src = event.imageURL;
          modalDescription.textContent = event.description;
          modalCategory.textContent = event.category;
          modalYear.textContent = event.year;
          modal.style.display = "flex"; // flex to center modal
        });

        timeline.appendChild(marker);
      });
    })
    .catch(err => console.error("Error loading events:", err));

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
