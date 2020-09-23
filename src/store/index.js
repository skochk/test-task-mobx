import { decorate, runInAction, computed, observable, action } from 'mobx';
import {fetchList} from "./../api.js";

class Store{
    pokemons = [];
    status = 'pending';
    itemsCount = 0;
    elementPerList = 20;
    currentPage = 0;

    pushPokemons = (item)=>{
        this.pokemons.push(item);
    }

    setStatus(status){
        this.status = status;
    }
    getList = async (offset,limit)=>{
        await fetchList(offset,limit)
        .then(data=>{
            console.log('store',data);
            runInAction(()=>{
                this.pokemons = data.items
                this.status = "success"
                this.itemsCount = data.count
            })
        }).catch(err=>{
            console.log(err)
            runInAction(()=>{
                this.status = "error";
            })
        })
    }

    setPagination(payload){
        console.log(typeof payload)
       
    }
    setPage(page){
        this.currentPage = page;
    }
    updatePagination(e){
        console.log(e.target.value);
        this.elementPerList = parseInt(e.target.value);
        this.setStatus('pending');
        this.getList(this.offset,this.elementPerList);
    }
    get offset(){
        return (this.currentPage+1)* this.elementPerList;
    }
    get pageCount(){
        return this.itemsCount / this.elementPerList;
    }
    changingPage(page){
        console.log(page.selected);
        this.setPage(page.selected);
        this.getList(this.offset,this.elementPerList);
        this.setStatus('pending');
    }
}

decorate(Store,{
    pokemons: observable,
    status: observable,
    itemsCount: observable,
    elementPerList: observable,
    updatePagination: action,
    offset: computed,
    changingPage: action,
    currentPage: observable,
    setStatus: action,
    pageCount: computed

})
export default new Store(); 