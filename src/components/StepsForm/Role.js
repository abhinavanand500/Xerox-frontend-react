import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: "100%",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const Role = ({ formData, setForm, navigation }) => {
    const classes = useStyles();
    const { role, college } = formData;
    console.log(role);
    return (
        <div>
            <div className='relative w-full mb-3'>
                <FormControl variant='outlined' className={classes.formControl}>
                    <InputLabel id='demo-simple-select-outlined-label'>
                        College Name
                    </InputLabel>
                    <Select
                        labelId='demo-simple-select-outlined-label'
                        id='demo-simple-select-outlined'
                        value={college}
                        name='college'
                        onChange={setForm}
                        label='Designation'>
                        <MenuItem value=''>
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value='New Horizon College Of Engineering'>
                            New Horizon College Of Engineering
                        </MenuItem>
                        <MenuItem value='Ramaiah College of Engineering'>
                            Ramaiah College of Engineering
                        </MenuItem>
                    </Select>
                </FormControl>
                <div className='my-3' />
                <FormControl
                    variant='outlined'
                    className={`mt-8 ${classes.formControl}`}>
                    <InputLabel id='demo-simple-select-outlined-label'>
                        Your Designation
                    </InputLabel>
                    <Select
                        labelId='demo-simple-select-outlined-label'
                        id='demo-simple-select-outlined'
                        value={role}
                        name='role'
                        onChange={setForm}
                        label='Designation'>
                        <MenuItem value=''>
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value='Student'>Student</MenuItem>
                        <MenuItem value='Teacher'>Teacher</MenuItem>
                        <MenuItem value='Xerox'>Xerox Shop</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    variant='contained'
                    fullWidth
                    color='primary'
                    onClick={() => navigation.next()}
                    style={{ marginTop: "1rem" }}>
                    Next
                </Button>
            </div>
        </div>
    );
};

export default Role;
