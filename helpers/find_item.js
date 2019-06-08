
let find_item_by_id = (list, err, object) =>{
    const found = list.some(item => item.id === parseInt(object));
    
    if(found){
        res.status(200).json({
            status: 200,
            data: list.filter(item => item.id === parseInt(object))
        });
    } else {
        res.status(400).json({ 
            message: err
        });
    }
}

module.exports = find_item_by_id;