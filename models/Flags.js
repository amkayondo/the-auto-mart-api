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
const flag_db = [
    flagModel(23, 02, new Date(), "wrong color", "high"),
    flagModel(09, 95, new Date(), "wrong order", "low"),
    flagModel(23, 02, new Date(), "damaged", "high")
]