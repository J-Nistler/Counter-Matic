const form = document.getElementById('del-form')
const sub = document.getElementById('del-submit')
console.log("I'm here!")
// form.addEventListener('change', function(e) {
//     if (e.target !== e.currentTarget) {
//         console.log("click!")
//         
//     }
// });

if (document.querySelector('input[name="vendor_id"]')) {
    document.querySelectorAll('input[name="vendor_id"]').forEach((elem) => {
      elem.addEventListener("change", function(event) {
        sub.disabled = false;
      });
    });
  }