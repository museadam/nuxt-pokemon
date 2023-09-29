import { eventHandler } from "h3";
export default eventHandler((event) => {
  console.log("New request: " + event.node.req.url);
});
