"use strict";

const server = require("./server");

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
