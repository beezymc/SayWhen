import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Timepicker from '../components/Timepicker.jsx';
import { useForm, Controller } from 'react-hook-form';
import Router from 'next/router'

export default function Home() {
  const { register, control, handleSubmit } = useForm();
  const [home, setHome] = useState(true);
  const [friVisible, setFriVisible] = useState(false);
  const [allFri, setAllFri] = useState(false);
  const [friTimes, setFriTimes] = useState([]);
  const [friKey, setFriKey] = useState(0);
  const [satVisible, setSatVisible] = useState(false);
  const [allSat, setAllSat] = useState(false);
  const [satTimes, setSatTimes] = useState([]);
  const [satKey, setSatKey] = useState(0);
  const [sunVisible, setSunVisible] = useState(false);
  const [allSun, setAllSun] = useState(false);
  const [sunTimes, setSunTimes] = useState([]);
  const [sunKey, setSunKey] = useState(0);
  const [monVisible, setMonVisible] = useState(false);
  const [allMon, setAllMon] = useState(false);
  const [monTimes, setMonTimes] = useState([]);
  const [monKey, setMonKey] = useState(0);
  const [tueVisible, setTueVisible] = useState(false);
  const [allTue, setAllTue] = useState(false);
  const [tueTimes, setTueTimes] = useState([]);
  const [tueKey, setTueKey] = useState(0);
  const [wedVisible, setWedVisible] = useState(false);
  const [allWed, setAllWed] = useState(false);
  const [wedTimes, setWedTimes] = useState([]);
  const [wedKey, setWedKey] = useState(0);
  const [thurVisible, setThurVisible] = useState(false);
  const [allThur, setAllThur] = useState(false);
  const [thurTimes, setThurTimes] = useState([]);
  const [thurKey, setThurKey] = useState(0);
  const [timezone, setTimezone] = useState('');

  const onSubmit = async (data) => {
    const availabilityData = {};
    availabilityData.username = data.username;
    availabilityData.timezone = data.timezone;
    console.log(data['Friday0: from'])
    if (friVisible) {
      availabilityData.friday = '';
      if (allFri) {
        availabilityData.friday += '0-24,';
      } else {
        let i = 0
        while(data['Friday' + i + ': from']) {
          availabilityData.friday += data['Friday' + i + ': from'] + '-' + data['Friday' + i + ': to'] + ',';
          i++;
        }
      }
    }
    if (satVisible) {
      availabilityData.saturday = '';
      if (allSat) {
        availabilityData.saturday = '0-24,';
      } else {
        let i = 0
        while(data['Saturday' + i + ': from']) {
          availabilityData.saturday += data['Saturday' + i + ': from'] + '-' + data['Saturday' + i + ': to'] + ',';
          i++;
        }
      }
    }
    if (sunVisible) {
      availabilityData.sunday = '';
      if (allSun) {
        availabilityData.sunday = '0-24,';
      } else {
        let i = 0
        while(data['Sunday' + i + ': from']) {
          availabilityData.sunday += data['Sunday' + i + ': from'] + '-' + data['Sunday' + i + ': to'] + ',';
          i++;
        }
      }
    }
    if (monVisible) {
      availabilityData.monday = '';
      if (allMon) {
        availabilityData.monday = '0-24,';
      } else {
        let i = 0
        while(data['Monday' + i + ': from']) {
          availabilityData.monday += data['Monday' + i + ': from'] + '-' + data['Monday' + i + ': to'] + ',';
          i++;
        }
      }
    }
    if (tueVisible) {
      availabilityData.tuesday = '';
      if (allTue) {
        availabilityData.tuesday = '0-24,';
      } else {
        let i = 0
        while(data['Tuesday' + i + ': from']) {
          availabilityData.tuesday += data['Tuesday' + i + ': from'] + '-' + data['Tuesday' + i + ': to'] + ',';
          i++;
        }
      }
    }
    if (wedVisible) {
      availabilityData.wednesday = '';
      if (allWed) {
        availabilityData.wednesday = '0-24,';
      } else {
        let i = 0
        while(data['Wednesday' + i + ': from']) {
          availabilityData.wednesday += data['Wednesday' + i + ': from'] + '-' + data['Wednesday' + i + ': to'] + ',';
          i++;
        }
      }
    }
    if (thurVisible) {
      availabilityData.thursday = '';
      if (allThur) {
        availabilityData.thursday = '0-24';
      } else {
        let i = 0
        while(data['Thursday' + i + ': from']) {
          availabilityData.thursday += data['Thursday' + i + ': from'] + '-' + data['Thursday' + i + ': to'] + ',';
          i++;
        }
      }
    }
    console.log(data);
    console.log(availabilityData);
    //post availabilityData
    const res = await fetch('/api/availability', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(availabilityData)
    });

    const result = await res.json();
    if(result.id) {
      Router.push(`/${result.id}`)
    }
  }

  const displaySteps = () => {
    setHome(false);
  };

  const handleTimezone = (event) => {
    setTimezone(event.target.value);
  };

  const showFriday = () => {
    setFriVisible(!friVisible);
  };

  const showSaturday = () => {
    setSatVisible(!satVisible);
  };

  const showSunday = () => {
    setSunVisible(!sunVisible);
  };

  const showMonday = () => {
    setMonVisible(!monVisible);
  };

  const showTuesday = () => {
    setTueVisible(!tueVisible);
  };

  const showWednesday = () => {
    setWedVisible(!wedVisible);
  };

  const showThursday = () => {
    setThurVisible(!thurVisible);
  };

  const allFriday = () => {
    setAllFri(!allFri);
  };

  const allSaturday = () => {
    setAllSat(!allSat);
  };

  const allSunday = () => {
    setAllSun(!allSun);
  };

  const allMonday = () => {
    setAllMon(!allMon);
  };

  const allTuesday = () => {
    setAllTue(!allTue);
  };

  const allWednesday = () => {
    setAllWed(!allWed);
  };

  const allThursday = () => {
    setAllThur(!allThur);
  };

  const addFriTimes = () => {
    const newArr = [...friTimes];
    newArr.push(<Timepicker day={'Friday' + friKey} register={register} control={control}/>);
    setFriTimes(newArr);
    setFriKey(friKey + 1);
  }

  const addSatTimes = () => {
    const newArr = [...satTimes];
    newArr.push(<Timepicker day={'Saturday' + satKey} register={register} control={control}/>);
    setSatTimes(newArr);
    setSatKey(satKey + 1);
  }

  const addSunTimes = () => {
    const newArr = [...sunTimes];
    newArr.push(<Timepicker day={'Sunday' + sunKey} register={register} control={control}/>);
    setSunTimes(newArr);
    setSunKey(sunKey + 1);
  }

  const addMonTimes = () => {
    const newArr = [...monTimes];
    newArr.push(<Timepicker day={'Monday' + monKey} register={register} control={control}/>);
    setMonTimes(newArr);
    setMonKey(monKey + 1);
  }

  const addTueTimes = () => {
    const newArr = [...tueTimes];
    newArr.push(<Timepicker day={'Tuesday' + tueKey} register={register} control={control}/>);
    setTueTimes(newArr);
    setTueKey(tueKey + 1)
  }

  const addWedTimes = () => {
    const newArr = [...wedTimes];
    newArr.push(<Timepicker day={'Wednesday' + wedKey} register={register} control={control}/>);
    setWedTimes(newArr);
    setWedKey(wedKey + 1);
  }

  const addThurTimes = () => {
    const newArr = [...thurTimes];
    newArr.push(<Timepicker day={'Thursday' + thurKey} register={register} control={control}/>);
    setThurTimes(newArr);
    setThurKey(thurKey + 1);
  }

  if (home) {
    return (
      <div className={styles.container}>
        <Head>
          <title>SchedulR</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            SchedulR
          </h1>
          <p className={styles.description}>
            Schedule activities with friends!
          </p>
          <Button variant="contained" onClick={displaySteps}>Start Now</Button>
        </main>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <Head>
          <title>SchedulR</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            SchedulR
          </h1>
          <div className={styles.description}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <TextField
                  required
                  id='outlined-required'
                  label='Your Name Here'
                  {...register('username', {required: 'Required'})}
                />
              </div>
              <div>
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
              </div>
              <h2>
                Availability:
              </h2>
              <div>
                <FormControlLabel control={<Checkbox onChange={ showFriday }/>} label="Available Friday" />
                {friVisible ?
                  <Box
                    sx={{ width: 300, border: '1px solid blue'}}
                  >
                    <FormControlLabel control={<Checkbox onChange={ allFriday }/>} label="Available All Day" />
                    {friTimes}
                    <Button variant="contained" onClick={addFriTimes}>Add Additional Times</Button>
                  </Box>
                : ""}
              </div>
              <div>
                <FormControlLabel control={<Checkbox onChange={ showSaturday }/>} label="Available Saturday" />
                {satVisible ?
                  <Box
                    sx={{ width: 300, border: '1px solid blue'}}
                  >
                    <FormControlLabel control={<Checkbox onChange={ allSaturday }/>} label="Available All Day" />
                    {satTimes}
                    <Button variant="contained" onClick={addSatTimes}>Add Additional Times</Button>
                  </Box>
                : ""}
              </div>
              <div>
                <FormControlLabel control={<Checkbox onChange={ showSunday }/>} label="Available Sunday" />
                {sunVisible ?
                  <Box
                    sx={{ width: 300, border: '1px solid blue'}}
                  >
                    <FormControlLabel control={<Checkbox onChange={ allSunday }/>} label="Available All Day" />
                    {sunTimes}
                    <Button variant="contained" onClick={addSunTimes}>Add Additional Times</Button>
                  </Box>
                : ""}
              </div>
              <div>
                <FormControlLabel control={<Checkbox onChange={ showMonday }/>} label="Available Monday" />
                {monVisible ?
                  <Box
                    sx={{ width: 300, border: '1px solid blue'}}
                  >
                    <FormControlLabel control={<Checkbox onChange={ allMonday }/>} label="Available All Day" />
                    {monTimes}
                    <Button variant="contained" onClick={addMonTimes}>Add Additional Times</Button>
                  </Box>
                : ""}
              </div>
              <div>
                <FormControlLabel control={<Checkbox onChange={ showTuesday }/>} label="Available Tuesday" />
                {tueVisible ?
                  <Box
                    sx={{ width: 300, border: '1px solid blue'}}
                  >
                    <FormControlLabel control={<Checkbox onChange={ allTuesday }/>} label="Available All Day" />
                    {tueTimes}
                    <Button variant="contained" onClick={addTueTimes}>Add Additional Times</Button>
                  </Box>
                : ""}
              </div>
              <div>
                <FormControlLabel control={<Checkbox onChange={ showWednesday }/>} label="Available Wednesday" />
                {wedVisible ?
                  <Box
                    sx={{ width: 300, border: '1px solid blue'}}
                  >
                    <FormControlLabel control={<Checkbox onChange={ allWednesday }/>} label="Available All Day" />
                    {wedTimes}
                    <Button variant="contained" onClick={addWedTimes}>Add Additional Times</Button>
                  </Box>
                : ""}
              </div>
              <div>
                <FormControlLabel control={<Checkbox onChange={ showThursday }/>} label="Available Thursday" />
                {thurVisible ?
                  <Box
                    sx={{ width: 300, border: '1px solid blue'}}
                  >
                    <FormControlLabel control={<Checkbox onChange={ allThursday }/>} label="Available All Day" />
                    {thurTimes}
                    <Button variant="contained" onClick={addThurTimes}>Add Additional Times</Button>
                  </Box>
                : ""}
              </div>
            <Button variant="contained" type='submit'>Finish!</Button>
            </form>
          </div>
        </main>
      </div>
    );
  }
}
