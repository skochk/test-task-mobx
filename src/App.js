import React from 'react';
import { observer } from 'mobx-react';
import {useEffect}  from 'react';
import store from './store';
import styles from './style.module.scss';
import ReactPaginate from 'react-paginate';



const App = observer(() => {
    const {status, currentPage, pageCount ,elementPerList, pokemons } = store;
    useEffect(()=>{
        store.getList(currentPage,elementPerList);
    },[]);
    return(
        <div className={styles.mainArea} style={{filter: status === "pending" ?  "blur(1px)" : null}}>
        <h1 className={styles.loader}>{status == "pending" ? "Retrieving data..." : null}</h1>
        {pokemons.map(el=>(
            <div className={styles.card} key={el.name}>
                <div>{el.name}</div>
                <img src={el.sprites.front_default} alt={el.name}/>
                <h3>stats:</h3>
                <p>{el.stats[0].stat.name}</p>
                <p>{el.stats[0].stat.base_stat}</p>
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
    )
})

export default App;
