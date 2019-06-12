const get_by_query = (list, character, equal_to) =>{
    return list.filter(x => character === equal_to);
}

module.exports = get_by_query;