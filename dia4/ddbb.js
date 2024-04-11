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

        // let adherir = "ALTER TABLE directions ADD COLUMN postCode2 INT"

        // let [result] = await connection.query(adherir);
        // console.log("columna adherida");
        // console.log(result);


        // let borrar = "ALTER TABLE directions DROP COLUMN `postCode2`"

        // let [result] = await connection.query(borrar);
        // console.log("columna borrada");
        // console.log(result);       


        // let table1 = "CREATE TABLE teachers (teacher_id INT AUTO_INCREMENT PRIMARY KEY, " +
        //                                "first_name VARCHAR(20), " +
        //                                "last_name VARCHAR(20))";

        // let [result] = await connection.query(table1);
        // console.log("Tabla creada");
        // console.log(result);

            
        
        // let table2 = "DROP TABLE directions";
        // let [result2] = await connection.query(table2);
        // console.log("Tabla eliminada");
        // console.log(result2);




        // let insert1 = "INSERT INTO grupos (name) " +
        //               "VALUES ('grupo1')"  
        // let [result3] = await connection.query(insert1);
        // console.log("Dato Insertado");
        // console.log(result3);

        // let insert2 = "INSERT INTO grupos (name) " +
        //               "VALUES ('grupo2')"  
        // let [result4] = await connection.query(insert2);
        // console.log("Dato Insertado");
        // console.log(result4);
        // let insert3 = "INSERT INTO grupos (name) " +
        //               "VALUES('grupo3')"  
        // let [result5] = await connection.query(insert3)           
        // console.log("Dato Insertado");
        // console.log(result5);

        // let insert = "INSERT INTO student (first_name, last_name) " +
        //               "VALUES ('Juan', 'Rodriguez')"  
        // let [result] = await connection.query(insert);
        // console.log("Dato Insertado");
        // console.log(result);

        // let insert2 = "INSERT INTO student (first_name, last_name) " +
        //               "VALUES ('Maria', 'Garcia')"  
        // let [result2] = await connection.query(insert2);
        // console.log("Dato Insertado");
        // console.log(result2);

        // let insert3 = "INSERT INTO student (first_name, last_name) " +
        //               "VALUES ('Patricia', 'Lopez')"  
        // let [result3] = await connection.query(insert3);
        // console.log("Dato Insertado");
        // console.log(result3);

        // let insert4 = "INSERT INTO student (first_name, last_name) " +
        //               "VALUES ('Cristian', 'Mandado')"  
        // let [result4] = await connection.query(insert4);
        // console.log("Dato Insertado");
        // console.log(result4);

        // let insert5 = "INSERT INTO student (first_name, last_name) " +
        //               "VALUES ('Pedro', 'Ramirez')"  
        // let [result5] = await connection.query(insert5);
        // console.log("Dato Insertado");
        // console.log(result5);

        // let insert6 = "INSERT INTO student (first_name, last_name) " +
        //               "VALUES ('Pablo', 'Gutierrez')"  
        // let [result6] = await connection.query(insert6);
        // console.log("Dato Insertado");
        // console.log(result6);

        // let insert7 = "INSERT INTO student (first_name, last_name) " +
        //               "VALUES ('Alicia', 'Ayoze')"  
        // let [result7] = await connection.query(insert7);
        // console.log("Dato Insertado");
        // console.log(result7);

        // let insert8 = "INSERT INTO student (first_name, last_name) " +
        //               "VALUES ('Sonia', 'Redondo')"  
        // let [result8] = await connection.query(insert8);
        // console.log("Dato Insertado");
        // console.log(result8);

        // let insert9 = "INSERT INTO student (first_name, last_name) " +
        //               "VALUES ('Rosa', 'Lopez')"  
        // let [result9] = await connection.query(insert9);
        // console.log("Dato Insertado");
        // console.log(result9);

        // let insert10 = "INSERT INTO student (first_name, last_name) " +
        //               "VALUES ('Andrea', 'Mosquera')"  
        // let [result10] = await connection.query(insert10);
        // console.log("Dato Insertado");
        // console.log(result10);

        // let insert = "INSERT INTO marks (date, mark) " +
        //               "VALUES ('1992-02-20', '6')"  
        // let [result] = await connection.query(insert);
        // console.log("Dato Insertado");
        // console.log(result);

        // let insert2 = "INSERT INTO marks (date, mark) " +
        //               "VALUES ('1989-01-13', '9')"  
        // let [result2] = await connection.query(insert2);
        // console.log("Dato Insertado");
        // console.log(result2);

        // let insert3 = "INSERT INTO marks (date, mark) " +
        //               "VALUES ('2001-02-20', '4')"   
        // let [result3] = await connection.query(insert3);
        // console.log("Dato Insertado");
        // console.log(result3);

        // let insert4 = "INSERT INTO marks (date, mark) " +
        //               "VALUES ('2022-02-20', '3')"  
        // let [result4] = await connection.query(insert4);
        // console.log("Dato Insertado");
        // console.log(result4);

        // let insert5 = "INSERT INTO marks (date, mark) " +
        //               "VALUES ('2013-02-20', '10')"   
        // let [result5] = await connection.query(insert5);
        // console.log("Dato Insertado");
        // console.log(result5);

        // let insert6 = "INSERT INTO marks (date, mark) " +
        //               "VALUES ('1986-02-20', '8')" 
        // let [result6] = await connection.query(insert6);
        // console.log("Dato Insertado");
        // console.log(result6);   

        // let insert7 = "INSERT INTO marks (date, mark) " +
        //               "VALUES ('2020-02-20', '2')" 
        // let [result7] = await connection.query(insert7);
        // console.log("Dato Insertado");
        // console.log(result7);

        // let insert8 = "INSERT INTO marks (date, mark) " +
        //               "VALUES ('1999-02-20', '5')"
        // let [result8] = await connection.query(insert8);
        // console.log("Dato Insertado");
        // console.log(result8);

        // let insert9 = "INSERT INTO marks (date, mark) " +
        //               "VALUES ('1979-02-20', '1')"
        // let [result9] = await connection.query(insert9);
        // console.log("Dato Insertado");
        // console.log(result9);

        // let insert10 = "INSERT INTO marks (date, mark) " +
        //               "VALUES ('1995-02-20', '9')" 
        // let [result10] = await connection.query(insert10);
        // console.log("Dato Insertado");
        // console.log(result10);

        // let setMarks = "UPDATE marks set mark = 0";                       
        // let [result] = await connection.query(setMarks);
        // console.log("Dato seteado");
        // console.log(result);

        // let fullName = "SELECT first_name, last_name FROM student";
        
        // let [result] = await connection.query(fullName);
        // console.log("Dato obtenido");
        // console.log(result);

        // let fullData = "SELECT * FROM teachers";
        
        // let [result] = await connection.query(fullData);
        // console.log("Dato obtenido");
        // console.log(result);

        // let deleteMarks = "DELETE FROM marks WHERE date < '2014-04-11' AND mark"

        // let [result] = await connection.query(deleteMarks);
        // console.log("Dato borrado");
        // console.log(result);

        // let setMArk = "UPDATE marks SET mark = 5 WHERE mark < 5 "

        // let [result] = await connection.query(setMArk);
        // console.log("Dato actualizado");
        // console.log(result);

                     

    }
    catch(err)
    {
        console.log(err);
        await connection.end();
    }
}

main();