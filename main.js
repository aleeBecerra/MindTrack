// validación de formulario
const form = document.querySelector('form[name="frm"]');
form.addEventListener("submit", (event) => {
  const fname = form.elements["name"].value;
  const flastname = form.elements["lastname"].value;
  const fphone = form.elements["phone"].value;
  const fmail = form.elements["email"].value;
  const fpasssword = form.elements["password"].value;

  if (!fname || !flastname || !fphone || !fmail || !fpasssword) {
    event.preventDefault();
    alert("Por favor, complete todos los campos");
  } else if (!validateEmail(fmail)) {
    event.preventDefault();
    alert("Por favor, ingrese un correo válido");
  }
});

function validateEmail(fmail) {
  const re = /^[a-zA-Z0-9._]+@[a-zA-Z0-9._]\.[a-zA-Z]/;
  return re.test(String(fmail).toLowerCase());
}
