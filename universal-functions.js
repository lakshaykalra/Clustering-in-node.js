export let sendError=async function (error,res) {

    return   res.send({
        error:error.type || 'Bad Request',
        message:error.message || 'Something went wrong.',
        statusCode:res.statusCode || 400

    })
 
}

