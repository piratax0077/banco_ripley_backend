'use strict'

const User = require("../models/user");
const Tipo_cuenta = require("../models/tipo_cuenta");
const Transfer = require('../models/transferencias');

var controller = {
    getAllTransfer: function(req,res){
        Transfer.find({}).populate([{path:'destinatario_id'},{path:'tipo_cuenta'}]).exec((err, transfers) => {
            
            if(err) return res.status(500).send({msg: err});

            if(!transfers) return res.status(404).send({msg:'No se pudo recuperar las transferencias'});

            return res.status(200).send({transfers: transfers});
        });

    }
}

module.exports = controller;