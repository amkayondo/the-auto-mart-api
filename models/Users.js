const userModel = (id, email, first_name,
                    last_name, password, address,
                    is_admin) => {
                        return {
                            id,
                            email,
                            first_name,
                            last_name,
                            password,
                            address, 
                            is_admin
                        }
                    }

// User db
let user_db = [
    userModel(1, "amkayondo@gmail.com", "kayondo", "ediie", "oadmlad", "kampala", true)   
]

module.exports = user_db;