/**
 * Created by uroszivaljevic on 9/21/17.
 */

module.exports = function (sequelize, DataTypes) {

    var ContactMessage = sequelize.define("ContactMessage", {
        email: DataTypes.STRING,
        message: DataTypes.STRING,
    });
    return ContactMessage;
};