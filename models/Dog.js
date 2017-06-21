/**
 * Created by uroszivaljevic on 6/20/17.
 */
"use strict";

module.exports = function(sequelize, DataTypes) {

    var Dog = sequelize.define("Dog", {
        name: DataTypes.STRING
    });

    Dog.associate = function (models) {
        Dog.belongsTo(models.League, { foreignKey: 'leagueId'});
        Dog.belongsToMany(models.Contest, { through: 'ContestDogs', foreignKey: 'dogId'});
    };

    return Dog;
};