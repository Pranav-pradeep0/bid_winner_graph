import React from 'react';
import './estExp.css';
import { Box, Typography } from '@mui/material';

const EstExpenses = ({ data }) => {
    return (
        <Box>
            <Box className='exp-item-parent'>
                {data?.map((item, index) => (
                    <Box className='expenses-items' key={index}>
                        <Box style={{ backgroundColor: item.color }} className='color-blocks'></Box>
                        <Box className=''>
                            <Typography variant="subtitle1" className='item-details'>{item.label}</Typography>
                            <Typography variant="body2" sx={{ fontWeight: 'bold' }} className='item-details item-details-amt'>{item.amounts}</Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default EstExpenses;
