const write = require("./writeAndReadObjet");
const read = require("./readConsole");


read.readConsole((persona)=>write.writeAndRead("./persona2.json", persona))
