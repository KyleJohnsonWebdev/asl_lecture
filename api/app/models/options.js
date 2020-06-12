
module.exports = (sequelize, DataTypes) => {
  const Options = sequelize.define('Options', {
    id: {
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    value: DataTypes.STRING,
  }, {});

  Options.associate = (models) => {
    // associations can be defined here
    Options.belongsTo(models.Decisons, { foreignKey: 'decisionId' });
  };
  return Options;
};
