var Person = /** @class */ (function () {
    function Person(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    Person.createPerson = function (id, name, age) {
        return new Person(id, name, age);
    };
    Person.readPerson = function (id) {
        for (var _i = 0, persons_1 = persons; _i < persons_1.length; _i++) {
            var person = persons_1[_i];
            if (person.id === id) {
                return person;
            }
        }
        return undefined;
    };
    Person.prototype.updatePerson = function (name, age) {
        this.name = name;
        this.age = age;
    };
    Person.deletePerson = function (id) {
        for (var i = 0; i < persons.length; i++) {
            if (persons[i].id === id) {
                persons.splice(i, 1);
                break;
            }
        }
    };
    return Person;
}());
var persons = [];
var createPersonForm = document.getElementById("createPersonForm");
createPersonForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var id = Number(document.getElementById("id").value);
    var name = document.getElementById("name").value;
    var age = Number(document.getElementById("age").value);
    var person = Person.createPerson(id, name, age);
    console.log(person);
    persons.push(person);
    for (var _i = 0, persons_2 = persons; _i < persons_2.length; _i++) {
        var item = persons_2[_i];
        console.log(item);
    }
    refreshPersonTable();
    createPersonForm.reset();
});
var readPersonForm = document.getElementById("readPersonForm");
readPersonForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var id = Number(document.getElementById("readId").value);
    var person = Person.readPerson(id);
    if (person) {
        console.log("Person found:", person);
    }
    else {
        alert("Person not found");
    }
    refreshPersonTable();
    readPersonForm.reset();
});
var updatePersonForm = document.getElementById("updatePersonForm");
updatePersonForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var id = Number(document.getElementById("updateId").value);
    var name = document.getElementById("updateName").value;
    var age = Number(document.getElementById("updateAge").value);
    var person = Person.readPerson(id);
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
var deletePersonForm = document.getElementById("deletePersonForm");
deletePersonForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var id = Number(document.getElementById("deleteId").value);
    var person = Person.readPerson(id);
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
    var personTableBody = document.getElementById("personTableBody");
    personTableBody.innerHTML = "";
    for (var _i = 0, persons_3 = persons; _i < persons_3.length; _i++) {
        var person = persons_3[_i];
        var row = document.createElement("tr");
        row.innerHTML = "\n        <td>".concat(person.id, "</td>\n        <td>").concat(person.name, "</td>\n        <td>").concat(person.age, "</td>\n        ");
        personTableBody.appendChild(row);
    }
}
refreshPersonTable();
