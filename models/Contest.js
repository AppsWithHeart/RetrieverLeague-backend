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
        Contest.belongsToMany(models.Dog, { through: models.ContestDog, foreignKey: 'contestId'});
        Contest.hasMany(models.Task, { foreignKey: 'contestId'});
    };

    return Contest;
};