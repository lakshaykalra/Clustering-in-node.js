import http from 'http'
import express from 'express'
import cluster from 'cluster'
import bodyParser from 'body-parser'
import os from 'os'
import {setUpRouter} from './routes/user.js'

let cpuCores=os.cpus().length

process.on('unhandledRejection',(reason,promise)=>{
    console.log(`<<<<<<<unhandled promises rejecttion occur due to reason : ${reason} for promise : ${promise}`)
})

const app=express()

app.use(bodyParser.json({limit: '2000kb'}))

setUpRouter(app) // user route

let workers=[]

if(cluster.isMaster){

    for(let i=0;i<cpuCores;i++){

        workers.push(cluster.fork())

        workers[i].on('message',message=>{
            console.log(`<<<<<,message recieved >>>>>`,message)
        })

    }

    cluster.on('online',worker=>{
        console.log(`<<<<<<worker having process id ${worker.process.pid} is listening>>>>` )
    })

    cluster.on('exit',(worker,code,signal)=>{
        console.log(`<<<<<worker died having process id ${worker.process.pid} gave code ${code} and signal ${signal}` )

        console.log(`<<<<<<Initiating another worker process>>>>`)

        workers.push(cluster.fork())
        worker[workers.length-1].on('message',message=>{
            console.log(`<<<<<<message recieved>>>>>${message}`)
        })


    })

    

} else{
    app.listen(3003,()=>{
        console.log(`<<<<<< worker pid id ${process.pid} is listening on  http://localhost:3003/>>>>`)
    })
}

