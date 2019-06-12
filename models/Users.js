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
const user_db = [
    userModel(01, "amkayondo@gmail.com", "kayondo", "ediie", "oadmlad", "kampala", true),
    userModel(11, "tomboya@gmail.com", "tom", "boya", "23nkjerj", "kampala", false)   
]