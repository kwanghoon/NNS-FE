import { FormControl, makeStyles, MenuItem, Select, TextField } from '@material-ui/core';
import Input from './Input';
import InputLabel from '@material-ui/core/InputLabel';
import { ChangeEvent, useState } from 'react';

const useStyle = makeStyles({
  propertyContentContainer: {
    width: '100%',
  },
});

type Props = {
  propertyName: string,
  propertyContent: string | string[] | number,
  propertyCandidates: Array<string | number>,
  onChange: any,
}

const isVaild = (str : string) => {
  if(str.trim() == "")return false;
  return true;
}

const SelectInput = ({propertyContent, propertyName, propertyCandidates, onChange}: Props) => {
  const classes = useStyle();
  const [error, setError] = useState(!isVaild(propertyContent as string));

  const candidateComponent = propertyCandidates.map((candidate) => {
    return (<MenuItem
      key={candidate}
      value={candidate}
    >
      {candidate}
    </MenuItem>)
  });

  const handleChange = (e : ChangeEvent<any>) => {
    setError(!isVaild(e.target.value));
    onChange(e);
  }

  const body = (
    <FormControl className={classes.propertyContentContainer}>
      <InputLabel>{propertyName}</InputLabel>
      <Select
        error={error}
        name={propertyName}
        onChange={(e) => {handleChange(e)}}
        value={propertyContent}
      >
        <MenuItem value={propertyContent}>
          {propertyContent}
        </MenuItem>
        {candidateComponent}
      </Select>
    </FormControl>
    )

  return (
    <Input
      body={body}
    />)
};

export default SelectInput;
