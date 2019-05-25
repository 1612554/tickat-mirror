var Event = require('../models/event');
const {setDefaultQueryStr} =  require('../utils/default_query_string');

exports.getAllEvents = async (query)=>{

    try {
        setDefaultQueryStr(query);
        let events =  await Event.findAll(query);
        return events;
    } catch (e) {
        throw Error('Can not find all events');
    }
};

exports.getEventsById = async (query)=>{

    try {
        setDefaultQueryStr(query);
        let events =  await Event.findAll(query);
        return events;
    } catch (e) {
        throw Error('Can not find all events');
    }
};

exports.getCommingEvents = async ()=>{
    try {
        let events = await Event.findAll({
            attributes: ['id','name','date','address','img'],
            limit: 4,
            order: [['date','desc']]
        });
        return events;
    } catch (error) {
        return Error('Error !');
    }
};
