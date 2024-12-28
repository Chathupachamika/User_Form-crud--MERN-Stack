import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import Axios from "axios";
import { useEffect, useState } from "react";


const Users = () => {
    const [users,setUsers]=useState([]);
    const [submitted,setSubmitted] =useState(false);
    const [isEdit,setIsEdit] =useState(false);
    const [selectedUser,setSelectedUser] =useState({});

    useEffect(()=>{
        getUsers();
    },[]);

    const getUsers =()=>{
        Axios.get('http://localhost:3001/api/users')
        .then(response=>{
           setUsers(response?.data?.response || []);
        })
        .catch(error=>{
            console.log('Axios error...');
        });
    }

    const addUser=(data)=>{
        setSubmitted(true);
        const payload={
            id:data.id,
            name:data.name,
            email:data.email,
        }
        Axios.post('http://localhost:3001/api/createuser',payload)
        .then(response=>{
            setSubmitted(false);
            isEdit(false);
            getUsers();
         })
         .catch(error=>{
             console.log('Axios error...');
         });
    }

    const updateuser=(data)=>{
        setSubmitted(true);
        const payload={
            id:data.id,
            name:data.name,
            email:data.email,
        }
        Axios.post(`http://localhost:3001/api/updateuser`,payload)
        .then(response=>{
            setSubmitted(false);
            getUsers();
         })
         .catch(error=>{
             console.log('Axios error...');
         });
    }

    const deleteuser=(data)=>{
        Axios.post(`http://localhost:3001/api/deleteuser`,data)
        .then(response=>{
            getUsers();
         })
         .catch(error=>{
             console.log('Axios error...');
         });
    }

    return (
        <Box
        sx={{
            padding: '20px',
            backgroundColor: '#f5f5f5',
            display: 'flex',
            width:'calc(100%-100px)',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100vh'
        }}
        >
            <UserForm 
            addUser={addUser}
            updateuser={updateuser}
            submitted={submitted}
            data={selectedUser}
            isEdit={isEdit}
            />
            <UsersTable
             rows={users}
            selectedUser={data=>{
                setSelectedUser(data);
                setIsEdit(true);
            }}
            deleteuser={data=>window.confirm('Are you sure you want to delete ?') && deleteuser(data)}
            />
        </Box>
    );
}

export default Users;