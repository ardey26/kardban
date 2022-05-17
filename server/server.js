const express = require('express');
const cors = require('cors');
const pool = require('./db')
const app = express();

// MIDDLEWARE 
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
});


// ROUTES
// Main

app.get('/', (req, res) => {
    res.send('Working!');
})

// Create
app.post('/todos', async (req, res) => {
    try {
        const { description } = req.body

        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]
        );


        console.log(newTodo)
    } catch (err) {
        console.error(err.message);
    }
});

// Get All

app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo ORDER BY todo.todo_id DESC");

        res.json(allTodos.rows)
    } catch (err) {
        console.error(err.message);
    }
})


// Get One
app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params
        const todo = await pool.query("SELECT * FROM todo WHERE todo.todo_id = $1", [id])
        console.log(todo)    
        res.json(todo.rows);
    } catch (err) {
        console.error(err.message);
    }
})

// Update

app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;

        const updateTodo = await pool.query(
            "UPDATE todo SET description = $1 WHERE todo_id = $2", 
        [description, id])

        res.json({"message": `todo ${id} was edited.`})
    } catch (err) {
        console.error(err.message)
    }
})

// Delete
app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query(
            "DELETE FROM todo WHERE todo.todo_id = $1",
            [id])

        res.json({"message": "todo was deleted."})
    } catch (err) {
        console.error(err.message)
        
    }
})


