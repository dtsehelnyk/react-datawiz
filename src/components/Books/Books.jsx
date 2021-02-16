import React from 'react';
import { Container, Box, Grid, Typography } from '@material-ui/core';

export const Books = () => {

  return (
    <Grid container mt={2} spacing={6}>
      <Grid container item xs={4}>
        <Box>
          <Typography spacing={6}>
            123
          </Typography>
        </Box>
      </Grid>

      <Grid container item xs={4}>
        <Box>
          <Typography spacing={6}>
            123
          </Typography>
        </Box>
      </Grid>

      <Grid container item xs={4}>
        <Box>
          <Typography spacing={6}>
            123
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

