import { decorate, runInAction, computed, observable, action } from 'mobx';
import {fetchList} from "./../api.js";

class Store{
    pokemons = []
    status = 'pending'

    pushPokemons = (item)=>{
        this.pokemons.push(item);
    }
    getList = async (offset,limit)=>{
        fetchList(offset,limit)
        .then(data=>{
            console.log('asd',data.results);
            runInAction(()=>{
                this.pokemons = data.results
                this.status = "success"
            })

        }).catch(err=>{
            runInAction(()=>{
                this.status = "error";
            })
        })
    }
}

decorate(Store,{
    pokemons: observable,
    status: observable,
})
export default new Store(); 