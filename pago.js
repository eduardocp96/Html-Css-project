document.addEventListener("DOMContentLoaded", () => {
    const payBtn = document.querySelector(".pay");

    payBtn.addEventListener("click", () => {
      Swal.fire({
        template: "#my-template"
      });
    });
  });