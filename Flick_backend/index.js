const server = require('./server.js');

const Sequelize = require('./Utils/database.js');

Sequelize.sync().then((res)=>{
  console.log("DB connected");
}
).catch(err =>{
  console.log(err);
});

// const PORT = process.env.PORT || 7000;
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// const email = require('./Utils/emailTemplate.js');