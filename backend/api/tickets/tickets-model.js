const db = require('../../data/db-config.js');

async function GetTickets(id){
    if(!id){
        const bugs = await db('tickets');
    }
    else{
        const bugs = await db('tickets')
            .where('ticket_id', id);
    }
}

module.exports = {};