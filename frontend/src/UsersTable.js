import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UsersTable= ({rows,selectedUser,deleteuser})=>{return( <TableContainer component={Paper}>
    <Table>
        <TableHead>
            <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Action</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
            rows.map(rows=>(
                <TableRow key={rows.id} sx={{
                    '&:last-child td,&:last-child th':{border: '0px solid'}
                }}>
                    <TableCell component='th' scope="row">{rows.id}</TableCell>
                    <TableCell component='th' scope="row">{rows.name}</TableCell>
                    <TableCell component='th' scope="row">{rows.email}</TableCell>
                    <TableCell>
                        <Button sx={{
                            variant:'contained',
                            color:'primary',
                            size:'small',
                        }}
                        onClick={()=>selectedUser({id:rows.id,name:rows.name,email:rows.email})}
                        >Update
                        </Button>
                        <Button sx={{
                            variant:'contained',
                            color:'secondary',
                            size:'small',
                        }}
                        onClick={()=>deleteuser({id:rows.id,name:rows.name})}
                        >Delete
                        </Button>
                    </TableCell>
                </TableRow>
                
            ))
            }
        </TableBody>
    </Table>
</TableContainer>);
}
export default UsersTable;