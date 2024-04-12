const mysql = require("mysql2/promise");

async function main()
{
    try
    {
        let connection = await mysql.createConnection(
            {
                host: "localhost",
                user: "root",
                password: "MoraySocks1991",
                database: "baseprueba"
            });
        console.log("Conexion correcta");

        let count = "SELECT COUNT(*) FROM student";

        let paramsAvg = ["1"]
        let average = "SELECT AVG(mark) FROM marks WHERE subject_id = ?"

        let listar = "SELECT * FROM grupos"

        let paramsBorrar = ["5", '2023-01-01', '2023-12-31' ]    
        let borrarNotas = "DELETE FROM marks WHERE mark > ? AND date >= ? AND date <= ?"

        let alumYear = ['2024']
        let alumnos = "SELECT first_name, last_name AS lista FROM student  WHERE admitYear = ?" 
        
        let profes = "SELECT teacher_id, COUNT(subject_id) FROM baseprueba.subject_teacher GROUP BY teacher_id " 
        let subject ="SELECT subject_id, COUNT(teacher_id) FROM baseprueba.subject_teacher GROUP BY subject_id "

        let params = ["1", "20","8","2023-01-01", "2023-12-31"]
        let getIdandMark = "SELECT student_id, mark from marks WHERE student_id BETWEEN ? AND ? OR mark > ? AND date BETWEEN ? AND ?"

        let paramsAvgMark = ['2023-01-01', '2023-12-31' ]
        let avgMark = "SELECT subject_id, AVG(mark)  FROM marks WHERE date BETWEEN ? AND ? GROUP BY subject_id" 

        let paramsAvgMarkByStudent = ['2023-01-01', '2023-12-31']
        let avgMarkByStudent = "SELECT student_id, AVG(mark)  FROM marks WHERE date BETWEEN ? AND ? GROUP BY student_id" 
        
        let fullDataAlums = "SELECT first_name, last_name, title FROM student JOIN marks ON (student.student_id = marks.student_id) JOIN subjects ON (marks.subject_id = subjects.subject_id)";

        let fullDataTeachers = "SELECT first_name, last_name, title FROM teachers JOIN subject_teacher ON (teachers.teacher_id = subject_teacher.teacher_id) JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id)";
        
        let reto5 = "SELECT teachers.first_name, teachers.last_name, title, COUNT(student.student_id)  FROM teachers JOIN subject_teacher ON (teachers.teacher_id = subject_teacher.teacher_id)" +
         "JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id) JOIN marks	ON 	(subjects.subject_id = marks.subject_id) JOIN student ON (marks.student_id = student.student_id) GROUP BY teachers.first_name, teachers.last_name, title"
        let [result] = await connection.query(reto5);
        console.log("conteo realizado");
        console.log(result);                   

    }
    catch(err)
    {
        console.log(err);
        await connection.end();
    }
}

main();