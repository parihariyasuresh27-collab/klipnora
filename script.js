
/* =====================================
   KLIPNORA - MAIN JAVASCRIPT
   ===================================== */

document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to Klipnora!");

    // 1. Dynamic Copyright Year
    const yearElements = document.querySelectorAll("#current-year");
    const currentYear = new Date().getFullYear();
    yearElements.forEach(function (el) {
        el.textContent = currentYear;
    });

    // 2. Smooth Scrolling for in-page anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");

            if (targetId && targetId.length > 1) {
                const target = document.querySelector(targetId);
                if (target) {
                    event.preventDefault();
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    // 3. Pricing Monthly / Yearly Switcher
    const billingToggle = document.getElementById("billing-toggle");
    const monthlyLabel = document.getElementById("monthly-label");
    const yearlyLabel = document.getElementById("yearly-label");
    const proPrice = document.getElementById("pro-price");
    const proPeriod = document.getElementById("pro-period");
    const agencyPrice = document.getElementById("agency-price");
    const agencyPeriod = document.getElementById("agency-period");

    if (billingToggle && proPrice && agencyPrice) {
        let isYearly = false;

        function updatePricing() {
            if (isYearly) {
                billingToggle.classList.add("yearly");
                monthlyLabel.classList.remove("active");
                yearlyLabel.classList.add("active");

                // Yearly prices (20% discount)
                proPrice.textContent = "15";
                proPeriod.textContent = "/mo (billed annually)";
                agencyPrice.textContent = "39";
                agencyPeriod.textContent = "/mo (billed annually)";
            } else {
                billingToggle.classList.remove("yearly");
                monthlyLabel.classList.add("active");
                yearlyLabel.classList.remove("active");

                // Monthly prices
                proPrice.textContent = "19";
                proPeriod.textContent = "/month";
                agencyPrice.textContent = "49";
                agencyPeriod.textContent = "/month";
            }
        }

        billingToggle.addEventListener("click", function () {
            isYearly = !isYearly;
            updatePricing();
        });

        if (monthlyLabel) {
            monthlyLabel.addEventListener("click", function () {
                isYearly = false;
                updatePricing();
            });
        }

        if (yearlyLabel) {
            yearlyLabel.addEventListener("click", function () {
                isYearly = true;
                updatePricing();
            });
        }
    }

    // 4. FAQ Accordion
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(function (item) {
        const question = item.querySelector(".faq-question");
        if (question) {
            question.addEventListener("click", function () {
                const isOpen = item.classList.contains("open");

                // Optional: Close all other open items
                faqItems.forEach(function (otherItem) {
                    otherItem.classList.remove("open");
                });

                // Toggle current item
                if (!isOpen) {
                    item.classList.add("open");
                }
            });
        }
    });

});
