

class Useraccount {
    
    id : number;
    name: string;
    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
    
}

const user2 = new Useraccount("curdy", 21)
console.log(user2);
