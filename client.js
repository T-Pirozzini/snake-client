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

  // name your snake && move: up
  conn.on("connect", () => {
    conn.write("Name: TEE");    
    // conn.write("Move: up");    
  });

  // handle incoming data
  conn.on("data", (data) => {
    console.log("Server: ", data);
  });  

  // move up: with setTimeout
  // let delay = 0;
  // let count = 100;
  // for (i = 0; i <= count; i++){
  //   conn.on("connect", (data) => {
  //     setTimeout(() => {
  //       conn.write(`Move: up`)}, delay += 50);        
  //   });
  // };

  // move up: with setInterval
  // let delay = 0;
  // let count = 10;
  // for (i = 0; i <= count; i++){
  //   conn.on("connect", (data) => {
  //     setInterval(() => {
  //       conn.write(`Move: up`)}, delay += 50);        
  //   });
  // };

  // interpret incoming data as text
  conn.setEncoding("utf8");  

  return conn;
};


connect();


module.exports = { 
  connect
};