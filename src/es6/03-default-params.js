// Manera antigua antes del es6 
function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 34;
    var country = country || 'MX';
    console.log(name, age, country);
}
newUser();
newUser('David', 15, 'CO');

// Nueva forma es6
function newAdmin(name = 'Oscar', age = 32, country = 'CL') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Paolo',21,'PE');