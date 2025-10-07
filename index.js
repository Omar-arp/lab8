// Cargar variables de entorno
require('dotenv').config()
const http = require('http')

// Controlador de las peticiones
function requestController(req, res) {
  console.log('Bienvenidos al curso')
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Bienvenidos al curso 🚀') // 👈 Respondemos al navegador
}

// Crear servidor
const server = http.createServer(requestController)

// Puerto asignado por Render o 3000 localmente
const PORT = process.env.PORT || 3000

// Iniciar servidor
server.listen(PORT, function () {
  console.log('Aplicación corriendo en: ' + PORT)
})
