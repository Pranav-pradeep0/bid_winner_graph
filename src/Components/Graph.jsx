import React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import EstExpenses from './EstExpenses';
import './graph.css';
import { Box, Typography } from '@mui/material';

const data = [
    { value: 20, label: 'Supplier Quotes', color: '#FFD966', amounts: '$4,566.00' },
    { value: 10, label: 'Total Material Price', color: '#80CAFF', amounts: '$19,765.00' },
    { value: 15, label: 'Total Labor Charge', color: '#FFAFA3', amounts: '$24,665.00' },
    { value: 20, label: 'Other Expenditure', color: '#85E0A3', amounts: '$13,465.00' },
];

const Graph = () => {
    return (
        <Box className='price-dist-parent'>
            <Box className='graph-parent'>
            <Typography variant="h5" className='graph-title'>Total Price Distribution</Typography>
                <Box className='pie-cont'>
                    <PieChart
                        series={[
                            {
                                data,
                                arcLabel: (item) => `(${item.value}) %`,
                                highlightScope: { faded: 'global', highlighted: 'item' },
                                faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                            },
                        ]}
                        slotProps={{
                            legend: {
                                hidden: true,
                                position: { vertical: 'middle', horizontal: 'right' },
                                padding: 30,
                                itemGap: 30
                            },
                        }}
                        sx={{
                            [`& .${pieArcLabelClasses.root}`]: {
                                fill: 'Black',
                                fontWeight: 'light',
                                padding: '50px',
                            },
                            
                        }}
                        height={600}
                    />
                    <Box className='centerCircle'>
                    <Typography variant="body1">Grand Total</Typography>
                        <Typography variant="h4" style={{ color: '#3153CD' }}>$ 200000</Typography>
                    </Box>
                </Box>
            </Box>
            <Box className='exp-parent'>
                <EstExpenses data={data}></EstExpenses>
            </Box>
        </Box>
    );
};

export default Graph;
