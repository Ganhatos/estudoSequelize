const {Usuario, Post, Comentario} = require('./models');

Usuario.findAll()
.then((resultado) => {
    console.table(resultado.map(user => user.toJSON()));
});

Post.findAll()
.then((resultado) => {
    console.table(resultado.map(post => post.toJSON()));
});

Comentario.findAll()
.then((resultado) => {
    console.table(resultado.map(comentario => comentario.toJSON()));
});