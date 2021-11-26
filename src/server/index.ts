import express from 'express';
import { groceries, lists } from './routes';

const app = express();

app.use(express.json());

app.get('/groceries', groceries.fetchGroceries);
app.get('/groceries/:id', groceries.fetchGrocery);
app.delete('/groceries/:id', groceries.removeGrocery);
app.post('/groceries/:id', groceries.createGrocery);
app.patch('/groceries/:id', groceries.updateGrocery);

app.get('/lists', lists.fetchLists);
app.get('/lists/:id', lists.fetchList);

app.listen(3001);
