import express from 'express'
import {sendError} from '../universal-functions.js'
import {sendMessage, genList} from '../controllers/user-controller.js'

let router=express.Router()

let dataTypeValidator=async function name(req,res,next) {

    try{

        if(!req.body.message){
            let error=new Error('Please send a message')
            error.type='Bad Request'
            res.status(400)
            throw error
            // next(error)

        } else{
            next()
        }

    }
    catch(error){
        // next(error)
       return sendError(error,res)

    }
    
}

// router.use((error,req,res,next)=>{
//     res.send({
//         error:error.type || 'Bad Request',
//         message:error.message,
//         statusCode:res.statusCode

//     })
// })

const setUpRouter=app=>{

    router.get('/getHelloMessage',dataTypeValidator,sendMessage)

    router.get('/list',genList)

    app.use('/user',router)

}

export {setUpRouter}

