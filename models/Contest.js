/**
 * Created by uroszivaljevic on 6/21/17.
 */

module.exports = function (sequelize, DataTypes) {

    var Contest = sequelize.define("Contest", {
        name: DataTypes.STRING,
        date: DataTypes.DATE,
        location: DataTypes.STRING
    });

    Contest.associate = function (models) {
        Contest.belongsToMany(models.Dog, { through: models.ContestDog, foreignKey: 'contestId', as: 'dogs'});
        Contest.belongsToMany(models.League, { through: 'ContestLeague', foreignKey: 'contestId', as: 'leagues'});
        Contest.hasMany(models.Task, { foreignKey: 'contestId', as: 'tasks'});
    };

    return Contest;
};