const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('breed', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        // set(value){
        //   return this.setDataValue("name", value.charAt(0).toUpperCase() + value.slice(1))
        // }
    },
    heightMin: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    heightMax: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weightMin: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    weightMax: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lifeMin: {
      type: DataTypes.INTEGER
    },
    lifeMax:{
      type: DataTypes.INTEGER
    },
    img: {
      type: DataTypes.STRING,
      defaultValue: "https://i.pinimg.com/736x/b2/4a/69/b24a69c17a1c581bc839c71d889f15f5.jpg",
    },
    createdDB: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    },
  },
  {timestamps: false}
  );
};