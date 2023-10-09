const Sequelize = require('sequelize');

const seqEnv = require('../utils/database');

const User = seqEnv.define({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type : Sequelize.STRING,
        allowNull: false
    },
    email: {
        type : Sequelize.STRING,
        allowNull: false
    }
})

module.exports = User;  