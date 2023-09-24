
class Person {
    public id: number;
    public name: string;
    public age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    static createPerson(id: number, name: string, age: number): Person {
        return new Person(id, name, age);
    }

    static readPerson(id: number): Person | undefined {
        for (let person of persons) {
            if (person.id === id) {
                return person;
            }
        }
        return undefined;
    }

    updatePerson(name: string, age: number): void {
        this.name = name;
        this.age = age;
    }

    static deletePerson(id: number): void {
        for (let i = 0; i < persons.length; i++) {
            if (persons[i].id === id) {
                persons.splice(i, 1);
                break;
            }
        }
    }
}

let persons: Person[] = [];

let createPersonForm = document.getElementById("createPersonForm") as HTMLFormElement;

createPersonForm.addEventListener("submit",  (event) => {
    event.preventDefault();
    let id = Number((document.getElementById("id") as HTMLInputElement).value);
    let name = (document.getElementById("name") as HTMLInputElement).value;
    let age = Number((document.getElementById("age") as HTMLInputElement).value);

    
    let person = Person.createPerson(id, name, age);
    console.log(person);
    
    persons.push(person);
    for (const item of persons) {
        console.log(item);
        
    }
    refreshPersonTable();
    createPersonForm.reset();
});

let readPersonForm = document.getElementById("readPersonForm") as HTMLFormElement;

readPersonForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let id = Number((document.getElementById("readId") as HTMLInputElement).value);

    let person = Person.readPerson(id);

    if (person) {
      console.log("Person found:", person);
         
    }
    else {
        alert("Person not found");
    }

    refreshPersonTable();
    readPersonForm.reset();
});

let updatePersonForm = document.getElementById("updatePersonForm") as HTMLFormElement;

updatePersonForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let id = Number((document.getElementById("updateId") as HTMLInputElement).value);
    let name = (document.getElementById("updateName") as HTMLInputElement).value;
    let age = Number((document.getElementById("updateAge") as HTMLInputElement).value);

    let person = Person.readPerson(id);

    if (person) {
        person.updatePerson(name, age);
        console.log("Person updated:", person);
    }
    else {
        alert("Person not found");
    }

    refreshPersonTable();
    updatePersonForm.reset();
});

let deletePersonForm = document.getElementById("deletePersonForm") as HTMLFormElement;

deletePersonForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let id = Number((document.getElementById("deleteId") as HTMLInputElement).value);

    let person = Person.readPerson(id);

    if (person) {
        Person.deletePerson(id);
        console.log("Person deleted:", person);
    }
    else {
        alert("Person not found");
    }

    refreshPersonTable();
    deletePersonForm.reset();
});

function refreshPersonTable() {
    let personTableBody = document.getElementById("personTableBody") as HTMLTableSectionElement;
    personTableBody.innerHTML = "";
    for (const person of persons) {
        let row = document.createElement("tr");
        row.innerHTML = `
        <td>${person.id}</td>
        <td>${person.name}</td>
        <td>${person.age}</td>
        `;
        personTableBody.appendChild(row);
    }
}

refreshPersonTable();