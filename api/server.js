import mysql2 from 'mysql2'
import express from 'express'
import cors from 'cors'

const connection = mysql2.createConnection({
	host: 'localhost',
	database: 'marvels_db',
	user: 'root',
	password: '123456',
})

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json()) // Добавили middleware для парсинга JSON

app.listen(PORT, () => {
	console.log('Server is running on Port:' + PORT)
	connection.connect(err => {
		if (err) throw err
		console.log('Database connected')
	})
})

app.get('/characters', (req, res) => {
	const sql_query = `SELECT * FROM marvels_table`
	connection.query(sql_query, (err, result) => {
		if (err) throw err
		res.send(result)
	})
})

app.post('/characters', (req, res) => {
	const { name, fullName } = req.body
	console.log(name, fullName)

	if (!name || !fullName) {
		return res.status(400).send('Все поля (name, fullName) обязательны')
	}

	const sql_query = `INSERT INTO marvels_table (name, fullName) VALUES (?, ?)`

	connection.query(sql_query, [name, fullName], (err, result) => {
		if (err) {
			console.error('Ошибка при добавлении персонажа:', err)
			return res.status(500).send('Ошибка при добавлении персонажа')
		}
		res
			.status(201)
			.send({ message: 'Персонаж успешно добавлен', id: result.insertId })
	})
})
