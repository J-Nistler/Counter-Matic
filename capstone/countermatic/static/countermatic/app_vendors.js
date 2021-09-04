const form = document.getElementById('del-form')
const sub = document.getElementById('del-submit')

// Enables delete button upon selection of vendor
if (document.querySelector('input[name="vendor_id"]')) {
    document.querySelectorAll('input[name="vendor_id"]').forEach((elem) => {
      elem.addEventListener("change", function(event) {
        sub.disabled = false;
      });
    });
  }