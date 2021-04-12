const {Usuario, Post, Comentario, sequelize} = require('./models');
const {Op} = require('sequelize');

// Find all
 
// Usuario.findAll()
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// Post.findAll()
// .then((resultado) => {
//     console.table(resultado.map(post => post.toJSON()));
// });

// Comentario.findAll()
// .then((resultado) => {
//     console.table(resultado.map(comentario => comentario.toJSON()));
// });

// Find By PK

// Usuario.findByPk(1)
// .then((resultado) => {
//     console.table(resultado.toJSON());
// });

// Post.findByPk(1)
// .then((resultado) => {
//     console.table(resultado.toJSON());
// });

// Comentario.findByPk(1)
// .then((resultado) => {
//     console.table(resultado.toJSON());
// });

// Find One

// Usuario.findOne({
//     where: {
//         nome: {[Op.like]: 'Gabriel%'}
//     }
// })
// .then((resultado) => {
//     console.table(resultado.toJSON());
// });

// Post.findOne({
//     where: {
//         texto: {[Op.like]: 'Oi%'}
//     }
// })
// .then((resultado) => {
//     console.table(resultado.toJSON());
// });

// Comentario.findOne({
//     where: {
//         texto: {[Op.like]: '%Fim%'}
//     }
// })
// .then((resultado) => {
//     console.table(resultado.toJSON());
// });
 
// Usuario.findAll({
//     order: [
//         ['nome', 'ASC']
//     ],
//     limit: 2,
//     offset: 2
// })
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });
 
// Usuario.findAll({
//     where: {
//         nome:{[Op.like]: '%a%'}
//     }
// })
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// Usuario.findAll({
//     where: {
//         nome:{[Op.notLike]: '%a%'}
//     }
// })
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });
 
// for (let i = 0; i < 6; i+= 2) {
//     Comentario.findAll({
//         limit: 2,
//         offset: i        
//     })
//     .then((resultado) => {
//         console.table(resultado.map(comentario => comentario.toJSON()));
//     });
// }

// Usuario.create({
//     nome: 'Iago',
//     email: 'iago@digitalhouse.com',
//     senha: 'dev123'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.bulkCreate(
//     {nome: 'Iago', email: 'iago@digitalhouse.com', senha: 'dev123'},
//     {nome: 'Iago', email: 'iago@digitalhouse.com', senha: 'dev123'}
// ).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.update({
//     senha: 'novasenha123'
// },
//     {
//     where: {
//         id: 5
//     }
// }).then((resultado) => {
//     console.log(resultado);
// });

// Usuario.destroy({
//     where: {
//         id: 6
//     }
// }).then((resultado) => {
//     console.log(resultado);
// });

// Post.create({
//     texto: 'Aprendendo sequelize!',
//     img: null,
//     usuarios_id: 13,
//     n_likes: 0
// }
// ).then((resultado) => {
//     console.log(resultado.toJSON());
// });
 
// Usuario.update({
//     senha: '123'
// },
// {
//     where: {
//         nome: {[Op.like]: 'Sergio%'}
//     }
 
// }).then((resultado) => {
//     console.table(resultado);
// });
 
// Usuario.destroy({
//     where: {
//         id: 3
//     }
// }).then((resultado) => {
//     console.log(resultado);
// });

// Usuario.findByPk(1, {
//     include: [
//         {association: "posts"}
//     ]
// }).then((usuario) => {
//     console.table(usuario.posts.map((post) => post.toJSON()));
// });

// Usuario.findByPk(1, {
//     include: ['posts']
// }).then((usuario) => {
//     console.log(usuario.toJSON());
//     sequelize.close();
// });

Post.findByPk(1, {
    include: [
        {association: "comentarios"}
    ]
}).then((post) => {
    console.table(post.comentarios.map((post) => post.toJSON()));
});