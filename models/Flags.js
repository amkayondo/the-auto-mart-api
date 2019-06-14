// Flag Model
const flagModel = (id, car_id, created_on, reason, description) =>{
    return {
        id,
        car_id,
        created_on,
        reason,
        description
    }
}

// Flag db
const flag_db = []

module.exports = flag_db;