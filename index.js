const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome Boy and Girl')
});

app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

const users = [
    { id: 1, name: 'Joni', email: 'jonictg7@gmail.com' },
    { id: 2, name: 'Roni', email: 'roni@gmail.com' },
    { id: 3, name: 'Momi', email: 'momi@gmail.com' },
]

app.get('/users', (req, res) => {
    // Query by search filter
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(matched);
    } else {
        res.send(users);
    }

});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u=>u.id === id);
    res.send(user);
});


app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'orange']);
});

app.get('/fruits/mango/fozli', (req, res) => {
    res.send('sour fozli flavour');
});

app.listen(port, () => {
    console.log('Listening to port', port);
});
