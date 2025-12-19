const openBtn = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close-modal");

// Open modal
openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Close modal on close button
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside content
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
