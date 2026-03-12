const btnV1 = document.getElementById("btn-v1");
const btnV2 = document.getElementById("btn-v2");

const PORTFOLIO_V1_URL = "https://portfolio-v2-sooty-six-18.vercel.app";
const PORTFOLIO_V2_URL = "https://portfolio-react-sand-kappa.vercel.app";

const cards = [btnV1, btnV2].filter(Boolean);

function setLoadingState(activeButton) {
  document.body.classList.add("is-loading");

  cards.forEach((card) => {
    const isActive = card === activeButton;
    card.disabled = true;
    card.classList.toggle("is-loading", isActive);
    card.setAttribute("aria-busy", isActive ? "true" : "false");
  });
}

function setupRedirect(button, url) {
  button?.addEventListener("click", () => {
    setLoadingState(button);

    requestAnimationFrame(() => {
      setTimeout(() => {
        window.location.assign(url);
      }, 80);
    });
  });
}

setupRedirect(btnV1, PORTFOLIO_V1_URL);
setupRedirect(btnV2, PORTFOLIO_V2_URL);
