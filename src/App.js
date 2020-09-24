import React , {useRef} from 'react';
import { observer } from 'mobx-react';
import {useEffect}  from 'react';
import store from './store';
import styles from './style.module.scss';
import ReactPaginate from 'react-paginate';
import userOutsideClick from "./js/userOutsideClick";
import typeColors from './js/typeColors';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';



const App = observer(() => {
    const {status, currentPage, pageCount ,elementPerList, pokemons, itemForModal ,allFiltres , selectedFilters} = store;
    useEffect(()=>{
        store.getList(currentPage,elementPerList);
    },[]);
    
    const ref = useRef();

    userOutsideClick(ref, () => {
        if(Object.keys(itemForModal).length){
            store.callModal({}); 
        }
    });
    const animatedComponents = makeAnimated();

    return(
        <div className={styles.box}>
            <h1 className={styles.loader}>{status == "pending" ? "Retrieving data..." : null}</h1>
            <input onChange={e=>store.filterByName(e)}/>
            <div className={styles.mainArea} style={{filter: status === "pending" ?  "blur(10px)" : null}}>
           
            {/* <select
             value={allFiltres.filter(obj=>selectedFilters.includes(obj))}
             onChange={e=>store.handleTypeSelect(e)} 
             multiple 
             >
                {allFiltres.map(el=>(
                    <option key={el} value={el}>{el}</option>
                ))}
            </select> */}
            
            <Select
                onChange={e=>store.filterByTag(e)} 
                closeMenuOnSelect={false}
                // value={selectedFilters}
                components={animatedComponents}
                defaultValue={allFiltres}
                isMulti
                options={allFiltres}
            />
            {pokemons.map(el=>(
                <div className={styles.card} key={el.name+Date.now()} onClick={e=>store.callModal(el)}>
                    <div>{el.name}</div>
                    <img src={el.sprites.front_default} alt={el.name}/>
                    <h3>stats:</h3>
                    <p>{el.stats[0].stat.name}: {el.stats[0].base_stat}</p>
                    <p>{el.stats[1].stat.name}: {el.stats[1].base_stat}</p>
                    <p>{el.stats[5].stat.name}: {el.stats[5].base_stat}</p>
                    <div className={styles.tags}>
                        <h3>types:</h3>
                        {el.types.map(el=>(
                            <div className={styles.tag} style={{backgroundColor: typeColors[el.type.name]}} key={el.type.name}>{el.type.name}</div>
                        ))}
                    </div>
                </div> 
            ))}
            <ReactPaginate 
                previousLabel={'previous'}
                nextLabel={'next'}
                pageCount={pageCount}
                breakLabel={'...'} 
                breakClassName={'break-me'}
                onPageChange={e=>store.changingPage(e)}
                marginPagesDisplayed={1}
                pageRangeDisplayed={1}
                initialPage = {currentPage}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={styles.active}
            />
            <select value={elementPerList} onChange={(e)=>store.updatePagination(e)}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
            </select>
            </div>
            
            {Object.keys(itemForModal).length ? 
                <div className={styles.modal} ref={ref}>
                    <div className={styles.leftPart}>
                        <img src={itemForModal.sprites.front_default} alt={itemForModal.name}/>
                        <h1>{itemForModal.name}</h1>
                        <p>weigth: {itemForModal.weight}</p>
                    </div>
                    <div className={styles.rightPart}>
                        <h2>stats:</h2>
                        {itemForModal.stats.map(el=>(
                            <p key={el.base_stat+el.stat.name}>{el.stat.name}: {el.base_stat}</p>
                        ))}
                    </div>
                    <p className={styles.close} onClick={e=>store.callModal({})}>Close</p>
                </div> 
            : null}
        </div>
    )
})

export default App;
