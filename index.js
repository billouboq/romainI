"use strict";

const server = require("./server");
const config = require("config");

const PORT = config.get("server.port");

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
