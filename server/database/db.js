import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()
const USERNAME =process.env.DB_USERNAME;
const PASSWORD= process.env.DB_PASSWORD;   

const Connection = async (      
    // username, password
) => {  
    const URL = 'mongodb://elf:elf123@ac-phstrhp-shard-00-00.mw8nyuz.mongodb.net:27017,ac-phstrhp-shard-00-01.mw8nyuz.mongodb.net:27017,ac-phstrhp-shard-00-02.mw8nyuz.mongodb.net:27017/?ssl=true&replicaSet=atlas-onvl8o-shard-0&authSource=admin&retryWrites=true&w=majority'
           try {
        await mongoose.connect(URL, { useUnifiedTopology: true, 
            // useNewUrlParser: true, 
            // useFindAndModify: false
         }
            );
        console.log('Database Connected Succesfully');         
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;
