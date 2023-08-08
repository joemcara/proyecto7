var DataTypes = require("sequelize").DataTypes;
var _gasto = require("./gasto");
var _usuario = require("./usuario");

function initModels(sequelize) {
  var gasto = _gasto(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);

  gasto.belongsTo(usuario, { as: "Usuario_idUsuario_usuario", foreignKey: "Usuario_idUsuario"});
  usuario.hasMany(gasto, { as: "gastos", foreignKey: "Usuario_idUsuario"});

  return {
    gasto,
    usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
