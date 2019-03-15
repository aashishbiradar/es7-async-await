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

const getStatus = (id) => {
    let user;
    return getUser(id).then((tempUser) => {
        user = tempUser;
        return getGrades(user.schoolId);
    }).then((grades)=>{
        let average = 0;

        if(grades.length > 0) {
            average = grades.map((grade) => grade.grade).reduce((a,b) => a+b) / grades.length;
        }

        return `${user.name} has a ${average}% in class`;
    });
};

//get status with async and await
const getStatusAlt = async (id) =>{
    const user = await getUser(id);
    const grades = await getGrades(user.schoolId);

    let average = 0;

    if(grades.length > 0) {
        average = grades.map((grade) => grade.grade).reduce((a,b) => a+b) / grades.length;
    }

    return `${user.name} has a ${average}% in class`;
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

getStatus(1).then((status) => {
    console.log('getStatus->',status);
}).catch((e) => {
    console.log(e);
});

getStatusAlt(1).then((status) => {
    console.log('getStatusAlt->',status);
}).catch((e) => {
    console.log(e);
});