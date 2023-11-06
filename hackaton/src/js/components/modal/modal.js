import "./modal.css";
import artists from "./artists";

export function handleModal(stateName) {
  const $modal = $("#stateModal");
  const $modalTitle = $("#modal-state-name");
  const $modalStateInfo = $("#modal-state-info");

  $modal.css("display", "block");

  const artistForState = artists.find((artist) => artist.State === stateName);

  if (
    artistForState ||
    artistForState.Name !== "No widely recognized soul artist"
  ) {
    $modalTitle.text(artistForState.Name);
    $modalStateInfo.html(`
      <div class="modal-body">
        <img class="modal-image" src="${
          artistForState.Image
        }" alt="Artist image from ${artistForState.State}">
        <div class="modal-info">
          <p> ${artistForState.Age ? artistForState.Age : "Not available"}</p>
          <p><strong>Greatest Hit:</strong> ${
            artistForState.GreatestHit
              ? artistForState.GreatestHit
              : "Not available"
          }</p>
          <p><strong>Net Worth:</strong> ${
            artistForState.NetWorth
              ? `$${artistForState.NetWorth}M`
              : "Not available"
          }</p>
          <p><strong>Fact:</strong> ${
            artistForState.Fact ? artistForState.Fact : "Not available"
          }</p>

          <div id="playMusicButton">
            <i class="fa-solid fa-play"></i>
          </div>
        </div>
      </div>
    `);
  } else {
    $modalTitle.text(stateName);
    $modalStateInfo.text(`No artist information found for ${stateName}.`);
  }

  $(".close").on("click", () => {
    $modal.css("display", "none");
    location.reload();
  });

  $modal.on("click", (event) => {
    if (event.target === $modal[0]) {
      $modal.css("display", "none");
      location.reload();
    }
  });

  $(document).ready(function () {
    const audio = new Audio(artistForState.Music);
    let isPlaying = false;
    const playIcon = document.querySelector("#playMusicButton i");

    $("#playMusicButton").on("click", function () {
      if (isPlaying) {
        audio.pause();
        isPlaying = false;
        playIcon.classList.remove("fa-pause");
        playIcon.classList.add("fa-play");
      } else {
        audio.play();
        isPlaying = true;
        playIcon.classList.remove("fa-play");
        playIcon.classList.add("fa-pause");
      }
    });
  });
}
