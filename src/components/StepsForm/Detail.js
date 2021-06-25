import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
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

const Detail = ({ formData, setForm, navigation }) => {
    const classes = useStyles();
    const { role, shopName, usn, department } = formData;
    return (
        <div>
            {role === "Xerox" ? (
                <div>
                    <div className={classes.root} noValidate autoComplete='off'>
                        <TextField
                            id='outlined-basic'
                            label='Shop Name'
                            variant='outlined'
                            autoComplete='off'
                            value={shopName}
                            name='shopName'
                            onChange={setForm}
                        />
                    </div>
                    <div className='my-3' />
                </div>
            ) : (
                <div>
                    <div className={classes.root} noValidate autoComplete='off'>
                        <TextField
                            id='outlined-basic'
                            label='USN'
                            variant='outlined'
                            autoComplete='off'
                            value={usn}
                            name='usn'
                            onChange={setForm}
                        />
                    </div>
                    <div className='my-3' />
                    <FormControl
                        variant='outlined'
                        className={classes.formControl}>
                        <InputLabel id='demo-simple-select-outlined-label'>
                            Department
                        </InputLabel>
                        <Select
                            labelId='demo-simple-select-outlined-label'
                            id='demo-simple-select-outlined'
                            value={department}
                            name='department'
                            onChange={setForm}
                            label='Department'>
                            <MenuItem value=''>
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value='ISE'>
                                Information Science and Engineering
                            </MenuItem>
                            <MenuItem value='CSE'>
                                Computer Science and Engineering
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <div className='my-3' />
                </div>
            )}
            <div className='text-gray-500 text-center mt-4 mb-4 font-bold'>
                <h1 className='mt-1 mb-3'>
                    <span className='mx-2'>📓</span> Please Enter your Correct
                    Details.
                </h1>
            </div>
            <div className='my-4' />
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

export default Detail;
