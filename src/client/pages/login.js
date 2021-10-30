import React, { useState } from 'react'


const Login = () => {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [authenticate, setAut] = useState(false);

  const login = () => {
    fetch('authentication',
      {
       method: 'POST',
       headers: {"Content-Type" : "application/json" },
       body: JSON.stringify({user: user, pass: pass})
      })
      .then(async (res) => {
        if(res.ok)
        {
          setAut(await res.json());
        }
      })
  }

  return (
    <div>
      {authenticate ? 'Logado' : 'Não Logado'}
      <div>
        <label>Usuario</label>
        <input type="text" onChange={(e) => setUser(e.target.value)} />
        <label>Senha</label>
        <input type="password" onChange={(e) => setPass(e.target.value)} />
        <button onClick={login}>Login</button>
      </div>
    </div>
  )
}

export default Login;