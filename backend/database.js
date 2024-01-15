const dbConnection = require("./sqlite");

dbConnection
    .getDbConnection()
    .then((db) => {
        init(db);
    })
    .catch((err) => {
        console.log(err);
        throw err;
    });

let _db;

function init(db) {
    _db = db;
}

const knex_db = require("./db-config");

const dbinitialize = async () => {
    testBase.resetDatabase(knex_db);
}

const readTeachers = async () => {
<<<<<<< HEAD
    const sql = 'SELECT * FROM teacher'
=======
    const sql = `SELECT * FROM dummyData`
>>>>>>> parent of fec8f27 (update backend code)
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const readTeacherInfo = async (id) => {
<<<<<<< HEAD
    const sql = 'SELECT * FROM teacher WHERE id = ?'
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id])
            .then((teacher) => {
                resolve(teacher);
=======
    const sql = `SELECT * FROM dummyData`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
>>>>>>> parent of fec8f27 (update backend code)
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const addTeacher = async (id, name, age) => {
<<<<<<< HEAD
    const sql = 'INSERT INTO teacher(id,name,age) values (?, ?, ?)'
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id, name, age])
            .then(() => {
                resolve({status: "Successfully inserted Teacher"})
=======
    const sql = `SELECT * FROM dummyData`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
>>>>>>> parent of fec8f27 (update backend code)
            })
            .catch((error) => {
                reject(error);
            });
    });
}


const updateTeacher = async (name, age, id) => {
<<<<<<< HEAD
    const sql = 'UPDATE teacher SET name=?, age=? WHERE id=?'
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [name, age, id])
            .then(() => {
                resolve({status: "Successfully updated Teacher"})
=======
    const sql = `SELECT * FROM dummyData`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
>>>>>>> parent of fec8f27 (update backend code)
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const deleteTeacher = async (id) => {
<<<<<<< HEAD
    const sql = 'DELETE FROM teacher WHERE id = ?'
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id])
            .then(() => {
                resolve({status: "Successfully deleted Teacher"})
=======
    const sql = `SELECT * FROM dummyData`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
>>>>>>> parent of fec8f27 (update backend code)
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const readStudents = async () => {
<<<<<<< HEAD
    const sql = 'SELECT * FROM student'
=======
    const sql = `SELECT * FROM dummyData`
>>>>>>> parent of fec8f27 (update backend code)
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const readStudentInfo = async (id) => {
<<<<<<< HEAD
    const sql = 'SELECT * FROM student WHERE id = ?'
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id])
            .then((student) => {
                resolve(student);
=======
    const sql = `SELECT * FROM dummyData`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
>>>>>>> parent of fec8f27 (update backend code)
            })
            .catch((error) => {
                reject(error);
            });
    });
}

<<<<<<< HEAD

const addStudent = async (id, name, age, hometown) => {
    const sql = 'INSERT INTO student(id, name, age, hometown) VALUES (?, ?, ?, ?)'
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id, name, age, hometown])
            .then(() => {
                resolve({status: "Successfully inserted Student"});
=======
const addStudent = async (id, name, age, religion) => {
    const sql = `SELECT * FROM dummyData`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
>>>>>>> parent of fec8f27 (update backend code)
            })
            .catch((error) => {
                reject(error);
            });
    });
}

<<<<<<< HEAD
const updateStudent = async (name, age, hometown, id) => {
    const sql = 'UPDATE student SET name=?, age=?, hometown=? WHERE id=?'
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [name, age, hometown, id])
            .then(() => {
                resolve({status: "Successfully updated Student"});
=======
const updateStudent = async (name, age, religion, id) => {
    const sql = `SELECT * FROM dummyData`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
>>>>>>> parent of fec8f27 (update backend code)
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const deleteStudent = async (id) => {
<<<<<<< HEAD
    const sql = 'DELETE FROM student WHERE id = ?'
=======
    const sql = `SELECT * FROM dummyData`
>>>>>>> parent of fec8f27 (update backend code)
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}


module.exports = {
    readTeachers,
    readStudents,
    addStudent,
    addTeacher,
    deleteTeacher,
    deleteStudent,
    readStudentInfo,
    readTeacherInfo,
    updateStudent,
    updateTeacher
};