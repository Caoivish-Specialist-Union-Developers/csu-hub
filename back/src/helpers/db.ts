import { createPool, Pool} from 'mysql'
import * as dotenv from 'dotenv'
dotenv.config()

class DbConnect {
    private readonly pool: Pool

    constructor () {
        this.pool = createPool({
            host: process.env.DBHOST,
            user: process.env.DBUSER,
            password: process.env.DBPASS,
            database: process.env.DBNAME,
            multipleStatements: false
        })
    }

    query (queryStr: string) {
        return new Promise((resolve, reject) => {
            this.pool.query(queryStr, (error, results) => {
              if (error) {
                reject(error)
              } else {
                resolve(results)
              }
            })
          })
    }
}

const conn = new DbConnect()

export default conn
