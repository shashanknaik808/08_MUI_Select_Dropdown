import React, { useState } from 'react';
import {
    TextField,
    Button,
    FormGroup,
    FormControlLabel,
    Checkbox,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from '@mui/material';

function Test() {

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
        subscribe: false
    });

    function handleChange(e) {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(inputs);
    }

    return (
        <div>
            <form
                style={{ display: "flex", flexDirection: "column" }}
                onSubmit={handleSubmit}>
                <TextField name='name' value={inputs.name}
                    onChange={handleChange} type={'text'}
                    sx={{ margin: 3 }} placeholder='Name' variant='outlined' />
                <TextField name='email' value={inputs.email}
                    onChange={handleChange} type={'email'}
                    sx={{ margin: 3 }} placeholder='Email' variant='standard' />
                <TextField name='password' value={inputs.password}
                    onChange={handleChange} type={'password'}
                    sx={{ margin: 3 }} placeholder='Password' variant='filled' />

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={() =>
                                    setInputs((prev) => ({
                                        ...prev,
                                        subscribe: !inputs.subscribe,
                                    }))
                                }
                            />
                        } label="I'm not a Robot" />
                </FormGroup>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}

export default Test;