const users =[
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
];

const getUsers =(cb) =>{
    cb(users);
};

const getUserById=(id,cb)=>{
    const user=users.find(user=>user.id==id);
    cb(user);
};

exports.getUsers=getUsers;
exports.getUserById=getUserById;