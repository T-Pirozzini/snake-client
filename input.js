const { MOVE_UP, MOVE_RIGHT, MOVE_DOWN, MOVE_LEFT, TAUNT_1,TAUNT_2 } = require("./constants");
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  
  const handleUserInput = key => {
    if (key === '\u0003') {
      process.exit();
    };
    if (key === MOVE_UP) {
      conn.write("Move: up");
    };
    if (key === MOVE_RIGHT) {
      conn.write("Move: right");
    };
    if (key === MOVE_DOWN) {
      conn.write("Move: down");
    };
    if (key === MOVE_LEFT) {
      conn.write("Move: left");
    };
    if (key === TAUNT_1) {
      conn.write("Say: I'm soooo fast!!");
    };
    if (key === TAUNT_2) {
      conn.write("Say: Bring it on!!");
    };
  };
    
  stdin.on("data", (data) => {
    handleUserInput(data);
  });  
  return stdin;
};

module.exports = { setupInput };