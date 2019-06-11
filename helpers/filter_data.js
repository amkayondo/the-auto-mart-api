const filter_item_by_id = (items, _params, _type, res) =>{
    if(items.some(x => x.id === _params)){
        const _req = parseInt(_params); 
        const _data = items.filter(
        c => c.id === _req)
        res.send({
         status: 200,
         data : _data
        });
    } else {
        res.status(400).send (
            {
                status: 400,
                error : `No ${_type} found with Id ${_req}` 
            }
        );
    }
    
}

module.exports = filter_item_by_id;