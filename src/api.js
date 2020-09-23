module.exports.fetchList = (offset,limit)=>{
    return fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}limit=${limit}`).then(res=>res.json());
}   
