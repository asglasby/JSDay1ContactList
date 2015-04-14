var Contact = function (name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
}

var contacts = [];
contacts.push(new Contact("Tom", "tom@gmail.com", "973-562-1234"));
contacts.push(new Contact("Jerry", "jerry@gmail.com", "302-123-4523"));
contacts.push(new Contact("Daffy", "daffy@gmail.com", "201-292-7211"));
contacts.push(new Contact("Micky", "micky@gmail.com", "443-123-4523"));
contacts.push(new Contact("Superman", "superman@gmail.com", "410-568-7211"));
contacts.push(new Contact("Spidey", "spidey@gmail.com", "803-123-4523"));

var listContacts = function () {
    document.getElementById('displayContacts').innerHTML = " ";
    for (var i = 0; i < contacts.length; i++) {
        document.getElementById('displayContacts').innerHTML += '<tr><td id="name' + i + '">' + contacts[i].name + '</td><td id="email' + i + '">' + contacts[i].email + '</td><td id="phone' + i + '">' + contacts[i].phone + '</td><td><button class="btn btn-warning" onclick=updateContact(' + i + ')>Update</button></div><button class="btn btn-danger" onclick=deleteContact(' + i + ')>Delete</button></td></tr>';
    }
}

var addNewContact = function () {
    var name = document.getElementById('inputName').value;
    var email = document.getElementById('inputEmail').value;
    var phone = document.getElementById('inputPhone').value;
    var contact = new Contact(name, email, phone);
    contacts.push(contact);
    listContacts();
}

var deleteContact = function (i) {
    contacts.splice(i, 1);
    listContacts();
}

//var updateContact = function (i) {
//    // alert('not working yet');
//    var nameId = "name" + i;
//    var emailId = "email" + i;
//    var phoneId = "phone" + i;

//    document.getElementById(nameId).innerHTML = '<input value="' + contacts[i].name + '" class="form-control" id="name' + i + '" />';
//    document.getElementById(emailId).innerHTML = '<input value="' + contacts[i].email + '" class="form-control" id="email' + i + '" />';
//    document.getElementById(phoneId).innerHTML = '<input value="' + contacts[i].phone + '" class="form-control" id="phone' + i + '" /><br /><button id="updateButton" class="btn btn-warning" onclick=submitUpdatedContact(' + i + ')>Submit</button>';
//}

var updateContact = function (i) {
    // alert('not working yet');
    //var nameId = "name" + i;
    //var emailId = "email" + i;
    //var phoneId = "phone" + i;
    contactId = i;
    document.getElementById("inputName").value = contacts[i].name;
    document.getElementById("inputEmail").value = contacts[i].email;
    document.getElementById("inputPhone").value = contacts[i].phone;
    document.getElementById("submitButtons").innerHTML = '<button id="updateButton" class="btn btn-warning" onclick=submitUpdatedContact(contactId)>Submit</button>';
   
}

//var submitUpdatedContact = function (i) {
//    // alert("not working just yet")
//    //var nameUId = "name" + i;
//    //var emailUId = "email" + i;
//    //var phoneUId = "phone" + i;

//    contacts[i].name = document.getElementById(inputName).value;
//    contacts[i].email = document.getElementById(emailUId).value;
//    contacts[i].phone = document.getElementById(phoneUId).value;

//    listContacts();
//}

var submitUpdatedContact = function (i) {
    // alert("not working just yet")
    //var nameUId = "name" + i;
    //var emailUId = "email" + i;
    //var phoneUId = "phone" + i;

    contacts[i].name = document.getElementById("inputName").value;
    contacts[i].email = document.getElementById("inputEmail").value;
    contacts[i].phone = document.getElementById("inputPhone").value;

    document.getElementById("inputName").value = "";
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputPhone").value = "";

    listContacts();
}


listContacts();