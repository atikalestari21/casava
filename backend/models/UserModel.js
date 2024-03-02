import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Users = db.define ('users',{
    uuid:{
        type: DataTypes, stringify,
        defaultValue: DataTypes. UUIDV4,
        allowNuul: false,
        validate: {
            notEmpty: true
        }
    },
    name:{
        type: DataTypes, stringify,
        allowNuul: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    email:{
        type: DataTypes, STRING,
        allowNuul: false,
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },
    password:{
        type: DataTypes, STRING,
        allowNuul: false,
        validate: {
            notEmpty: true
        }
    },
    role:{
        type: DataTypes, STRING,
        allowNuul: false,
        validate: {
            notEmpty: true
        }
    }
    
});
export default Users;