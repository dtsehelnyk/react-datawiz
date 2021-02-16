import React, { useState, useEffect } from 'react';
import { Container, Box, Grid, Typography, Button } from '@material-ui/core';
import { books } from '../../api/data';
import { Book } from '../Book/Book';

export const Books = () => {

  return (
    <Grid container mt={0} spacing={3}>

      {books.map(book => (
        <Grid container item xs={4} key={book.id}>
          <Box p={3} mx="auto" boxShadow={2} width={1}>
            <Book book={book}/>
          </Box>
        </Grid>
      ))}

    </Grid>
  )
}

