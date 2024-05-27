const firebaseConfig = {
    apiKey: "AIzaSyCRITFAAxqCjuJiRrE9J1j9MvcTp-TpOIU",
    authDomain: "datos-de-formulario-d137b.firebaseapp.com",
    projectId: "datos-de-formulario-d137b",
    storageBucket: "datos-de-formulario-d137b.appspot.com",
    messagingSenderId: "883756622200",
    appId: "1:883756622200:web:4872ff8dabb6965055688d",
    measurementId: "G-RMVG949HM7",
  };
  
  firebase.initializeApp(firebaseConfig);
  
  const db = firebase.firestore();
  
  document.getElementById("formulario").addEventListener("submit", (event) => {
    event.preventDefault();
  
    let entradaNombre = document.getElementById("name");
    let errorNombre = document.getElementById("nameError");
  
    if (entradaNombre.value.trim() === "") {
      errorNombre.textContent = "Por favor, introduzca un nombre";
      errorNombre.classList.add("error-message");
    } else {
      errorNombre.textContent = "";
      errorNombre.classList.remove("error-message");
    }
  
    let emailEntrada = document.getElementById("email");
    let emailError = document.getElementById("emailError");
    let emailPattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailPattern.test(emailEntrada.value)) {
      emailError.textContent = "Introduci un email";
      emailError.classList.add("error-message");
    } else {
      emailError.textContent = "";
      emailError.classList.remove("error-message");
    }
    let contra = document.getElementById("password");
    let errorContra = document.getElementById("passwordError");
    let contraPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
    if (!contraPattern.test(contra.value)) {
      errorContra.textContent =
        "Introduci una contraseña con 8 caracteres, numeros, mayusculas, minusculas y caracteres especiales";
      errorContra.classList.add("error-message");
    } else {
      errorContra.textContent = "";
      errorContra.classList.remove("error-message");
    }
  
    if (
      !errorNombre.textContent &&
      !emailError.textContent &&
      !errorContra.textContent
    ) {
      db.collection("users")
        .add({
          nombre: entradaNombre.value,
          email: emailEntrada.value,
          password: contra.value,
        })
        .then((docRef) => {
          alert("El formulario se registro correctamente. ", docRef.id);
          document.getElementById("formulario").reset();
        })
    }
  });