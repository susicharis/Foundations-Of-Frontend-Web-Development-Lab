import React, { useState } from "react";
import Navbar from './Navbar';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import './contact.css';
import firstImage from '../pictures/ig.png';

// Fifth and Eighth(Last) REQUIREMNT ------------------------------------------------------------------------------ //

function Contact() {
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false); // New state for success message

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    const errors = {};

    if (!name.trim()) {
      errors.name = "Name is required";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
    }

    if (!message.trim()) {
      errors.message = "Message is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      setSubmitSuccess(true);
      handleCloseDialog(); 
    }
  };

  return (
    <div>
      <Navbar />
      <h1 className="h1contact">CONTACT US</h1>
      <img src={firstImage} alt="Instagram" className="firstPic" />
      <p className="p1ig">bobthebuilder<br /> ahmedins29 <br /> haarke_ </p>

    <div className="buttonContainer">
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#10ea2d',
          color: 'black',
          '&:hover': {
            backgroundColor: '#0ebc24',
          },
          marginLeft: '38%',
          marginTop: '30%'
        }}
        onClick={handleOpenDialog}>
        Where can you send message to us?
      </Button>
      </div>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>CONTACT US</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              fullWidth
              className="form-input"
            />
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              fullWidth
              className="form-input"
            />
            <TextField
              label="Message"
              variant="outlined"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              error={!!errors.message}
              helperText={errors.message}
              fullWidth
              className="form-input"
            />
            <Button type="submit" variant="contained" color="primary">Submit</Button>
          </form>
          {submitSuccess && <p className="p1inside">Form submitted successfully!</p>}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Contact;
