import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { Menu as MenuIcon } from "@material-ui/icons";
import {Search as SearchIcon} from "@material-ui/icons";
import './styles.css';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import {Button} from '@mui/material/';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar({value , changeInput}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#FFFFFF' , color:"#000000" }} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <div className=''>
            <div className='header'>
                <h1> Estatery </h1>
                 <Button variant="outline">Rent</Button>
                 <Button variant="outline">Sell</Button>
                 <Button variant="outline">
                    <FormControl fullWidth>
                     <InputLabel variant="standard" htmlFor="uncontrolled-native">
                          Manage Property
                    </InputLabel>
                   <NativeSelect
                        defaultValue={30}
                        inputProps={{
                          name: 'age',
                          id: 'uncontrolled-native',
                        }}
                    >
                  <option value={10}>House</option>
                  <option value={20}>Hotel</option>
                  <option value={30}>Appartment</option>
                  </NativeSelect>
                  </FormControl>
                 </Button>
                 <Button variant="outline">
                    <FormControl fullWidth>
                     <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Resources
                    </InputLabel>
                   <NativeSelect
                        defaultValue={30}
                        inputProps={{
                          name: 'age',
                          id: 'uncontrolled-native',
                        }}
                    >
                  <option value={10}>About Us</option>
                  <option value={20}>Contact US</option>
                  <option value={30}>Terms And Conditions</option>
                  </NativeSelect>
                  </FormControl>
                 </Button>
           </div>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
          <div className='searchbar'>
              <h1>
                Search Properties To Rent
              </h1>
            <Box sx={{ border: 1 }}>

          <Search className='search'>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
             placeholder="Search…"
             inputProps={{ 'aria-label': 'search' }}
             type={'text'}
             value={value}
             onChange={changeInput}
             />
          </Search>
             </Box>
        </div>
    </Box>
  );
}