'use strict'

const User = require("../models/user");
const Tipo_cuenta = require("../models/tipo_cuenta");
const Transfer = require('../models/transferencias');

var controller = {
    
    saveUser: function(req,res){
        var user = new User();
        var params = req.body;

        user.rut = params.rut;
        user.nombre = params.nombre;
        user.correo = params.correo;
        user.telefono = params.telefono;
        user.tipo_cuenta = params.tipo_cuenta;
        user.n_cuenta = params.n_cuenta;
        user.banco = params.banco;

        user.save((err,userStored) => {
            if(err) return res.status(500).send({message:'No se pudo guardar el usuario'});

            if(!userStored) return res.status(404).send({message:'No se a podido guardar el usuario'});

            return res.status(200).send({user: userStored})
        });

    },
    getUsers: function(req,res){
        User.find({}).exec((err, users)=>{
            if(err) return res.status(500).send({message:'No se pudo guardar el usuario'});

            if(!users) return res.status(404).send({message:'No se a podido guardar el usuario'});

            return res.status(200).send({users: users})
        });
        // User.find().populate({path:'tipo_cuenta'}).exec((err,item) => {
        //     if(err) return res.status(500).send({message:err});

        //     return res.status(200).send({users: item});
        // })
    },
    getUserById: function(req,res){

        var id= req.params.id;
        // User.findById(id,function(err, user){
        //     if(err) return res.status(500).send({message:'No se puedo encotnrar el usuario'});

        //     if(!user) return res.status(404).send({message:'No se pudo acceder al usuario'});

        //     return res.status(200).send({user: user});
        // });

        User.findById(id).populate({path:'tipo_cuenta'}).exec((err,item)=>{
            if(err) return res.status(200).send({message: err});

            return res.status(200).send({user: item});
        });
    },
    getTipoCuenta: function(req,res){
        Tipo_cuenta.find({}).exec((err, item)=>{
            
            if(err) return res.status(500).send({message:'No se ha encontrado el dato'});

            if(!item) return res.status(404).send({message:'No se a podido encontrar el dato'});

            return res.status(200).send({tipo_cuenta: item});
        })
    },
    setTransfer: function(req,res){
        var transfer = new Transfer();
        var params = req.body;

        transfer.destinatario_id = params.destinatario_id;
        transfer.rut = params.rut;
        transfer.bank_id = params.bank_id;
        transfer.tipo_cuenta = params.tipo_cuenta;
        transfer.monto = params.monto;

        transfer.save((err,transferStored)=>{
            if(err) return res.status(500).send({message: err});
            if(!transferStored) return res.status(404).send({message: 'No se pudo'});
            res.status(200).send({msg: transferStored});
        });
    }
}

module.exports = controller;