import {PruebaModel} from '../models/prueba.model.ts';

const pruebaModel = new PruebaModel();

export class PruebaController {


 async getAll({response, request}: any) {
     try{
        let pruebas = await pruebaModel.getAllPruebas();
        response.body = pruebas;
     }catch(error){
         console.log(error);
     }
  
    }

async getOne({response, params}:any){
    try {
        let id = params.id;
        let prueba = await pruebaModel.getOnePrueba(id);
        if(prueba){
            response.body = prueba;
            response.status = 200;
        }else{
            response.body = {message: "no existe la prueba con id = "+id};
            response.status = 404;
        }

    } catch (error) {
        console.log(error);
    }
}

async insert({response, request}:any){
    try {
        let body = await request.body();
        body = await body.value;
        if (body.hasOwnProperty("nombre")){
            let insert  = await pruebaModel.insertPrueba(body);
            if (insert){
                response.body = insert;
                response.status = 200;
            }else{
                response.body = {message: "no se pudo insertar la prueba"};
                response.status = 503;
            }
        }else{
            response.body = {
                message:"El campo nombre no puede ser nulo"
            };
            response.status = 400;
        }
    } catch (error) {
        console.log(error);
    }
}

async update({response, request, params}: any){
    try {
        let id = params.id;
        let body = await request.body();
        body = await body.value;
        let prueba = await pruebaModel.updatePrueba(body,id);
        if(prueba){
            response.body = {message: "Success"};
            response.status = 200;
        }else{
            response.body = {message: "no existe la prueba con id = "+id};
            response.status = 404;
        }

    } catch (error) {
        console.log(error);
    }
}

async delete({response, params}:any){
    try {
        let id = params.id;
        let prueba = await pruebaModel.deletePrueba(id);
        if(prueba){
            response.body = {message: "Success"};
            response.status = 200;
        }else{
            response.body = {message: "no existe la prueba con id = "+id};
            response.status = 404;
        }

    } catch (error) {
        console.log(error);
    }
}
}



