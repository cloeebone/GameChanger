const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("primary-nav");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

function toggleProgram(programId) {
        const detailDiv = document.getElementById(`program-detail-${programId}`);
        if (detailDiv.classList.contains('hidden')) {
            detailDiv.classList.remove('hidden');
        } else {
            detailDiv.classList.add('hidden');
        }
    }