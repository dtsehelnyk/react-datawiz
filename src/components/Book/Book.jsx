import React, { useState, useRef } from 'react';
import { Box, Typography, Button, Modal, TextField, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { openModal, closeModal } from '../../store/actions/modal';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 300,
    flexGrow: 1,
    minWidth: 300,
    transform: 'translateZ(0)',
    '@media all and (-ms-high-contrast: none)': {
      display: 'none',
    },
  },
  modal: {
    display: 'flex',
    padding: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),

    '& .MuiTextField-root': {
      margin: theme.spacing(0, 0, 2),
    },
  },
}));

export const Book = ({ book }) => {
  const classes = useStyles();
  const rootRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <img
        src={`../../api/images/${book.image}`}
        alt={book.name}
      />
      
      <Box my={1}>
        <Typography variant="h5">
          {book.name}
        </Typography>
      </Box>

      <Typography>
        Year: {book.year}
      </Typography>

      <Typography>
        Pages: {book.pages}
      </Typography>

      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          // onclick={openModal(book)}
          type="button"
          onClick={handleOpen}
        >
          Edit
        </Button>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
        container={() => rootRef.current}
      >
        <Box margin="auto" className={classes.paper}>
          <FormControl margin="dense">
            <TextField
              id="standard-basic"
              label="Title"
              variant="outlined"
              placeholder={book.name}
            />

            <TextField
              id="filled-basic"
              label="Year"
              variant="outlined"
              placeholder={book.year}
            />

            <TextField
              id="outlined-basic"
              label="Pages"
              variant="outlined"
              placeholder={book.pages}
            />

            <Button
              onClose={handleClose}
              variant="contained"
              color="primary"
            >
              Change
            </Button>
          </FormControl>
        </Box>
      </Modal>
    </>
  )
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     openModal: modal => {
//       dispatch(openModal(modal))
//     },

//     closeModal: () => {
//       dispatch(closeModal())
//     },
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
