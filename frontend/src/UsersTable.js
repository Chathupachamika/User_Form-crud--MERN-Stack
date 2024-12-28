import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UsersTable= ({rows})=>{return( <TableContainer component={Paper}>
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
                        onClick={()=>{}}
                        >Update
                        </Button>
                        <Button sx={{
                            variant:'contained',
                            color:'secondary',
                            size:'small',
                        }}
                        onClick={()=>{}}
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