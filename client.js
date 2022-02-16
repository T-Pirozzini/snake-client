const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  // connect to server
  conn.on("connect", (connect) => {
    console.log("New Player connected to Game Server");
  });

  // name your snake
  conn.on("connect", () => {
    conn.write(`Name: TSP`);
  });

  // handle incoming data
  conn.on("data", (data) => {
    console.log(data);
  });  

  // interpret incoming data as text
  conn.setEncoding("utf8");  

  return conn;
};


connect();


module.exports = { 
  connect
};