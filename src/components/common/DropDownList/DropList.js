import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect({ options, value, selectToggle }) {
  const names = options;
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
    selectToggle(event, value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 150 }}>
        <InputLabel id="demo-multiple-name-label" >ALL</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="ALL" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name.id}
              value={name.id}
              style={getStyles(name.label, personName, theme)}

            >
              {name.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}


// import * as React from 'react';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import ListItemText from '@mui/material/ListItemText';
// import Select from '@mui/material/Select';
// import Checkbox from '@mui/material/Checkbox';

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// const names = [
//   'Oliver Hansen',
//   'Van Henry',
//   'April Tucker',
//   'Ralph Hubbard',
//   'Omar Alexander',
//   'Carlos Abbott',
//   'Miriam Wagner',
//   'Bradley Wilkerson',
//   'Virginia Andrews',
//   'Kelly Snyder',
// ];

// export default function MultipleSelectCheckmarks({ options, value, selectToggle }) {
//   const names = options
//   const [personName, setPersonName] = React.useState([]);

//   const handleChange = (event) => {
//     console.log(event)
//     const {
//       target: { value },
//     } = event;
//     console.log(value)
//     const valuearr = [];
//     value.forEach(name => {
//       valuearr.push(name.id)
//     });
//     // value = valuearr
//     setPersonName(
//       // On autofill we get a stringified value.
//       typeof valuearr === 'string' ? valuearr.split(',') : valuearr,
//     );
//     selectToggle(event, valuearr)
//   };

//   return (
//     <div>
//       <FormControl sx={{ m: 1, width: 300 }}>
//         <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
//         <Select
//           labelId="demo-multiple-checkbox-label"
//           id="demo-multiple-checkbox"
//           multiple
//           value={personName}
//           onChange={handleChange}
//           input={<OutlinedInput label="Tag" />}
//           renderValue={(selected) => selected.join(', ')}
//           MenuProps={MenuProps}
//         >
//           {names.map((name) => (
//             <MenuItem key={name.id} value={name}>
//               <Checkbox checked={personName.indexOf(name) > -1} />
//               <ListItemText primary={name.label} />
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </div>
//   );
// }
