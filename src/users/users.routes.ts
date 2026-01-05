import { Hono } from "hono";

const users = new Hono();

users.get("/", (c) => {
  return c.json({ message: "Users route" });
});

export default users;