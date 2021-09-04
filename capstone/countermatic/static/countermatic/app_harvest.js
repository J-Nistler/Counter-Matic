// -----------------------------------------------------------------//
// Report List
// -----------------------------------------------------------------//

const report_dropdown = document.getElementById("report-drop");
const vendor_dropdown = document.getElementById("vendor-drop");
const submit_button = document.getElementById("sub_btn");
const vendorHeading = document.getElementById("vendorHeading");
const reportHeading = document.getElementById("reportHeading");

vendor_dropdown.addEventListener("change", (e) => {
  let vendor_id = e.target.value;
  if (vendor_id == "Select a Vendor") {
    report_dropdown.textContent = "";
    let option = document.createElement("option");
    option.textContent = "Select a Report";
    report_dropdown.appendChild(option);
  } else {
    vendorHeading.style.color = "var(--bs-body-text-align)"
    getVendors(vendor_id);
  }
});

function getVendors(vendor_id) {
  fetch("http://localhost:8000/countermatic/get-vendors/")
    .then((data) => data.json())
    .then((vendors) => getVendorParams(vendors, vendor_id));
}

function getVendorParams(vendors, vendor_id) {
  for (let i = 0, len = vendors["vendors"].length; i < len; i++) {
    if (vendors["vendors"][i]["id"] == vendor_id) {
      fetchReportOptions(vendors["vendors"][i]);
    }
  }
}

async function fetchReportOptions(vendor) {
  let base_url = vendor.base_url;
  let request_url = base_url + "reports?";

  // Add parameters to request url
  for (let [key, value] of Object.entries(vendor)) {
    if (key == "id" | key == "base_url"){
    }
    else {
      request_url += key + "=" + value + "&"
    }
  }

  // Remove trailing "&" character in request url
  request_url = request_url.substring(0, request_url.length - 1);

  const data = await fetch(request_url, {
      headers: {
        Accept: 'application/json'
      },
    })
  const response = await data.json()
  renderReportOptions(response)
}

function renderReportOptions(reports) {
  report_dropdown.textContent = "";
  console.log(reports[0].Report_ID.toUpperCase() + " - " + reports[0].Report_Name)
  for (let i = 0, len = reports.length; i < len; i++) {
    let option = document.createElement("option");
    option.textContent = reports[i].Report_ID.toUpperCase() + " - " + reports[i].Report_Name;
    option.value = reports[i].Report_ID;
    report_dropdown.appendChild(option);
  }
  report_dropdown.disabled = false;
}

function validateSubmit() {
  if (vendor_dropdown.value == "Select a Vendor") {
      vendorHeading.style.color = "red"
      vendor_dropdown.focus()
      return false;
  }
  else {
      document.forms["harvestForm"].submit();
      submit_button.disabled = true;
      submit_button.textContent = "";
      let span = document.createElement("span");
      span.className = "spinner-border spinner-border-sm";
      span.setAttribute("role", "status")
      submit_button.textContent = "Loading...  "
      submit_button.appendChild(span);
  }
}
