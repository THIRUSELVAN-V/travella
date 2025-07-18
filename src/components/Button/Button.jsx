import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons(props) {
  return (
    <Stack spacing={2} direction="row" className={props?.stackClassName}>
      <Button
        variant={props?.variant || "contained"}
        className={props?.className}
        onClick={props?.onClick}
        type={props?.type}
        fullWidth={props?.fullWidth || false}
      >
        {props?.name}
      </Button>
    </Stack>
  );
}
