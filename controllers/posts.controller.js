// const { post } = require('app');
const ModelTask = require('../models/taskModel');

const ObjectId = require('mongoose').Types.ObjectId;

//function affiche les posts
module.exports.readPost = (req, res) => {
    const posts = ModelTask.find() // méthode find() permet de renvoyer un tableau contenant tous les Sauces dans la BD
    .then((posts) => res.status(200).json(posts))
    .catch((error) => res.status(400).json({ error }));
};
//function créer un post
module.exports.createPost = async (req, res) => {
    const newPost = new ModelTask({
       
        pseudo: req.body.pseudo,
        email: req.body.email,
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        priority: req.body.priority,
        status: req.body.status,
        startDate: req.body.startDate,
        deadline: req.body.deadline
    })

    try {
        const post = await newPost.save();
        console.log('La tache :'+ post + ' a ete ajouté')
        return res.status(201).json(post);
        
    } catch (error) {
        return res.status(400).send(error)
    }
};
//function modifier son post
module.exports.updatePost = (req, res) => {
    if (!ObjectId.isValid(req.params.id)) { // Methode de verification de l'ID passé en parametres
        return res.status(400).send('ID inconnu : ' + req.params.id)
    }
    const updatedRecord = {
        message: req.body.message
    }

    ModelTask.findByIdAndUpdate(
        req.params.id, {
            $set: updatedRecord
        }, {
            new: true
        },
        (error, docs) => {
            if (!error) {
                res.send(docs);
            } else {
                console.log("Mise à jour :" + error);
            }
        }
    )
};
//function supprimer son post
module.exports.deletePost = (req, res) => {
    if (!ObjectId.isValid(req.params.id)) { // Methode de verification de l'ID passé en parametres
        return res.status(400).send('ID inconnu : ' + req.params.id)
    }
    ModelTask.findByIdAndRemove(
        req.params.id,
        (error, docs) => {
            if (!error) {
                res.status(200).send('post');
            } else {
                console.log("Suppression :" + error)
            }
        })
};