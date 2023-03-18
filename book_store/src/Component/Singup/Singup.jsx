import React, { useState } from 'react';
import './Singup.css'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function Singup() {

    const [customerSingupDetails, setCustomerSingupDetails] = useState({ fullname: '', email_id: '', passwords: '', phone_number: 0 });
    const [regexCustomerSingupDetails, setRegexCustomerSingupDetails] = useState({ fullnameError: false, fullnameHelperText: '', email_idError: false, email_idHelperText: '', passwordsError: false, passwordsHelperText: '', phone_numberError: false, phone_numberHelperText: '' });


    return (
        <>
            <div className="SingupMainDiv">
                <div>
                    <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>Full Name</div>
                    <TextField
                        id="outlined-basic1"
                        error={regexCustomerSingupDetails.fullnameError}
                        helperText={regexCustomerSingupDetails.fullnameHelperText}
                        className='InputFullName'
                        variant="outlined"
                        size='small'
                        style={{ width: '21vw' }}
                    />
                </div>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>Email Id</div>
                    <TextField
                        id="outlined-basic2"
                        error={regexCustomerSingupDetails.email_idError}
                        helperText={regexCustomerSingupDetails.email_idHelperText}
                        className='InputGmail'
                        variant="outlined"
                        size='small'
                        style={{ width: '21vw' }}
                    />
                </div>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>Password</div>
                    <TextField
                        id="outlined-basic3"
                        error={regexCustomerSingupDetails.passwordsError}
                        helperText={regexCustomerSingupDetails.passwordsHelperText}
                        className='InputPassword'
                        variant="outlined"
                        size='small'
                        style={{ width: '21vw' }}
                    />
                </div>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>Mobile Number</div>
                    <TextField
                        id="outlined-basic4"
                        error={regexCustomerSingupDetails.phone_numberError}
                        helperText={regexCustomerSingupDetails.phone_numberHelperText}
                        className='InputMobileNumber'
                        variant="outlined"
                        size='small'
                        style={{ width: '21vw' }}
                    />
                </div>
                <Button className="SingUpFormButton" size="large" variant="contained" style={{ backgroundColor: '#A03037', textTransform: 'none', fontSize: '17px', marginTop: '10px' }}>
                    Singup
                </Button>
            </div>
        </>
    )
}

export default Singup;