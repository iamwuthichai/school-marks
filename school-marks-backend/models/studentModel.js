const db = require('../config/database');

class Student {
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM students');
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

    static async summary() {
        const query = `
          SELECT 
            COUNT(id) AS student_total,
            SUM(CASE WHEN status = 'PASS' THEN 1 ELSE 0 END) AS pass_count,
            SUM(CASE WHEN status = 'NO PASS' THEN 1 ELSE 0 END) AS no_pass_count
          FROM students;
        `;

        try {
            const [results] = await db.query(query);
            const totalStudents = results[0].student_total;
            const passCount = results[0].pass_count;
            const noPassCount = results[0].no_pass_count;
            const averagePassNoPass = (totalStudents === 0) ? 0 : (passCount / totalStudents) * 100;

            return {
                student_total: parseInt(totalStudents),
                pass_count: parseInt(passCount),
                no_pass_count: parseInt(noPassCount),
                average_pass_nopass: parseFloat(averagePassNoPass.toFixed(2))
            };
        } catch (err) {
            throw new Error('Error fetching summary: ' + err.message);
        }
    }

}

module.exports = Student;
