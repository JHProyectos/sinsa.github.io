// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileMenu = document.getElementById("mobileMenu")

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")

      // Change icon
      const icon = mobileMenuBtn.querySelector("i")
      if (icon.classList.contains("fa-bars")) {
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-times")
      } else {
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
      }
    })
  }

  // Set current year in footer
  const currentYearElements = document.querySelectorAll("#currentYear")
  const currentYear = new Date().getFullYear()

  currentYearElements.forEach((element) => {
    element.textContent = currentYear
  })

  // Print functionality for report page
  const printBtn = document.querySelector(".btn-outline.btn-sm")
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print()
    })
  }

  // Filter functionality for projects page
  const filterCheckboxes = document.querySelectorAll(".filter-checkbox")
  if (filterCheckboxes.length > 0) {
    filterCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        // This would be where you'd implement actual filtering
        console.log("Filter changed:", checkbox.nextElementSibling.textContent.trim())
      })
    })
  }
})

