const js=require("json-server");
const server=js.create();
const router=js.router("db.json");
const mv=js.defaults();
const port=process.env.PORT||4000;

server.use(mv);
server.use(router);
server.listen(port);