import { FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material'
import React from 'react'
import Product from '../components/Product/Product';

const Products = () => {
    const [age, setAge] = React.useState<string>('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };
    return (
        <Grid container marginTop={3}>
            <Grid item md={2}>
                <Typography variant='body1' fontWeight={600} paddingY={1} borderBottom={1}>Lọc sản phẩm</Typography>
                <Typography fontWeight={500} marginY={2}>Tìm Khoảng giá</Typography>
                <TextField size="small" sx={{ minWidth: '100%', m:1 }} id="outlined-basic" label="Outlined" variant="outlined" />
                <FormControl variant="standard" sx={{ minWidth: '100%', m: 1 }}>
                    <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={age}
                        onChange={handleChange}
                        label="Age"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ minWidth: '100%', m: 1 }}>
                    <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={age}
                        onChange={handleChange}
                        label="Age"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item container maxWidth={"100%"} md={10} gap={2} padding={2}>
                {
                    [1,2,3,4].map((item: number) => <Product key={item}/>)
                }
            </Grid>
        </Grid>
    )
}

export default Products