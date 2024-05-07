import { Router } from 'express'
import { Usuario } from '../models/Usuario.js'

const route = Router()

route.post('/registrar', async (req, res) => {
  try {
    const nuevoUsuario = req.body

    const usuarioRegistrar = await Usuario.findOne({
      where: {
        usuario_correo: nuevoUsuario.Correo,
      },
    })

    const verificarCedula = await Usuario.findOne({
      where: {
        usuario_cedula: nuevoUsuario.Cedula,
      },
    })

    if (usuarioRegistrar) {
      return res.status(400).json({ msg: 'Error el correo esta ya registrado' })
    }
    if (verificarCedula) {
      return res.status(400).json({ msg: 'Error la cedula ya esta registrada' })
    }

    await Usuario.create({
      usuario_nombre: nuevoUsuario.NombreCompleto,
      usuario_cedula: nuevoUsuario.Cedula,
      usuario_correo: nuevoUsuario.Correo,
      usuario_contrasena: nuevoUsuario.Contrasena,
    })

    return res
      .status(201)
      .json({ msg: 'Usuario a sido registrado exitosamente' })
  } catch (error) {
    console.log(error)
    return res.status(500)
  }
})

route.post('/Login', async (req, res) => {
  const { Correo, Contrasena } = req.body

  try {
    const usuarioEncontrado = await Usuario.findOne({
      where: {
        usuario_correo: Correo,
      },
    })

    if (usuarioEncontrado) {
      if (Contrasena === usuarioEncontrado.usuario_contrasena)
        return res.sendStatus(200)
    }
    return res.sendStatus(400)
  } catch (error) {
    console.log(error)
    return res.sendStatus(500)
  }
})

export default route
