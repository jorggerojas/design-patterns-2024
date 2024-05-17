
class Database { 
    constructor() {
        if (!Database.instance) {
    
            Database.instance = this;
        }

        return Database.instance;

    }

query(sql){
    console.log(sql);
}
}

const db1 = new Database();
const db2 = new Database();

console.log(db1 === db2); // true
db1.query('SELECT * FROM users');