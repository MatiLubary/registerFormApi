module.exports = function(sequelize , dataTypes){

    let alias = "users"
    
    let cols = {
    
        id : {
            type : dataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
    
        fullName : {
            type : dataTypes.STRING
        },
    
        dni : {
            type : dataTypes.INTEGER
        },
    
        password : {
            type : dataTypes.STRING
        }
    }
    
    let config = {
        tableName :  "users",
        timestamps : true,
        underscor : true,
        createdAt : "created_at",
        updatedAt : "updated_at",
        deletedAt : "deleted_at",
        paranoid : true 
    }
 
    let user = sequelize.define(alias , cols , config)
    return user
    
}