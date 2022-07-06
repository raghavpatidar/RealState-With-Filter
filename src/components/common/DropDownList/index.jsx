import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import DropList from './DropList'

const useStyles = makeStyles({
  root: {
    width: '100%',
    justifyContent: 'space-between',
  },
  toggle: {
    fontFamily: `'Raleway', sans-serif`,
    fontSize: '.8rem',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    borderRadius: '10px',
    '&.MuiToggleButtonGroup-groupedHorizontal:not(:last-child)': {
      borderRadius: '10px',
    },
    '&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)': {
      borderRadius: '10px',
      border: '1px solid rgba(0, 0, 0, 0.12)',
    },
    '&.Mui-selected': {
      borderRadius: '10px',
      background: '#000',
      color: '#fff',
    },
    '&.MuiToggleButton-root': {
      '&:hover': {
        background: '#000',
        color: '#fff',
      },
    },
  },
});

const DropDownList = ({ options, value, selectToggle }) => {
  const classes = useStyles();
  return (
    <DropList 
     options={options}
      value={value}
      selectToggle = {selectToggle}
      key = {1}
    ></DropList>
  );
};

export default DropDownList;
