const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
app.use(bodyParser.json())
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'ex_121',
	database: 'marvels',
})
db.connect(err => {
	if (err) throw err
	console.log('Connected to database')
})
app.get('/characters', (req, res) => {
	db.query('SELECT * FROM books', (err, results) => {
		if (err) return res.status(500).send(err)
		res.json(results)
	})
})

app.get('/characters/:id', (req, res) => {
	const id = req.params.id
	db.query('SELECT * FROM books WHERE id = ?', [id], (err, results) => {
		if (err) return res.status(500).send(err)
		if (results.length === 0) return res.status(404).send('Book not found')
		res.json(results[0])
	})
})

const PORT = 3001
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`)
})
