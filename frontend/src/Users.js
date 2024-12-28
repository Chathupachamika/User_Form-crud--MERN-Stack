import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";

const users=[
    {
        id:1,
        name:'John Doe',
        email:'john.doe@example.com'
    },
    {
        id:2,
        name:'Jane Dilson',
        email:'jane.doe@example.com'
    },
    {
        id:3,
        name:'Mike Tyson',
        email:'mike.doe@example.com'
    }
];

const Users = () => {
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
            <UserForm />
            <UsersTable rows={users}/>
        </Box>
    );
}

export default Users;