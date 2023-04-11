//Like Function
function unlikeFunction(clicked_id) {
  document.getElementById(clicked_id).className =
    "position-absolute bx bx-bookmark like_icon";
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Kelas telah Terhapus",
    showConfirmButton: false,
    timer: 1000,
  });

  document.getElementById(clicked_id - 1).remove();
}

// function likedFunction(clicked_id) {
//   document.getElementById(clicked_id).className =
//     "position-absolute bx bx-bookmark like_icon";
//   document.getElementById(clicked_id).id = --clicked_id;
//   Swal.fire({
//     position: "top-end",
//     icon: "success",
//     title: "Kelas telah Terhapus",
//     showConfirmButton: false,
//     timer: 1000,
//   });
//   document
//     .getElementById(clicked_id)
//     .setAttribute("onClick", "likeFunction(this.id)");
// }
