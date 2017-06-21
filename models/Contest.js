/**
 * Created by uroszivaljevic on 6/21/17.
 */

module.exports = function (sequelize, DataTypes) {

    var Contest = sequelize.define("Contest", {
        name: DataTypes.STRING
    });

    Contest.associate = function (models) {
        Contest.belongsTo(models.League, { foreignKey: 'leagueId'});
        Contest.belongsToMany(models.Dog, { through: 'ContestDogs', foreignKey: 'contestId'});
    };

    return Contest;
};