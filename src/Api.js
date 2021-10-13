const BASE_API = '';

export default {
    checkToken:async (token) => {
        const req = await fetch(`${BASE_API}/auth/refresh`,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/jason'
            },
            body: JSON.stringify({token})
        });
        const json = await  req.json();
        return json;
    },
    
    Login: async (user, password) => {
        
        const req = await fetch(`${BASE_API}/auth/login`,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/jason'
            },
            body: JSON.stringify({user, password})
        });
        const json = await  req.json();
        return json;
    },

    Cadastro: async (nome, telefone, password) => {
        const req = await fetch(`${BASE_API}/user`,{
            method: 'POST',
            header: {
                Accept: 'application/json',
                'Content-Type': 'application/jason'
            },
            body: JSON.stringify({nome, telefone, password})
        });
        const json = await  req.json();
        return json;
    },
}