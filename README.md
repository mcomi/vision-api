#Proyecto armado para clases de Javascript.

Crear dentro de config/ el archivo env.js para configurar las credenciales de la base de datos.

```
const env = {
database: "vision",
username: "user",
password: "pass",
host: "localhost",
dialect: "mysql",

port: 3306,
pool: {
max: 5,
min: 0,
acquire: 30000,
idle: 10000
}
};

module.exports = env;
```

Para instalar las dependencias usar el comando `npm install`

Para correr el proyecto usar el comando `npm run dev`
