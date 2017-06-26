/**
 * Created by uroszivaljevic on 6/20/17.
 */
"use strict";

module.exports = function(sequelize, DataTypes) {

    var Dog = sequelize.define("Dog", {
        name: DataTypes.STRING,
        dateOfBirth: DataTypes.DATE,
        breed: DataTypes.STRING,
        ownerName: DataTypes.STRING
    });

    Dog.associate = function (models) {
        Dog.belongsTo(models.League, { foreignKey: 'leagueId'});
        Dog.belongsToMany(models.Contest, { through: models.ContestDog, foreignKey: 'dogId', as: 'contests'});
        Dog.belongsToMany(models.Task, { through: models.DogTask, foreignKey: 'dogId', as: 'tasks'});
    };

    return Dog;
};