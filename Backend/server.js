
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const knex = require('knex');
const { getTasks, addTask, deleteTask, updateReminder } = require('./Controller/task');

const dbCon = {
  host : 'genral-purpose.cvkbs6b9xaro.ap-south-1.rds.amazonaws.com',
  port : 5432,
  user : 'postgres',
  password : '258babusenthi',
  database : 'Angular_sample'
};
const PORT = 5000;

const db = knex({
  client: 'pg',
  connection: dbCon
});
console.log('db connected');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (_, res) => res.send('Hi, this is a test servre'))


app.get('/tasks', (req, res) => getTasks(req, res, db));
app.post('/tasks', (req, res) => addTask(req, res, db));
app.delete('/tasks/:id', (req, res) => deleteTask(req, res, db));
app.put('/tasks', (req, res) => updateReminder(req, res, db));

app.listen(PORT, () => {
  console.log('App is running on PORT', PORT);
});