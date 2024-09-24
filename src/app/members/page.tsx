"use client";

import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Grid, Container, Box, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { CSVLink } from "react-csv"; 
import jsPDF from "jspdf";          
import autoTable from "jspdf-autotable";
import * as XLSX from 'xlsx';       
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';

const Members = () => {
  const router = useRouter();
  const currentPath = usePathname();

  const navItems = ["Step 1", "Step 2", "Step 3", "Trainings", "Funnels", "Members", "Leaderboard", "Account"];

  const handleCopyLink = (link: string) => {
    navigator.clipboard.writeText(link);
    toast.success('Link copied to clipboard!', { position: "top-right", autoClose: 2000 });
  };

  // Static data for the table
  const rows = [
    { id: 1, name: 'John Doe', email: 'john@example.com', signupDate: '2023-01-01', enagicId: 'E12345', urlScheduler: 'https://scheduler.example.com/1', statusScheduler: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', signupDate: '2023-02-15', enagicId: 'E12346', urlScheduler: 'https://scheduler.example.com/2', statusScheduler: 'Inactive' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', signupDate: '2023-04-02', enagicId: 'E123344', urlScheduler: 'https://scheduler.example.com/3', statusScheduler: 'Active' },
    { id: 4, name: ' Johnson Alice', email: 'Johnson@example.com', signupDate: '2023-04-05', enagicId: 'E12343', urlScheduler: 'https://scheduler.example.com/3', statusScheduler: 'Inactive' },
    { id: 5, name: 'Yonas Belay', email: 'yoniman.wg@gmail.com', signupDate: '2023-03-25', enagicId: 'E12342', urlScheduler: 'https://scheduler.example.com/3', statusScheduler: 'Active' },
    { id: 6, name: 'Belay yonas', email: 'jonas.wg@gmail.com', signupDate: '2023-04-25', enagicId: 'E12341', urlScheduler: 'https://scheduler.example.com/3', statusScheduler: 'Active' },

  ];


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
  // State for delete confirmation dialog
  const [openDialog, setOpenDialog] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState<number | null>(null);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Members");
    XLSX.writeFile(wb, "Members.xlsx");
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    autoTable(doc, { html: '#memberTable' });
    doc.save("Members.pdf");
  };

  // Function to handle opening the dialog
  const handleOpenDialog = (id: number) => {
    setDeleteId(id);
    setOpenDialog(true);
  };

  // Function to handle deleting the member
  const handleDeleteMember = () => {
    toast.success(`Member with ID ${deleteId} deleted!`, { position: "top-right", autoClose: 2000 });
    setOpenDialog(false);
    setDeleteId(null); 
  };

  return (
    <div style={{
      background: 'linear-gradient(to bottom right, rgba(10, 10, 30, 1), rgb(34, 62, 104), rgb(41, 82, 41), rgba(97, 81, 69))',
      minHeight: 'auto',
      padding: '100px',
      color: 'white'
    }}>

      {/* Navigation Menu */}
      <Box display="flex" justifyContent="flex-end" marginBottom={2}>
        {navItems.map((item) => {
          const itemPath = `/${item.replace(" ", "").toLowerCase()}`;
          const isActive = currentPath === itemPath;

          return (
            <Button
              key={item}
              color={isActive ? "primary" : "inherit"}
              style={{
                marginLeft: '10px',
                textDecoration: isActive ? 'underline' : 'none',
                fontWeight: isActive ? 'bold' : 'normal'
              }}
              onClick={() => router.push(itemPath)}
            >
              {item}
            </Button>
          );
        })}
      </Box>

      <Container>
        <Typography variant="h4" align="left" gutterBottom style={{ color: 'white', marginTop: '100px' }}>
          Your lead list
        </Typography>
        <Typography variant="h6" align="left" gutterBottom style={{ color: 'lightgrey', marginBottom: '0px' }}>
          yoniman.wg@gmail.com || Sep 24
        </Typography>
        <Typography variant="h6" align="left" gutterBottom style={{ color: 'lightgrey', marginBottom: '40px' }}>
          Referrer : No referrer
        </Typography>

        {/* Table for Member Data */}
        <Paper sx={{ width: '100%', overflow: 'hidden', marginBottom: 2 }}>
          <Button variant="contained" color="primary" onClick={exportToExcel} style={{ margin: '10px' }}>
            Export to Excel
          </Button>
          <Button variant="contained" color="primary" onClick={exportToPDF} style={{ margin: '10px' }}>
            Export to PDF
          </Button>
          <TableContainer>
            <Table id="memberTable">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Signup Date</TableCell>
                  <TableCell>Enagic ID</TableCell>
                  <TableCell>URL Scheduler</TableCell>
                  <TableCell>Status Scheduler</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.signupDate}</TableCell>
                    <TableCell>{row.enagicId}</TableCell>
                    <TableCell>
                      <Button variant="outlined" onClick={() => window.open(row.urlScheduler, '_blank')}>
                        Scheduler Link
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      {row.statusScheduler === 'Active' ? (
                        <span style={{ color: 'green' }}>✔️</span>
                      ) : (
                        <span style={{ color: 'red' }}>❌</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary" onClick={() => alert(`Review ${row.name}`)} style={{ marginRight: '5px' }}>
                        <VisibilityIcon />
                      </Button>
                      <Button variant="contained" color="error" onClick={() => handleOpenDialog(row.id)}>
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Container>

      {/* Delete Confirmation Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this member? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteMember} sx={{ color:"red"}}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <ToastContainer />
      <Box display="flex" justifyContent="center" marginTop={4} gap={2}>
      <Button 
          variant="contained" 
          color="primary"  
          size="large" 
          style={{ padding: '10px 40px', borderRadius:'50px' }} 
          onClick={() => router.push('/funnels')} 
        >
          Back
        </Button>
        <Button 
          variant="contained" 
          color="success" 
          size="large" 
          style={{ padding: '10px 40px', borderRadius:'50px'  }} 
          onClick={() => router.push('/leaderboard')}  
        >
          Next
        </Button>
    </Box>
    </div>
  );
};

export default Members;
