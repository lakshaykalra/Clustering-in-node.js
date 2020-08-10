
import { sendError } from '../universal-functions.js'


export let sendMessage = async function (req, res) {

    try {

        res.status(200)

        return res.send({
            data: {},
            statusCode: res.statusCode,
            message: 'Pong'

        })

    }
    catch (error) {

        return sendError(error, res)


    }

}

export let genList = async function (req, res) {

    process.send('List is created on worker process id ' + process.pid);
    let lst = new Array(1e6);

    for (let k = 0; k < 45678909876; k++) {
        lst[k] = k * 5;
    }

    res.json({ ProcessId: 'Worker Process Id' + process.pid });


}
