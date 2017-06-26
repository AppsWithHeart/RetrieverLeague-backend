/**
 * Created by uroszivaljevic on 6/26/17.
 */

module.exports = function (sequelize, DataTypes) {

    var ContestDog = sequelize.define('ContestDog', {
        result: DataTypes.INTEGER
    });

    return ContestDog;
};