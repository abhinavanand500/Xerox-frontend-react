import React from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "100%",
        },
    },
    formControl: {
        margin: theme.spacing(1),
        width: "100%",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
const UserInfo = ({ formData, setForm, navigation }) => {
    const classes = useStyles();
    const { role, email, phone, semester, password, confirmPassword } =
        formData;
    return (
        <div>
            {role === "Student" ? (
                <FormControl
                    variant='outlined'
                    className={`mt-8 ${classes.formControl}`}>
                    <InputLabel id='demo-simple-select-outlined-label'>
                        Semester
                    </InputLabel>
                    <Select
                        labelId='demo-simple-select-outlined-label'
                        id='demo-simple-select-outlined'
                        value={semester}
                        name='semester'
                        onChange={setForm}
                        label='Semester'>
                        <MenuItem value=''>
                            <em>Semester</em>
                        </MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                    </Select>
                </FormControl>
            ) : (
                <div />
            )}
            <div className={classes.root} noValidate autoComplete='off'>
                <TextField
                    id='outlined-basic1'
                    label='Email Id'
                    variant='outlined'
                    autoComplete='off'
                    value={email}
                    name='email'
                    onChange={setForm}
                />
            </div>
            <div className='my-3' />
            <div className={classes.root} noValidate autoComplete='off'>
                <TextField
                    id='outlined-basic2'
                    label='Phone Number'
                    variant='outlined'
                    autoComplete='off'
                    value={phone}
                    name='phone'
                    onChange={setForm}
                />
            </div>
            <div className='my-3' />

            <div className={classes.root} noValidate autoComplete='off'>
                <TextField
                    id='outlined-basic3'
                    label='Password'
                    variant='outlined'
                    autoComplete='off'
                    type='password'
                    value={password}
                    name='password'
                    onChange={setForm}
                />
            </div>
            <div className='my-3' />
            <div className={classes.root} noValidate autoComplete='off'>
                <TextField
                    id='outlined-basic4'
                    label='Confirm Password'
                    variant='outlined'
                    type='password'
                    autoComplete='off'
                    value={confirmPassword}
                    name='confirmPassword'
                    onChange={setForm}
                />
            </div>
            <div className='my-3' />
            <div className='my-3' />
            <Button
                color='secondary'
                variant='contained'
                onClick={() => navigation.previous()}
                style={{ marginRight: "1rem", marginLeft: "1rem" }}>
                Back
            </Button>
            <Button
                color='primary'
                variant='contained'
                onClick={() => navigation.next()}>
                Next
            </Button>
        </div>
    );
};

export default UserInfo;
