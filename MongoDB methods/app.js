const MongoClient = require('mongodb').MongoClient
const url = 'mongodb+srv://Matin:Mete1996@cluster0.5ew5a0l.mongodb.net/SomeDB?retryWrites=true&w=majority'

MongoClient.connect(url, (err, db) => {
    if(err){
        console.log(err);
    }
    var Players = [{
        name: 'Arjen',
        surname: 'Robben'
    },
    {
        name: 'Manuel',
        surname: 'Never'
    },
    {
        name: 'Josuha',
        surname: 'Kimmich'
    },
    {
        name: 'Kingsley',
        surname: 'Coman'
    },
    {
        name: 'Alphonso',
        surname: 'Davies'
    },
    {
        name: 'Leroy',
        surname: 'Sane'
    },
    {
        name: 'Thomas',
        surname: 'Muller'
    },
    {
        name: 'Sadio',
        surname: 'Mane'
    },
    {
        name: 'Leon',
        surname: 'Goretzka'
    },
    {
        name: 'Jamal',
        surname: 'Musiala'
    },
    {
        name: 'Dayot',
        surname: 'Upemecano'
    },
    {
        name: 'Frank',
        surname: 'Ribery'
    },
    
]
    const data = db.db("SomeDB")
    data.collection('users').insertMany(Players,(err, res) => {
        if(err){
            console.log(err);
        }
        console.log(`${createdCount}Transfer complate))`);
        db.close()
    })
})