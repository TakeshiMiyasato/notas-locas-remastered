import { DbService } from '../../app/services/db.service';
export class PersonaBLL {
    async selectAll(dbService: DbService) {
        if (!dbService.database) {
            await dbService.createDb();
        }
        const sqlText = 'SELECT id, nombres, apellidos, edad, fechaNacimiento FROM personas';
        return await dbService.database.executeSql(sqlText, []);
    }
    async insert(dbService: DbService, nombres: string, apellidos: string, edad: number, fechaNacimiento: string) {
        if (!dbService.database) {
            await dbService.createDb();
        }
        const sqlText = 'INSERT INTO personas(nombres, apellidos, edad, fechaNacimiento) VALUES (?,?,?,?)';
        return dbService.database.executeSql(sqlText, [nombres, apellidos, edad, fechaNacimiento])
            .catch(error => {
                console.log('Error al insertar personas', error);
            });

    }
}