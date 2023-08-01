import { expect } from "chai";
import  request  from "supertest"; 
import app from "../app.js";

describe('API de register', ()=>{
    describe('POST api/users/register', ()=>{
        it ('Debera crear un usuario ', async ()=>{
            
            const userBody ={
                email: 'alexmoreOk@hotmail.com',
                password: 'hola1234',
                photo: 'https://cdn.icon-icons.com/icons2/1508/PNG/512/systemusers_104569.png'
            };
            const respuesta=await request(app)
            .post ('api/users/register')
            .send(userBody);
            expect(respuesta.status).to.equal(201)
        })
    })
})