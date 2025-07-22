import React from 'react';

import { Box, Typography } from '@mui/material';

import AccountForm from '../accountform';

const AccountFormView = () => (
<Box>
<Box sx={{position:'relative'}}>
<Typography sx={{position:'absolute',top:'-90px',right:'0'}}>
<img  src="/assets/background/stepsbg1.svg" alt='step' />
</Typography>
<Typography sx={{position:'absolute',top:'300px',left:'0', overflow:'hidden', zIndex:'-1'}}>
<img  src="/assets/background/stepsbg2.svg" alt='step' />
</Typography>

</Box>
    <AccountForm />
</Box>
 
);

export default AccountFormView;
