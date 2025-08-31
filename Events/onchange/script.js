// get references
const countrySelect = document.getElementById("countrySelect");
const result = document.getElementById("result");

// add onchange event
countrySelect.addEventListener("change", function() {
  let country = countrySelect.value;

  if (country) {
    result.textContent = "You selected: " + country.charAt(0).toUpperCase() + country.slice(1);
  } else {
    result.textContent = "";
  }
});
