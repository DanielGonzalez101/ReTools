import axios from 'https://cdn.skypack.dev/axios'

document.getElementById('add').addEventListener('click', async () => {
  const NombreCompleto = document.getElementById('NombreCompleto').value
  const Contrasena = document.getElementById('Contrasena').value
  const Correo = document.getElementById('Correo').value
  const Cedula = document.getElementById('Cedula').value

  try {
    const response = await axios.post('http://localhost:3100/api/registrar', {
      NombreCompleto,
      Contrasena,
      Correo,
      Cedula,
    })

    alert(response.data.msg)
  } catch (error) {
    console.error(error)
  }
})

document.getElementById('login').addEventListener('click', async () => {
  const Correo = document.getElementById('correo').value
  const Contrasena = document.getElementById('contrasena').value

  try {
    const response = await axios.post('http://localhost:3100/api/Login', {
      Contrasena,
      Correo,
    })

    alert("Usuario encontrado", response)
  } catch (error) {
    console.error(error)
  }
})
