import React, { useState } from 'react';
import { useLogin, useNotify } from 'react-admin';
import { postJSON } from './http';
import config from './config';
// import { ThemeProvider } from '@material-ui/styles';

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
        // <ThemeProvider theme={theme}>
            // {
                (stage === 'phone')
                ?
                <form onSubmit={submit}>
                    <input name="phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)} />
                </form>
                : <>
                    <form onSubmit={submit}>
                        <input name="code" type="text" value={code} onChange={e => setCode(e.target.value)} />
                    </form>
                    <button onClick={() => setStage('phone')}>No Code?</button>
                </>
            // }
        // </ThemeProvider>
    )
};

export default LoginPage;
