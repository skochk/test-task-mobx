import React from 'react';
import { observer } from 'mobx-react';
import {useEffect}  from 'react';
import store from './store';



const App = observer(() => {
    const {getList, status , pokemons} = store;
    useEffect(()=>{
        getList(0,20);
    },[]);
    return(
        <div>
        {status}
        {pokemons.map(el=>(
            <div key={el.name}>{el.name}</div>
        ))}
        </div>
    )
})

export default App;
