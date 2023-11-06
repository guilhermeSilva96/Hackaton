import createUSAMap from "./components/map/USAMap";

const mapContainer = $(".usa-map");
const mainContainer = $('#root')

renderMap();

async function renderMap() {
  const svgNode = await createUSAMap();
  mapContainer.empty();
  mapContainer.append(svgNode);
}

const knowMore = $(".know-more-btn");

knowMore.on("click",() => {
  const newPageUrl = "/webpage/index.html"; // Adjust the URL accordingly

  // Redirect the user to the new webpage
  window.location.href = newPageUrl;
});


