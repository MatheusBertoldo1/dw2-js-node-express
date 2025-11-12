import connection from "../config/sequelize-config.js";
import { Sequelize } from "sequelize";

const Clientes = connection.define('clientes', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default Clientes
