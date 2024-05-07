import { sequelize } from './Api/database/db.js'
import app from './Api/app.js'

const main = async () => {
  try {
    await sequelize.sync({ force: false })
    app.listen(app.get('port'), () => {
      console.log(`🔥🔥🔥 Server running on port ${app.get('port')} 🔥🔥🔥`)
    })
  } catch (err) {
    console.error(`Error trying to connect to the database: ${err}`)
  }
}

main()