


let Fname = document.querySelector("#Fname")

function myContact() {
  if (Fname.value == "") {
    event.preventDefault();
    alert("name is required.")
  }
  console.log(Fname.value);
}

