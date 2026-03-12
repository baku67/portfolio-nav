const btnV1 = document.getElementById("btn-v1");
const btnV2 = document.getElementById("btn-v2");

const PORTFOLIO_V1_URL = "https://portfolio-v2-sooty-six-18.vercel.app";
const PORTFOLIO_V2_URL = "https://portfolio-react-sand-kappa.vercel.app";

btnV1?.addEventListener("click", () => {
  window.location.href = PORTFOLIO_V1_URL;
});

btnV2?.addEventListener("click", () => {
  window.location.href = PORTFOLIO_V2_URL;
});
