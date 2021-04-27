module.exports.Tutorial = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Tutorial;
};

module.exports.users = (sequelize, Sequelize) => {
  const users = sequelize.define("users", {
    username: {
      type: Sequelize.STRING
    },
    pswrd: {
      type: Sequelize.STRING
    }
  });

  return users;
};
