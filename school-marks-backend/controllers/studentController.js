const Student = require('../models/studentModel');

exports.getAllStudents = async (req, res, next) => {
    try {
        const { name, address } = req.query; // ดึงค่าจาก Query Params
        const filters = { name, address };

        const students = await Student.getAll(filters);
        res.json(students);
    } catch (error) {
        next(error);
    }
};

exports.getStudentById = async (req, res, next) => {
    try {
        const student = await Student.getById(req.params.id);
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.json(student);
    } catch (error) {
        next(error);
    }
};

exports.createStudent = async (req, res, next) => {
    try {
        const id = await Student.create(req.body);
        res.status(201).json({ message: 'Student created', id });
    } catch (error) {
        next(error);
    }
};

exports.updateStudent = async (req, res, next) => {
    try {
        await Student.update(req.params.id, req.body);
        res.json({ message: 'Student updated' });
    } catch (error) {
        next(error);
    }
};

exports.deleteStudent = async (req, res, next) => {
    try {
        await Student.delete(req.params.id);
        res.json({ message: 'Student deleted' });
    } catch (error) {
        next(error);
    }
};

exports.summaryStudent = async (req, res, next) => {
    try {
        const { name, address } = req.query; // ดึงค่าจาก Query Params
        const filters = { name, address };

        const studentSummary = await Student.summary(filters);
        res.json(studentSummary);
    } catch (error) {
        next(error);
    }
};
