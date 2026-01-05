import { Hono } from 'hono'
import users from '@/users/users.routes';

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})


app.route('/users', users);



export default app
