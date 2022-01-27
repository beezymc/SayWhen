import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { DataGrid } from '@mui/x-data-grid';
import { useForm, Controller } from 'react-hook-form';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Timepicker from '../components/Timepicker.jsx';
import Tooltip from '@mui/material/Tooltip';

export default function Availability() {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm();
  const [username, setUsername] = useState('');
  const [timezone, setTimezone] = useState('');
  const [monday, setMonday] = useState([]);
  const [tuesday, setTuesday] = useState([]);
  const [wednesday, setWednesday] = useState([]);
  const [thursday, setThursday] = useState([]);
  const [friday, setFriday] = useState([]);
  const [saturday, setSaturday] = useState([]);
  const [sunday, setSunday] = useState([]);
  const [rows, setRows] = useState([]);
  const [activity, setActivity] = useState([]);
  const [day, setDay] = useState('');
  const { uid } = router.query;

  useEffect(async () => {
    if (!uid) {
      return;
    }
    const res = await fetch(`/api/availability/${uid}`, { method: 'GET' });
    const { availability } = await res.json();
    setUsername(availability.username);
    setTimezone(availability.timezone);
    setMonday(convertAvailabilityRanges(availability.monday));
    setTuesday(convertAvailabilityRanges(availability.tuesday));
    setWednesday(convertAvailabilityRanges(availability.wednesday));
    setThursday(convertAvailabilityRanges(availability.thursday));
    setFriday(convertAvailabilityRanges(availability.friday));
    setSaturday(convertAvailabilityRanges(availability.saturday));
    setSunday(convertAvailabilityRanges(availability.sunday));
  }, [uid]);

  useEffect(() => {
    setRows(convertDaystoRows([...monday], [...tuesday], [...wednesday], [...thursday], [...friday], [...saturday], [...sunday]));
  }, [monday, tuesday, wednesday, thursday, friday, saturday, sunday]);

  useEffect(async () => {
    if (!uid) {
      return;
    }
    const res = await fetch(`/api/activity/${uid}`, { method: 'GET' });
    const { activities } = await res.json();
    let id = 1;
    let rows = [];
    while (activities.length) {
      let row = { id };
      let curr = activities.shift();
      row['Activity'] = curr.activity;
      row['Description'] = curr.activity_description;
      row['Day'] = curr.day;
      row['Time'] = `${convertToTwelveHour(curr.from)} to ${convertToTwelveHour(curr.to)}`;
      row['Creator'] = curr.friend_name;
      id++;
      rows.push(row);
    }
    setActivity(rows);
  }, [uid])

  const onSubmit = async (data) => {
    data.availabilityId = uid;
    const res = await fetch(`/api/activity`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const result = await res.json();
    const resTwo = await fetch(`/api/activity/${uid}`, { method: 'GET' });
    const { activities } = await resTwo.json();
    let id = 1;
    let rows = [];
    while (activities.length) {
      let row = { id };
      let curr = activities.shift();
      row['Activity'] = curr.activity;
      row['Description'] = curr.activity_description;
      row['Day'] = curr.day;
      row['Time'] = `${convertToTwelveHour(curr.from)} to ${convertToTwelveHour(curr.to)}`;
      row['Creator'] = curr.friend_name;
      id++;
      rows.push(row);
    }
    setActivity(rows);
  }

  const handleDay = (event) => {
    setDay(event.target.value);
  };

  const convertDaystoRows = (monday, tuesday, wednesday, thursday, friday, saturday, sunday) => {
    let id = 1;
    let rows = [];
    while (monday.length || tuesday.length || wednesday.length || thursday.length || friday.length || saturday.length || sunday.length) {
      let row = { id }
      if (monday.length) {
        let curr = monday.shift();
        if (curr[0] === 0 && curr[1] === 24) {
          row['Monday'] = 'All Day!'
        } else {
          row['Monday'] = `${convertToTwelveHour(curr[0])} to ${convertToTwelveHour(curr[1])}`
        }
      }
      if (tuesday.length) {
        let curr = tuesday.shift();
        if (curr[0] === 0 && curr[1] === 24) {
          row['Tuesday'] = 'All Day!'
        } else {
          row['Tuesday'] = `${convertToTwelveHour(curr[0])} to ${convertToTwelveHour(curr[1])}`
        }
      }
      if (wednesday.length) {
        let curr = wednesday.shift();
        if (curr[0] === 0 && curr[1] === 24) {
          row['Wednesday'] = 'All Day!'
        } else {
          row['Wednesday'] = `${convertToTwelveHour(curr[0])} to ${convertToTwelveHour(curr[1])}`
        }
      }
      if (thursday.length) {
        let curr = thursday.shift();
        if (curr[0] === 0 && curr[1] === 24) {
          row['Thursday'] = 'All Day!'
        } else {
          row['Thursday'] = `${convertToTwelveHour(curr[0])} to ${convertToTwelveHour(curr[1])}`
        }
      }
      if (friday.length) {
        let curr = friday.shift();
        if (curr[0] === 0 && curr[1] === 24) {
          row['Friday'] = 'All Day!'
        } else {
          row['Friday'] = `${convertToTwelveHour(curr[0])} to ${convertToTwelveHour(curr[1])}`
        }
      }
      if (saturday.length) {
        let curr = saturday.shift();
        if (curr[0] === 0 && curr[1] === 24) {
          row['Saturday'] = 'All Day!'
        } else {
          row['Saturday'] = `${convertToTwelveHour(curr[0])} to ${convertToTwelveHour(curr[1])}`
        }
      }
      if (sunday.length) {
        let curr = sunday.shift();
        if (curr[0] === 0 && curr[1] === 24) {
          row['Sunday'] = 'All Day!'
        } else {
          row['Sunday'] = `${convertToTwelveHour(curr[0])} to ${convertToTwelveHour(curr[1])}`
        }
      }
      rows.push(row);
      id++;
    }
    return rows;
  }

  const convertToTwelveHour = (number) => {
    if (number === 0) {
      return '12AM';
    } else if (number === 12) {
      return '12PM';
    } else if (number < 12) {
      return number + 'AM';
    } else {
      return (number - 12) + 'PM';
    }
  }

  const convertAvailabilityRanges = (availabilityString) => {
    if (availabilityString === '') {
      return [];
    } else if (availabilityString === '0-24,') {
      return [[0, 24]];
    } else {
      let availabilityArr = [];
      let tuples = availabilityString.split(',');
      for (let i = 0; i < tuples.length - 1; i++) {
        let fromTo = tuples[i].split('-');
        let intFromTo = [parseInt(fromTo[0]), parseInt(fromTo[1])];
        availabilityArr.push(intFromTo);
      }
      return availabilityArr;
    }
  }

  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.title}>
          SayWhen!
        </h1>
        <h2>
          {`Here are the times (in ${timezone}) when ${username} is free:`}
        </h2>
        <h3>
          Please keep the URL handy if you&apos;d like to revisit {username}&apos;s page!
        </h3>
        <div style={{ width: '100%', height: 342 }}>
          <DataGrid
            hideFooter={true}
            density={'comfortable'}
            disableColumnMenu={true}
            columns={[
              {
                field: 'Monday',
                headerName: 'Monday',
                flex: 1
              },
              {
                field: 'Tuesday',
                headerName: 'Tuesday',
                flex: 1
              },
              {
                field: 'Wednesday',
                headerName: 'Wednesday',
                flex: 1
              },
              {
                field: 'Thursday',
                headerName: 'Thursday',
                flex: 1
              },
              {
                field: 'Friday',
                headerName: 'Friday',
                flex: 1
              },
              {
                field: 'Saturday',
                headerName: 'Saturday',
                flex: 1
              },
              {
                field: 'Sunday',
                headerName: 'Sunday',
                flex: 1
              }
            ]}
            rows={rows}
          />
        </div>
        <div className={styles.activitybox}>
          <div className={styles.activityformbox}>
            <h4>
              Schedule an Activity
            </h4>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.activityform}>
                <TextField
                  required
                  id='outlined-required'
                  label='Your activity name'
                  sx={{my: 2}}
                  {...register('activityName', {required: 'Required'})}
                />
                <TextField
                  required
                  multiline={true}
                  rows={5}
                  sx={{my: 2}}
                  id='outlined-required'
                  label='Describe your activity'
                  {...register('activityDescription', {required: 'Required'})}
                />
                <FormControl sx={{ minWidth: 300, my: 2 }}>
                  <InputLabel id='day-label'>What Day Is Your Activity?</InputLabel>
                  <Controller
                    name='day'
                    control={control}
                    value={day}
                    onChange={handleDay}
                    defaultValue=""
                    render={({ field }) => (
                      <Select
                        {...field}
                        labelId='day-label'
                        label='day'
                      >
                        <MenuItem value={'Friday'}>Friday</MenuItem>
                        <MenuItem value={'Saturday'}>Saturday</MenuItem>
                        <MenuItem value={'Sunday'}>Sunday</MenuItem>
                        <MenuItem value={'Monday'}>Monday</MenuItem>
                        <MenuItem value={'Tuesday'}>Tuesday</MenuItem>
                        <MenuItem value={'Wednesday'}>Wednesday</MenuItem>
                        <MenuItem value={'Thursday'}>Thursday</MenuItem>
                      </Select>
                    )}
                  />
                </FormControl>
              <Timepicker day={'activity'} register={register} control={control}/>
                <TextField
                  required
                  id='outlined-required'
                  label='Your name'
                  sx={{my: 2}}
                  {...register('friendName', {required: 'Required'})}
                />
              <Button  sx={{my: 2}} variant="contained" type='submit'>Add Activity!</Button>
            </form>
          </div>
          <div className={styles.activitytable}>
            <h4>
              Current Activities
            </h4>
            {activity.length ?
            <div style={{ width: '100%', height: 200 }}>
              <DataGrid
                hideFooter={true}
                density={'comfortable'}
                autoHeight={true}
                disableColumnMenu={true}
                sx={{my: 2}}
                columns={[
                  {
                    field: 'Activity',
                    headerName: 'Activity',
                    flex: 1
                  },
                  {
                    field: 'Description',
                    headerName: 'Description',
                    flex: 3,
                    renderCell: (params) => {
                      return (
                        <Tooltip title={params.value} placement='top'>
                          <div style={{ overflow: 'hidden', textOverflow: 'ellipsis'}}>
                            {params.value}
                          </div>
                        </Tooltip>
                      );
                    }
                  },
                  {
                    field: 'Day',
                    headerName: 'Day',
                    flex: .5
                  },
                  {
                    field: 'Time',
                    headerName: 'Time',
                    flex: 1
                  },
                  {
                    field: 'Creator',
                    headerName: 'Creator',
                    flex: 1
                  }
                ]}
                rows={activity}
              />
            </div>
            : 'Nothing yet!'}
          </div>
        </div>
      </main>
    </div>
  )
}
