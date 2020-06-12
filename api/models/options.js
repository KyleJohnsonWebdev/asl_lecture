module.exports = (sequelize, DataTypes) => {
  const Options = sequelize.define('Options', {
    id: {
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID,
      validate: {
        isUUID: { args: 4, msg: 'ID not valid, please try again.' },
      },
    },
    value: {
      type: DataTypes.String,
      validate: {
        len: { args: [3, 500], msg: 'Options value is required.' },
      },
    },
  }, {});

  Options.associate = (models) => {
    // associations can be defined here
    Options.belongsTo(models.Decisions, { foreignKey: 'decisionId' });
  };

  return Options;
};
