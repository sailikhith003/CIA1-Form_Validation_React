import React, { useState } from 'react'
import { colors, TextField, withStyles } from '@mui/material'
import styled from '@emotion/styled';
function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nameerr, setnameErr] = useState("");
    const [emailerr, setemailErr] = useState("");
    const [pswderr, setpswdErr] = useState("");
    const [passMsg, setPassMsg] = useState({ msg: "", color: "" });

    function handlePass(pass) {
        let count = 0;
        let reg=/[0-9]+/.test(pass);
        if(reg)
        {
          count=count+1;
        }
        let Special = /[*@$!#%&()^~{}]+/.test(pass);
        if (Special) {
          count = count + 1;
        }
        let Upper = /[A-Z]+/.test(pass);
        if (Upper) {
          count = count + 1;
        }
        let lower =/[a-z]+/.test(pass);
        if(lower)
        {
            count=count+1
        }
        if (count === 1) {
          setPassMsg({ msg: "Password is weak", color: "red" });
        } else if (count === 2) {
          setPassMsg({ msg: "Password is good", color: "orange" });
        } else if (count === 3) {
          setPassMsg({ msg: "Password is strong", color: "lightgreen" });
        } else if (count === 4) {
          setPassMsg({ msg: "Password is very strong", color: "green" });
        }
      }
    function HandleError() {
        
        setnameErr("");
       
        if (name === '') {
            setnameErr("Please Fill The UserName")
        }
    }
    function HandleError1(){
        const reg1 = new RegExp("^[a-z0-9]+@[a-z.a-z]")
        
        setemailErr("");
       
        if (email === '') {
            setemailErr("Please Fill The Email");
        }
        else if (!reg1.test(email)) {
            setemailErr("Email Is InValid ")
        }
    }
    function HandleError2()
    {
       
        setpswdErr("");
    
        if (password === '') {
            setpswdErr("Please Fill The Password");
        }

    }

    return (
        <>
            <h1>Dynamic Form</h1>
            <div className='formtable'>
                <TextField onMouseOver={HandleError} style={{border:nameerr?"2px solid red":" "}} value={name} onChange={(e) => { setName(e.target.value) }}  label="USERNAME"  />
                <p className='error'>{nameerr}</p>
                <TextField onMouseOver={HandleError1} style={{border:emailerr?"2px solid red":" "}}value={email} onChange={e => { setEmail(e.target.value) }}  label="Email" />
                <p className='error'>{emailerr}</p>
                <TextField  onMouseOver={HandleError2}  style={{border:pswderr?"2px solid red":" "}}value={password} type='password' onChange={e => { setPassword(e.target.value); handlePass(e.target.value) }}  label="Password"/>
                <p className='error'>{pswderr}</p>
                 <p style={{ color: passMsg.color }}>{passMsg.msg}</p>

            </div>
        </>
    );
}

export default Form;