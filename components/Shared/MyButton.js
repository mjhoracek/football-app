import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import { colors } from '@material-ui/core';


const MyButton = withStyles({
    root: {
        background: 'linear-gradient(90deg, rgba(12,38,85,1) 0%, rgba(1,5,11,1) 50%, rgba(12,38,85,1) 100%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
          '&:hover' : {
            color: colors.purple
        }
      },
      label: {
        textTransform: 'capitalize',
      },
        
  })(Button);

  export default MyButton

