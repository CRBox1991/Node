const write = require("./writePromesas");
const read = require("./readPromesas");


read.readConsole((persona)=>write.writeRead("./persona2.json", persona));
//read.readConsole2((persona)=>write.writeRead2("./persona.json", persona))