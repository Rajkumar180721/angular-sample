

async function getTasks(req, res, db) {
    const result = await db('tasks').select();
    res.json({statue: 'SUCCESS', tasks: result});
}

async function addTask(req, res, db) {
    const {task} = req.body;
    try {
        const newTask = await db('tasks').insert(task).returning('*'); // returns newTask[0]
        res.json({statue: 'SUCCESS', tasks: newTask});
    } catch (error) {
        console.log('Error while inserting data', error);
        res.json({status: 'FAILED', tasks: []})
    }
}

async function deleteTask(req, res, db) {
    const {id} = req.params;
    await db('tasks').where('id', id).del()
    res.json({statue: 'SUCCESS', tasks: []});
}

async function updateReminder(req, res, db) {
    const { task } = req.body;
    try {
        await db('tasks').update({...task}).where('id', task.id)
        res.json({statue: 'SUCCESS', tasks: [task]});
    } catch (error) {
        res.json({status: 'FAILED', tasks: []})
    }
}

module.exports = {
    getTasks,
    addTask,
    deleteTask,
    updateReminder
}