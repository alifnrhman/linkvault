import pool from "../db.js";

export const getLinks = async (req, res) => {
	try {
		const result = await pool.query("SELECT * FROM links ORDER BY created_at DESC");
		res.json(result.rows);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

export const createLink = async (req, res) => {
	const { url, title, description, image } = req.body;
	try {
		const result = await pool.query("INSERT INTO links (url, title, description, image) VALUES ($1, $2, $3, $4) RETURNING *", [url, title, description, image]);
		res.status(201).json(result.rows[0]);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
