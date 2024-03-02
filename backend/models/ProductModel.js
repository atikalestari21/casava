import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const {DataTypes} = Sequelize;

const Products = db.define ('product',{
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
    
    price:{
        type: DataTypes, INTEGER,
        allowNuul: false,
        validate: {
            notEmpty: true
        }
    },
    userID:{
        type: DataTypes, INTEGER,
        allowNuul: false,
        validate: {
            notEmpty: true
        }
    }
},{
    freezeTableName: true
});

Users.hasMany(products);
Products.belongsTo(Users, {foreignKey:úserId });

export default Products;