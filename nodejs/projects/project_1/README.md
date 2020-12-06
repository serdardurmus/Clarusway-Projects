Serdar Durmus
nodejs postgres project

// TODO
// MVC yapısı
// Model - Postgresql
// View - Ejs Template
// Controller - 

// RESTful API - Representational State Transfer application programming interface - içinde rest olan API
// CRUD Operation - RESTfull API yapın deniyorsa CRUD olmazsa olmaz. Çok önemli, Interview sorusudur
// Create - add user
// Read - list users
// Update - edit user
// Delete - delete user

### Hva gjorde vi?
- .gitignore oluşturduk
- npx express-generator kurduk
- npx express-generator --view ejs // .jade dosyaları silindi, ejs kullanacağız
- npm i nodemon
- npm install // eksik modülleri yükledi
- npm install sequelize  // SQL ile ilgili hususlarda sequelize'ın komutlarını kullanacağız
- npm i dotenv
- npm i pg
- "cookie-parser": "^1.4.5",
- "debug": "~2.6.9",
- "dotenv": "^8.2.0",
- "ejs": "~2.6.1",
- "express": "^4.16.4",
- "http-errors": "^1.6.3",
- "morgan": "~1.9.1",
- "nodemon": "^2.0.6",
- "pg": "^8.5.1",
- "sequelize": "^6.3.5"

### .env file
DB_USERNAME=
DB_PASSWORD=
DB_HOSTNAME=
DB_PORT=
DB_NAME=