import db from '../config/config.ts';
import {Prueba} from './interfaces/prueba.interfece.ts';

export class PruebaModel {

    constructor(){}
    

    async getAllPruebas(){
        try{
            let pruebas = await db.execute("SELECT * FROM prueba");
            return pruebas.rows;
         }catch(error){
             console.log(error);
         }
    }

    async getOnePrueba(id:number){
        try {
            let prueba = await db.execute("SELECT * FROM prueba WHERE id = ?", [id]);
            if(prueba.rows){
                return prueba.rows[0];
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    async insertPrueba(prueba: Prueba){
        try {
            let insert = await db.execute("INSERT INTO prueba (nombre) values (?)", [
                prueba.nombre
            ])
            return insert;
        } catch (error) {
            console.log(error);
        }
    }

    async updatePrueba(prueba:Prueba, id: number){
        try {
            let isExist = await this.findById(id);
            if(isExist){
                let result = await db.execute("UPDATE prueba set nombre= ? Where id= ?", [prueba.nombre,id])
                return result;
            }else{
                return false;
            }

        } catch (error) {
            console.log(error);
        }
    }

    async deletePrueba(id:number){
        try {
            let isExist = await this.findById(id);
            if(isExist){
                let result = await db.execute("DELETE FROM prueba WHERE id = ?", [id])
                return result;
            }else{
                return false;
            }

        } catch (error) {
            console.log(error);
        }
    }

    private async findById(id:number){
        try {
            let result = await db.query("SELECT count(*) count FROM prueba WHERE id = ?", [id],);
            
            if(result[0].count >= 1){
                return true;
            }else{
               return false;
            }
            
        } catch (error) {
            console.log(error);
        }
    }
}
