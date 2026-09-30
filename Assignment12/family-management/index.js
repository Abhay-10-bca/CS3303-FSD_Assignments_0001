const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const User = require('./models/User');
const Child = require('./models/Child');

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'ejs');

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch((error) => {
        console.log('MongoDB connection error:', error);
    }); 


app.post('/users', async (req, res) => {
    try {
        const { firstName, lastName, email, phone } = req.body;

        const user = await User.create({
            firstName,
            lastName,
            email,
            phone
        });

        res.status(201).json({
            message: 'User created successfully',
            user
        });
    } catch (error) {
        res.status(400).json({
            message: 'Failed to create user',
            error: error.message
        });
    }
});

app.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).sendFile(__dirname + '/views/404.html');
        }

        const children = await Child.find({
            parentId: user._id
        });

        res.render('profile', {
            user,
            children
        });
    } catch (error) {
        res.status(400).send('Invalid User ID');
    }
});

app.post('/users/:id/children', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).send('User Not Found');
        }

        const { firstName, lastName, age, email } = req.body;

        const child = await Child.create({
            firstName,
            lastName,
            age,
            email,
            parentId: user._id
        });

        res.status(201).json({
            message: 'Child added successfully',
            child
        });
    } catch (error) {
        res.status(400).json({
            message: 'Failed to add child',
            error: error.message
        });
    }
});

app.get('/users/:id/children', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).send('User Not Found');
        }

        const children = await Child.find({
            parentId: user._id
        });

        if (children.length === 0) {
            return res.send('No children found for this user.');
        }

        res.render('child', {
            user,
            children
        });
    } catch (error) {
        res.status(400).send('Invalid User ID');
    }
});

app.get('/users/:id/children/:childId', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).send('User Not Found');
        }

        const child = await Child.findById(req.params.childId);

        if (!child) {
            return res.status(404).send('Child Not Found');
        }

        if (child.parentId.toString() !== user._id.toString()) {
            return res.status(404).send('Child Not Found');
        }

        res.render('child', {
            user,
            children: [child]
        });

    } catch (error) {
        res.status(400).send('Invalid User ID or Child ID');
    }
});

app.patch('/children/:id', async (req, res) => {
    try {
        const child = await Child.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!child) {
            return res.status(404).send('Child Not Found');
        }

        res.json({
            message: 'Child updated successfully',
            child
        });
    } catch (error) {
        res.status(400).json({
            message: 'Failed to update child',
            error: error.message
        });
    }
});

app.delete('/children/:id', async (req, res) => {
    try {
        const child = await Child.findByIdAndDelete(req.params.id);

        if (!child) {
            return res.status(404).send('Child Not Found');
        }

        res.json({
            message: 'Child deleted successfully'
        });
    } catch (error) {
        res.status(400).json({
            message: 'Invalid Child ID',
            error: error.message
        });
    }
});

app.get('/users/:id/add-child', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).send('User Not Found');
        }

        res.render('add-child', {
            user
        });

    } catch (error) {
        res.status(400).send('Invalid User ID');
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});