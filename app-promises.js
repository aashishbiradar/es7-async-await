const users = [{
    id : 1,
    name : "Raju",
    schoolId : 111,
},{
    id : 2,
    name : "Ravi",
    schoolId : 999
}];

const grades = [{}];

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

getUser(2).then((user) => {
    console.log(user);
}).catch((e) => {
    console.log(e);
});