// Objeto -> Javascript tipo JSON el objeto para

user1 = {
    'username': 'user1',
    'age': 27,
    'email': 'user1@example.com'
}
// SI ALGO NO EXISTE SE CREA
// 1º se valida BBDD existe (db)
// 2º se valida que la coleccion existe (users) 
// 3º 
db.users.insert(user1);

user2 = {
    'username': 'user2',
    'age': 37,
    'email': 'user2@example.com'
}

db.users.insert(user2)


user4 = {
    'username': 'user4',
    'age': 29,
    'email': 'user4@example.com'
}

db.users.insetOne(user4)

db.users.insertMany([
    {
        'username': 'user8',
        'age': 22,
        'email': 'user8@example.com',
        'status': 'inactive'
    },
    {
        'username': 'user9',
        'age': 18,
        'email': 'user9@example.com',
        'status': 'active'
    },
    {
        'username': 'user10',
        'age': 36,
        'email': 'user10@example.com',
        'status': 'inactive'
    }
])

// ============== EJERCICIOS =============================
// Obtener el usuario con username user7

db.users.find({
    username: 'user7'
});

    // Idem pero buscar solo 1
db.users.findOne({
    username: 'user7'
})

// Obtener usuarios con edad mayor 10 años

db.users.find({
    age: { $gt: 10  } // $gt = >
});

// Obtener cantidad de usuarios con edad menor a 50

db.users.find({
    age: { $lt: 50 } // $lt = <
}).count();

// Obtener todos usuarios con edad mayor de 10 y estado activo

db.users.find({
    $and: [
        {age: {$gt: 10  }},
        {status: 'active'}
    ]
})

// Obtener todos usuarios con edad distinta de 18

db.users.find({
    age: {$ne: 18} // $ne == No equal
})

// Obtener todos usuarios con edad 19,36, 39

db.users.find({
    $or: [
        {age: 19},
        {age: 36},
        {age: 39}
    ]
})

// Obtener usuarios con atributo status

db.users.find({
    status: {$exists: true}
})

// Obtener usuarios con atributo status = activo

db.users.find({
    $and: [
        {status: {$exists: true}},
        {status: 'active'}
    ]
})

// Obtener usuarios con status activo y correo electronico

db.users.find({
    $and: [
        {status: {$exists: true}},
        {status: 'active'},
        {email: {$exists: true}}
    ]
})

// Obtener usuario con mayor edad

db.users.find().sort({
    age: -1
}).limit(1);

