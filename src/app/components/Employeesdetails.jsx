import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'EmployeeID', label: 'Employee ID', minWidth: 170 },
  { id: 'EmployeeName', label: 'EmployeeName', minWidth: 100 },
  {
    id: 'Email',
    label: 'Email ID',
    minWidth: 160,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Designation',
    label: 'Designation',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Team',
    label: 'Team',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Department',
    label: 'Department',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Department',
    label: 'Department',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Department',
    label: 'Department',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(EmployeeID, EmployeeName, Email, Designation,Team,Department) {
  return { EmployeeID, EmployeeName, Email, Designation, Team ,Department};
}

const rows = [
  createData('KS28794', 'Harshit Kamleshprasad Modi', "harshit.modi@kotak.com", "Management Trainee","Innovation Lab","Kotak Securities"),
  createData('KS28794', 'Harshit Kamleshprasad Modi', "harshit.modi@kotak.com", "Management Trainee","Innovation Lab","Kotak Securities"),
  createData('KS28794', 'Harshit Kamleshprasad Modi', "harshit.modi@kotak.com", "Management Trainee","Innovation Lab","Kotak Securities"),
  createData('KS28794', 'Harshit Kamleshprasad Modi', "harshit.modi@kotak.com", "Management Trainee","Innovation Lab","Kotak Securities"),
  createData('KS28794', 'Harshit Kamleshprasad Modi', "harshit.modi@kotak.com", "Management Trainee","Innovation Lab","Kotak Securities"),
  createData('KS28794', 'Harshit Kamleshprasad Modi', "harshit.modi@kotak.com", "Management Trainee","Innovation Lab","Kotak Securities"),
  createData('KS28794', 'Harshit Kamleshprasad Modi', "harshit.modi@kotak.com", "Management Trainee","Innovation Lab","Kotak Securities"),
  createData('KS28794', 'Harshit Kamleshprasad Modi', "harshit.modi@kotak.com", "Management Trainee","Innovation Lab","Kotak Securities"),
  createData('KS28794', 'Harshit Kamleshprasad Modi', "harshit.modi@kotak.com", "Management Trainee","Innovation Lab","Kotak Securities"),
  createData('KS28794', 'Harshit Kamleshprasad Modi', "harshit.modi@kotak.com", "Management Trainee","Innovation Lab","Kotak Securities"),
  createData('KS28794', 'Harshit Kamleshprasad Modi', "harshit.modi@kotak.com", "Management Trainee","Innovation Lab","Kotak Securities"),
  createData('KS28794', 'Harshit Kamleshprasad Modi', "harshit.modi@kotak.com", "Management Trainee","Innovation Lab","Kotak Securities"),
  createData('KS28794', 'Harshit Kamleshprasad Modi', "harshit.modi@kotak.com", "Management Trainee","Innovation Lab","Kotak Securities"),
  createData('KS28794', 'Harshit Kamleshprasad Modi', "harshit.modi@kotak.com", "Management Trainee","Innovation Lab","Kotak Securities"),
  createData('KS28794', 'Harshit Kamleshprasad Modi', "harshit.modi@kotak.com", "Management Trainee","Innovation Lab","Kotak Securities"),
  createData('KS28794', 'Harshit Kamleshprasad Modi', "harshit.modi@kotak.com", "Management Trainee","Innovation Lab","Kotak Securities"),
  createData('KS28794', 'Harshit Kamleshprasad Modi', "harshit.modi@kotak.com", "Management Trainee","Innovation Lab","Kotak Securities"),
  createData('KS28794', 'Harshit Kamleshprasad Modi', "harshit.modi@kotak.com", "Management Trainee","Innovation Lab","Kotak Securities"),
  createData('KS28794', 'Harshit Kamleshprasad Modi', "harshit.modi@kotak.com", "Management Trainee","Innovation Lab","Kotak Securities"),
  createData('KS28794', 'Harshit Kamleshprasad Modi', "harshit.modi@kotak.com", "Management Trainee","Innovation Lab","Kotak Securities"),
  
];

const Employeesdetails=()=> {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{  overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 490 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.EmployeeName}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[8, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}


export default Employeesdetails