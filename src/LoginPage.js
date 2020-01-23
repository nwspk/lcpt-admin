import React, { useState } from 'react';
import { useLogin, useNotify } from 'react-admin';
import { postJSON } from './http';
import config from './config';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const LoginPage = ({ theme }) => {
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');
    const [stage, setStage] = useState('phone');
    const login = useLogin();
    const notify = useNotify();
    const submit = (e) => {
        e.preventDefault();
        if (phone && !code) {
            postJSON(`${config.api}/smsAuth/start`, {
                phone,
            });
            setStage('code');
        }
        login({ phone, code })
            .catch(() => notify('Invalid code'));
    };
    return (
        <div className='page'>
            <div className='vertical-align'>
                <div className='horizontal-align'>
                    <div className='login-card'>
                        <h1>Login</h1>
                        <div>
                            {
                                (stage === 'phone')
                                    ? <>
                                        <form onSubmit={submit}>
                                            <label for='phone'>Phone Number</label>
                                            <br />
                                            <br />
                                            <PhoneInput
                                                name='phone'
                                                id='phone'
                                                defaultCountry='GB'
                                                placeholder="Enter phone number"
                                                value={phone}
                                                onChange={setPhone} />
                                            <br />
                                            <br />
                                            <button>Next</button>
                                        </form>
                                    </> : <>
                                        <form onSubmit={submit}>
                                            <label for='code'>Enter 6 digit code</label>
                                            <br />
                                            <br />
                                            <input name="code" id='code' maxLength='6' type="text" value={code} onChange={e => setCode(e.target.value)} placeholder='X X X X X X' style={{ textAlign: 'center' }} />
                                            <br />
                                            <br />
                                            <button>Login</button>
                                        </form>
                                        <br /><br />
                                        <button onClick={() => setStage('phone')} className='no-code'>No Code?</button>
                                    </>
                            }
                        </div>
                        <div><br /></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LoginPage;
