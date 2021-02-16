import './App.scss';
import '../../styles/reset.scss';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../store/actions/modal';

import { AppBar, Box, Container, Typography } from '@material-ui/core';
import { Books } from '../Books/Books';

function App({ modal }) {
  return (
    <>
      <AppBar position="sticky">
        <Container fixed>
          <Typography variant="h1">
            Books
          </Typography>
        </Container>
      </AppBar>

      <Container fixed>
          <Box mt={5}>
            <Books />
          </Box>
      </Container>

      {/* {modal && <Modal />} */}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    modal: state.reducerModal.modal,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: modal => {
      dispatch(openModal(modal))
    },

    closeModal: () => {
      dispatch(closeModal())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
