const users = [{
    id : 1,
    name : "Raju",
    schoolId : 111,
},{
    id : 2,
    name : "Ravi",
    schoolId : 999
}];

const grades = [{
    id : 1,
    schoolId : 111,
    grade : 96
},{
    id : 2,
    schoolId : 999,
    grade : 92
},{
    id : 3,
    schoolId : 111,
    grade : 89
}];

const getUser = (id) => {
    return  new Promise ((resolve,reject)=>{
        const user = users.find((user) => user.id === id);
        if(user) {
            resolve(user);
        } else {
            reject(`Unable to find user with id ${id}`);
        }
    });
};

const getGrades = (schoolId) => {
    return new Promise ((resolve,reject) => {
        resolve(grades.filter((grade) => grade.schoolId === schoolId));
    })
};

getUser(2).then((user) => {
    console.log(user);
}).catch((e) => {
    console.log(e);
});

getGrades(111).then((grades) => {
    console.log(grades);
}).catch((e) => {
    console.log(e);
});