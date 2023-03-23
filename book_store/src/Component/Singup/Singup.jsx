import React, { useState } from 'react';
import './Singup.css'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { CustomerSignupApi } from '../../Services/CustomerSevice';

const nameRegex = /^([A-Z]{1}[a-z,A-Z]{2,})$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const phoneRegex = /^([0-9]*).{10}$/;

function Singup() {

    const [customerSingupDetails, setCustomerSingupDetails] = useState({ fullname: '', email_id: '', passwords: '', phone_number: 0 });
    const [regexCustomerSingupDetails, setRegexCustomerSingupDetails] = useState({ fullnameError: false, fullnameHelperText: ' ', email_idError: false, email_idHelperText: ' ', passwordsError: false, passwordsHelperText: ' ', phone_numberError: false, phone_numberHelperText: ' ' });

    const FullNameSingupTextField = (e) => {
        setCustomerSingupDetails(preState => ({ ...preState, fullname: e.target.value }))
    }

    const EmailIdSingupTextField = (e) => {
        setCustomerSingupDetails(preState => ({ ...preState, email_id: e.target.value }))
    }

    const PasswordSingupTextField = (e) => {
        setCustomerSingupDetails(preState => ({ ...preState, passwords: e.target.value }))
    }

    const PhoneNumberSingupTextField = (e) => {
        setCustomerSingupDetails(preState => ({ ...preState, phone_number: Number(e.target.value) }))
    }

    const SignupButton = () => {
        let fullNameRegexCheck = nameRegex.test(customerSingupDetails.fullname)
        let emailIdRegexCheck = emailRegex.test(customerSingupDetails.email_id)
        let passwordsRegexCheck = passwordRegex.test(customerSingupDetails.passwords)
        let phoneRegexCheck = phoneRegex.test(customerSingupDetails.phone_number)

        if (fullNameRegexCheck) {
            setRegexCustomerSingupDetails(preState => ({ ...preState, fullnameError: false, fullnameHelperText: ' ' }))
        }
        else {
            setRegexCustomerSingupDetails(preState => ({ ...preState, fullnameError: true, fullnameHelperText: 'Enter Correct format Name' }))
        }

        if (emailIdRegexCheck) {
            setRegexCustomerSingupDetails(preState => ({ ...preState, email_idError: false, email_idHelperText: ' ' }))
        }
        else {
            setRegexCustomerSingupDetails(preState => ({ ...preState, email_idError: true, email_idHelperText: 'Enter Correct format email' }))
        }

        if (passwordsRegexCheck) {
            setRegexCustomerSingupDetails(preState => ({ ...preState, passwordsError: false, passwordsHelperText: ' ' }))
        }
        else {
            setRegexCustomerSingupDetails(preState => ({ ...preState, passwordsError: true, passwordsHelperText: 'Enter Correct format password' }))
        }

        if (phoneRegexCheck) {
            setRegexCustomerSingupDetails(preState => ({ ...preState, phone_numberError: false, phone_numberHelperText: ' ' }))
        }
        else {
            setRegexCustomerSingupDetails(preState => ({ ...preState, phone_numberError: true, phone_numberHelperText: 'Enter 10 digits number' }))
        }

        if (fullNameRegexCheck && emailIdRegexCheck && passwordsRegexCheck && phoneRegexCheck) {
            let customerSigupData = {
                "fullname": customerSingupDetails.fullname,
                "email_id": customerSingupDetails.email_id,
                "passwords": customerSingupDetails.passwords,
                "phone_number": customerSingupDetails.phone_number
              }
            CustomerSignupApi(customerSigupData)
            .then(res => {
                console.log(res)
                console.log("1")
            })
            .catch(err => {
                console.log(err)
                console.log("3")
            })
        }
    }

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
                        onChange={FullNameSingupTextField}
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
                        onChange={EmailIdSingupTextField}
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
                        type="password"
                        onChange={PasswordSingupTextField}
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
                        onChange={PhoneNumberSingupTextField}
                        style={{ width: '21vw' }}
                    />
                </div>
                <Button
                    className="SingUpFormButton"
                    size="large"
                    variant="contained"
                    style={{ backgroundColor: '#A03037', textTransform: 'none', fontSize: '17px', marginTop: '10px' }}
                    onClick={SignupButton}
                >
                    Singup
                </Button>
            </div>
        </>
    )
}

export default Singup;