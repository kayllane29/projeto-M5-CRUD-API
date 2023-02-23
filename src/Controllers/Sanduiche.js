import { openDb } from '../configDB.js';
import { createTableSanduiche } from '../Models/Sanduiche.js';

createTableSanduiche();

export async function getSanduiches(req, res){
    openDb().then(db => {
        db.all('SELECT * FROM sanduiche').then(sanduiches => res.json(sanduiches))
    });
}

export async function getSanduiche(req, res){
    let id = req.body.cod_sanduiche
    openDb().then(db => {
        db.get('SELECT * FROM Sanduiche WHERE cod_sanduiche=?', [id])
        .then(sanduiche => res.json(sanduiche)) 
    });  
}

export async function postSanduiche(req, res){ 
    let sanduiche = req.body;
    openDb()
    .then(db => {
        db.run('INSERT INTO sanduiche (nome, descricao, preco, imagem_sanduiche) VALUES (?,?,?,?)', [sanduiche.nome, sanduiche.descricao, sanduiche.preco, sanduiche.imagem])
    });
    res.json({
        "statusCode": 200
    })
}

export async function putSanduiche(req, res){
    let sanduiche = req.body;
    openDb()
    .then(db => {
        db.run('UPDATE sanduiche SET nome=?, descricao=?, preco=?, imagem_sanduiche=? WHERE cod_sanduiche=?', [sanduiche.nome, sanduiche.descricao, sanduiche.preco, sanduiche.imagem, sanduiche.cod_sanduiche])
    });
    res.json({
        "statusCode": 200
    })
}

export async function patchSanduiche(req, res){
    let sanduiche = req.body;
    openDb()
    .then(db => {
        db.run('UPDATE sanduiche SET nome=?, descricao=?, preco=?, imagem_sanduiche=? WHERE cod_sanduiche=?', [sanduiche.nome, sanduiche.descricao, sanduiche.preco, sanduiche.imagem, sanduiche.cod_sanduiche])
    });
    res.json({
        "statusCode": 200
    })
}

export async function deleteSanduiche(req, res){
    let id = req.body.cod_sanduiche
    openDb().then(db => {
        db.get('DELETE FROM sanduiche WHERE cod_sanduiche=?', [id])
        .then(res => res)
    });
    res.json({
        "statusCode": 200
    })
}