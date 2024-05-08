import axios from 'https://cdn.skypack.dev/axios'

document.getElementById('register').addEventListener('click', async () => {
  const wrapper  = document.querySelector('.wrapper');
  const name = document.getElementById('newName').value
  const password = document.getElementById('newPassword').value
  const email = document.getElementById('newEmail').value
  const cedula = document.getElementById('newCedula').value


  try {
    const response = await axios.post('http://localhost:3100/users/register', {
      name,password,email,cedula
    })
    alert(response.data)
    wrapper.classList.remove('active');
  } catch (error) {
    alert(error.response.data.message)
  }
})

document.getElementById('login').addEventListener('click', async () => {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value


  try {
    await axios.post('http://localhost:3100/users/login', {
      email,
      password
    })
    window.location.href = "productos.html"
  } catch (error) {
    alert(error.response.data.message)
  }
})
