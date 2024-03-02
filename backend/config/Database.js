import {Sequelize} from "sequelize";

const db = new Sequelize('auth_db', 'root', '', {
    host: "localhost",
    dialectOptions: "mysql"
});

export default db;