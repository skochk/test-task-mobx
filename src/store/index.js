import { decorate, runInAction, computed, observable, action } from 'mobx';
import {fetchList} from "./../api.js";

class Store{
    pokemons = [];
    status = 'pending';
    itemsCount = 0;
    elementPerList = 20;
    currentPage = 0;
    itemForModal = {};
    tempArr = [];
    selectedFilters = [];
    allFiltres = [];

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
            //getting select values
            let arr = [];
            data.items.map(el=>{
                el.types.map(item=>{
                    arr.push(item.type.name);
                })
            });
            let uniqueArr = arr.filter((item,index)=>{return arr.indexOf(item) == index});

            let selectArr =[]
            uniqueArr.map(el=>{ selectArr.push({value:el,label:el})})

            runInAction(()=>{
                this.pokemons = data.items
                this.status = "success"
                this.itemsCount = data.count;
                this.allFiltres = selectArr;
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
        this.setPage(page.selected);
        this.getList(this.offset,this.elementPerList);
        this.setStatus('pending');
    }
    callModal(el){
        console.log(el.name);
        this.itemForModal = el;
    }

    filterByName(e){
        if(this.tempArr.length){
            this.pokemons = this.tempArr;
        } // allow find second time by another name, because my this.pokemons modified after first search
        let arr = this.pokemons.slice();
        let filteredArr = arr.filter(el=> el.name == e.target.value);
        if(filteredArr.length){
            this.tempArr = this.pokemons;
            this.pokemons = filteredArr;
        }else if(e.target.value.length == 0){
            this.pokemons = this.tempArr;
        }
    }

    filterByTag(e){
        let filtres = [];
        if(this.tempArr.length){ // if at least one filter choosed, pokemons need to throw to default
            this.pokemons = this.tempArr;
        }
        if(e == null ||  !e.length){
            filtres = this.allFiltres;
            this.pokemons = this.tempArr;
        }else{
            e.map(el=>filtres.push(el.value));
            let newArr = [];
            this.pokemons.map(pokemon=>{
                pokemon.types.map(el=>{
                    if(filtres.indexOf(el.type.name) > -1){    
                        newArr.push(pokemon);
                    }
                })
            })
            this.tempArr = this.pokemons;
            this.pokemons = newArr;
        }


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
    pageCount: computed,
    itemForModal: observable,
    tempArr: observable,
    allFiltres: observable,
    selectedFilters: observable

})
export default new Store(); 