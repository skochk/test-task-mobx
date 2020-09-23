module.exports.fetchList = async(offset,limit)=>{

    console.log('offset,limit:',offset,limit)
    return new Promise(async(resolve,reject)=>{
        let list = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
        .then(res=>res.json())
        .catch(err=>reject(err))
        let nestedData = []
        Promise.all(list.results.map(async(el)=>{
            await fetch(el.url)
            .then(res=>res.json())
            .then(res=>{
                nestedData.push(res);
            })
        })).then(()=>{
            resolve({items: nestedData,count: list.count});
        })
    })

}