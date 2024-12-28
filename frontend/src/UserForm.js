import { Button, Grid, Input, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const UserForm = ({addUser,updateuser,submitted,data,isEdit}) => {
    const [id,setId] = useState(0);
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');

    useEffect(()=>{
        if(!submitted){
            setId(0);
            setName('');
            setEmail('');
        }
    },[submitted]);

    useEffect(()=>{
        if(data?.id!==0 && data.id!==0){
            setId(data.id);
            setName(data.name);
            setEmail(data.email);
        }
    },[data]);
    return (
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: '#ffffff',
                marginBottom: '30px',
                display: 'block',
            }}
        >
            <Grid item xs={12}>
                <Typography component={'h1'} sx={{ color: '#000000',
                    textAlign: 'center',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    paddingTop: '20px',
                    paddingBottom: '20px',
                    borderBottom: '1px solid #cccccc',
                    boxSizing: 'border-box',
                    width: '100%',
                    display: 'block',
                    marginBottom: '20px',
                 }}>User Form</Typography>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography component={'label'} htmlFor="id"
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >ID :</Typography>
                <Input
                    type="number"
                    id="id"
                    name="id"
                    sx={{ width: '400px' }}
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography component={'label'} htmlFor="id"
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >Name :</Typography>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    sx={{ width: '400px' }}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography component={'label'} htmlFor="id"
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >Email :</Typography>
                <Input
                    type="text"
                    id="email"
                    name="email"
                    sx={{ width: '400px' }}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </Grid>

            <Button sx={{
                margin: 'auto',
                marginBottom: '20px',
                backgroundColor: '#00ceff',
                color:'blue',
                marginLeft: '15px',
                marginTop: '20px',
                '&:hover': {
                    opacity: '0.7',
                    backgroundColor: '#00eceff',
                }
            }}
            onClick={()=>isEdit?updateuser({id,name,email}):addUser({id,name,email})}>
                {isEdit?'Update':'Add'}
            </Button>
        </Grid>
    );
}

export default UserForm;