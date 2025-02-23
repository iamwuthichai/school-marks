const db = require('../config/database');

class Student {
    static async getAll(filters = {}) {
        let query = 'SELECT * FROM students WHERE 1=1';
        const values = [];

        if (filters.name) {
            query += ' AND name LIKE ?';
            values.push(`%${filters.name}%`);
        }
        if (filters.address) {
            query += ' AND address LIKE ?';
            values.push(`%${filters.address}%`);
        }

        const [rows] = await db.query(query, values);
        return rows;
    }

    static async getById(id) {
        const [rows] = await db.query('SELECT * FROM students WHERE id = ?', [id]);
        return rows[0];
    }

    static async create(data) {
        const { name, age, address, marks, status } = data;

        const [result] = await db.query(
            'INSERT INTO students (name, age, address, marks, status) VALUES (?, ?, ?, ?, ?)',
            [name, age, address, marks, status]
        );
        return result.insertId;
    }

    static async update(id, data) {
        const { name, age, address, marks, status } = data;
        await db.query(
            'UPDATE students SET name=?, age=?, address=?, marks=?, status=? WHERE id=?',
            [name, age, address, marks, status, id]
        );
    }

    static async delete(id) {
        await db.query('DELETE FROM students WHERE id=?', [id]);
    }

    static async summary(filters = {}) {
        let query = `
            SELECT 
                COUNT(id) AS student_total,
                SUM(CASE WHEN status = 'PASS' THEN 1 ELSE 0 END) AS pass_count,
                SUM(CASE WHEN status = 'NO PASS' THEN 1 ELSE 0 END) AS no_pass_count
            FROM students
            WHERE 1=1
        `;

        const values = [];

        // Apply filters dynamically
        if (filters.name) {
            query += ' AND name LIKE ?';
            values.push(`%${filters.name}%`);
        }
        if (filters.address) {
            query += ' AND address LIKE ?';
            values.push(`%${filters.address}%`);
        }
        if (filters.status) {
            query += ' AND status = ?';
            values.push(filters.status);
        }
        if (filters.minMarks) {
            query += ' AND marks >= ?';
            values.push(filters.minMarks);
        }
        if (filters.maxMarks) {
            query += ' AND marks <= ?';
            values.push(filters.maxMarks);
        }

        try {
            const [results] = await db.query(query, values);
            const { student_total, pass_count, no_pass_count } = results[0];

            // Calculate percentage of pass students
            const averagePassNoPass = student_total ? (pass_count / student_total) * 100 : 0;

            return {
                student_total: parseInt(student_total),
                pass_count: parseInt(pass_count),
                no_pass_count: parseInt(no_pass_count),
                average_pass_nopass: parseFloat(averagePassNoPass.toFixed(2)),
            };
        } catch (err) {
            throw new Error('Error fetching summary: ' + err.message);
        }
    }

}

module.exports = Student;
