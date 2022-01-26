import React, { useState, useEffect } from "react";
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Timepicker = ({ day, register, control }) => {
  const [fromTime, setFromTime] = useState('00:00');
  const [toTime, setToTime] = useState('00:00');
  // const fromValue = getValues(`${day}: From`);
  // const toValue = getValues(`${day}: To`);


  // useEffect(() => {
  //   register(`${day}: From`);
  // }, [register]);

  // useEffect(() => {
  //   register(`${day}: To`);
  // }, [register]);

  // useEffect(() => {
  //   setFromTime(fromValue || null)
  // }, [setFromTime, fromValue]);

  // useEffect(() => {
  //   setToTime(toValue || null);
  // }, [setToTime, toValue]);

  const handleFromChange = (newTime) => {
    console.log(123, newTime._i)
    setFromTime(newTime._i);
  };

  const handleToChange = (newTime) => {
    setToTime(newTime);
  };

  /*
                <FormControl sx={{ minWidth: 300 }}>
                  <InputLabel id='timezone-label'>Timezone</InputLabel>
                  <Controller
                    name='timezone'
                    control={control}
                    value={timezone}
                    onChange={handleTimezone}
                    defaultValue=""
                    render={({ field }) => (
                      <Select
                        {...field}
                        labelId='timezone-label'
                        label='Timezone'
                        // {...register('timezone', {required: 'Required'})}
                      >
                        <MenuItem value={'CST'}>Central Standard Time</MenuItem>
                        <MenuItem value={'MST'}>Mountain Standard Time</MenuItem>
                        <MenuItem value={'PST'}>Pacific Standard Time</MenuItem>
                        <MenuItem value={'AST'}>Alaska Standard Time</MenuItem>
                        <MenuItem value={'HST'}>Hawaii-Aleutian Standard Time</MenuItem>
                      </Select>
                    )}
                  />
                </FormControl>
  */
  return (
    <div>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel id='from'>Free from</InputLabel>
        <Controller
          name={`${day}: from`}
          control={control}
          value={fromTime}
          onChange={handleFromChange}
          defaultValue=""
          render={({ field }) => (
            <Select
              {...field}
              labelId='from'
              label='Free from'
            >
              <MenuItem value={'0'}>12:00am</MenuItem>
              <MenuItem value={'1'}>1:00am</MenuItem>
              <MenuItem value={'2'}>2:00am</MenuItem>
              <MenuItem value={'3'}>3:00am</MenuItem>
              <MenuItem value={'4'}>4:00am</MenuItem>
              <MenuItem value={'5'}>5:00am</MenuItem>
              <MenuItem value={'6'}>6:00am</MenuItem>
              <MenuItem value={'7'}>7:00am</MenuItem>
              <MenuItem value={'8'}>8:00am</MenuItem>
              <MenuItem value={'9'}>9:00am</MenuItem>
              <MenuItem value={'10'}>10:00am</MenuItem>
              <MenuItem value={'11'}>11:00am</MenuItem>
              <MenuItem value={'12'}>12:00pm</MenuItem>
              <MenuItem value={'13'}>1:00pm</MenuItem>
              <MenuItem value={'14'}>2:00pm</MenuItem>
              <MenuItem value={'15'}>3:00pm</MenuItem>
              <MenuItem value={'16'}>4:00pm</MenuItem>
              <MenuItem value={'17'}>5:00pm</MenuItem>
              <MenuItem value={'18'}>6:00pm</MenuItem>
              <MenuItem value={'19'}>7:00pm</MenuItem>
              <MenuItem value={'20'}>8:00pm</MenuItem>
              <MenuItem value={'21'}>9:00pm</MenuItem>
              <MenuItem value={'22'}>10:00pm</MenuItem>
              <MenuItem value={'23'}>11:00pm</MenuItem>
            </Select>
          )}
        />
      </FormControl>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel id='to'>To</InputLabel>
        <Controller
          name={`${day}: to`}
          control={control}
          value={toTime}
          onChange={handleToChange}
          defaultValue=""
          render={({ field }) => (
            <Select
              {...field}
              labelId='to'
              label='To'
            >
              <MenuItem value={'0'}>12:00am</MenuItem>
              <MenuItem value={'1'}>1:00am</MenuItem>
              <MenuItem value={'2'}>2:00am</MenuItem>
              <MenuItem value={'3'}>3:00am</MenuItem>
              <MenuItem value={'4'}>4:00am</MenuItem>
              <MenuItem value={'5'}>5:00am</MenuItem>
              <MenuItem value={'6'}>6:00am</MenuItem>
              <MenuItem value={'7'}>7:00am</MenuItem>
              <MenuItem value={'8'}>8:00am</MenuItem>
              <MenuItem value={'9'}>9:00am</MenuItem>
              <MenuItem value={'10'}>10:00am</MenuItem>
              <MenuItem value={'11'}>11:00am</MenuItem>
              <MenuItem value={'12'}>12:00pm</MenuItem>
              <MenuItem value={'13'}>1:00pm</MenuItem>
              <MenuItem value={'14'}>2:00pm</MenuItem>
              <MenuItem value={'15'}>3:00pm</MenuItem>
              <MenuItem value={'16'}>4:00pm</MenuItem>
              <MenuItem value={'17'}>5:00pm</MenuItem>
              <MenuItem value={'18'}>6:00pm</MenuItem>
              <MenuItem value={'19'}>7:00pm</MenuItem>
              <MenuItem value={'20'}>8:00pm</MenuItem>
              <MenuItem value={'21'}>9:00pm</MenuItem>
              <MenuItem value={'22'}>10:00pm</MenuItem>
              <MenuItem value={'23'}>11:00pm</MenuItem>
            </Select>
          )}
        />
      </FormControl>
      {/* <LocalizationProvider dateAdapter={DateAdapter}>
        <Controller
          name={`${day}: From`}
          control={ control }
          value={fromTime}
          onChange={handleFromChange}
          render={({ field }) => (
            <TimePicker
              {...field}
              label="Free From"
              renderInput={(params) => <TextField {...params} />}
              minutesStep={30}
            />
          )}
        />
        <Controller
          name={`${day}: To`}
          control={ control }
          value={toTime}
          onChange={handleToChange}
          render={({ field }) => (
            <TimePicker
              {...field}
              label="Until"
              renderInput={(params) => <TextField {...params} />}
              minutesStep={30}
            />
          )}
        />
      </LocalizationProvider> */}
    </div>
  );
}
export default Timepicker;