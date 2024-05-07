import { DataTypes } from 'sequelize'
import { sequelize } from '../database/db.js'

export const Usuario = sequelize.define(
  'Usuario',
  {
    usuario_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    usuario_nombre: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    usuario_correo: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
    },
    usuario_contrasena: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    usuario_cedula: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
  },
  { timestamps: false }
)
