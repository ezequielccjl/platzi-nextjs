import { NextApiRequest, NextApiResponse } from "next"
import DB from '../../../database/db'

const anAvo = async (request: NextApiRequest, response: NextApiResponse) => {
    const db = new DB();
    // console.log('REQUEST PAPAAAAAAAAAA', request);
    const id = request.query.id

    const entry = await db.getById(id as string);

    response.statusCode = 200;
    response.setHeader('Content-type', 'application/json')
    response.end(JSON.stringify ({data: entry}))
}

export default anAvo;