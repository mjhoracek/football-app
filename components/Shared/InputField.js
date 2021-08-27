import React from 'react';
import { styled } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';
import { colors } from '../../styles/colors';


const InputField = withStyles({
    root: {
        marginTop: '1%',
        marginBottom: '1%',
        cursor: 'pointer',
        fontFamily: 'inherit',

            "& .MuiInputBase-root": {
                borderColor: 'white',
                //color of the text user inputs
                color: colors.purple,
                fontFamily: 'inherit'
            },           
            "& .MuiFormLabel-root": {
                color: 'white',
                fontFamily: 'inherit',
              },
             "& .MuiInput-underline:before": {
                borderBottom: "2px solid white"
              },
              "& .MuiInput-underline:after": {
                borderBottom: "2px solid white"
              },
              "& .MuiInput-underline:hover:before": {
                //hover line color
                borderBottom: `2px solid ${colors.purple}`
              }
  }})(TextField);

  export default InputField
