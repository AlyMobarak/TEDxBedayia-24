document.addEventListener("click", (element) => {
  let dropdown = document.getElementById("location-dropdown");
  if (
    !dropdown?.classList.contains("options-hidden") &&
    element.target.parentElement?.id != "location-opener"
  ) {
    dropdown?.classList.add("options-hidden");
    document.getElementById("location-icon")?.classList.toggle("rotate-180");
  }

  let channel = document.getElementById("channel-dropdown");
  if (
    !channel?.classList.contains("options-hidden") &&
    element.target.parentElement?.id != "channel-opener"
  ) {
    channel?.classList.add("options-hidden");
    document.getElementById("channel-icon")?.classList.toggle("rotate-180");
  }
});
