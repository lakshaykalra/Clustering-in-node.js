This node project was created to demonstrate the capability of Node.js when clustering is used.

Advantages:-
-We can utilize multi-core CPUs. Thus utilizing resources effectively.-Can act as a load balancer. The master process does this. So a single node app would not be bombarded with all the network traffic on it.-Can handle CPU intensive tasks and asynchronous tasks simultaneously. In single-node app, its note possible. When one CPU intensive task comes into the picture, Main thread blocks(node is single threaded) thus not allowing other task to execute which can be a async request like DB query, I/O etc.


More hands, More work is done :)