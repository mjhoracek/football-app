import React from 'react';
import { styled } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';


const InputField = withStyles({
    root: {

        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,

            "& .MuiInputBase-root": {
                borderColor: 'white'
            },
            "& .MuiFormLabel-root": {
                color: 'white'
              },
              '& .MuiInput-underline:before': {
                borderColor: 'white'
             },
             '& .MuiInput-underline:after': {
                borderColor: 'white'
             },
             '& .MuiInput-underline:hover': {
                borderColor: 'white'
             },
  }})(TextField);

  export default InputField
