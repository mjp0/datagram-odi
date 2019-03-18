const DHT = require('dht-rpc')
const Node = require('@hyperswarm/dht')

const pkg = require('./package.json')

const port = process.env['PORT'] || 10000
const servers = process.env['SERVERS'] ? process.env['SERVERS'].split(',') : [
  'odi-1.datagram.network:10000',
  'odi-2.datagram.network:10000',
  'odi-3.datagram.network:10000',
]
const logging = process.env['LOGGING'] || false

function startServer(){
  const server = DHT({ ephemeral: true })

  server.on('ready', function () {
    console.log(`Datagram Open Discovery Index Server ${pkg.version} instance listening on ${port}...`)
    console.log(`Logging: ${logging}`)
  })
  
  server.listen(port)
}

function startNode() {
  servers.push('127.0.0.1:10000')
  startServer()

  const node = Node({ bootstrap: servers })

  node.on('ready', function () {
    console.log(`Datagram Open Discovery Index Database ${pkg.version} started and listening for connections...`)
  })

  node.on('announce', function (target, peer) {
    if(logging) console.log({ host: peer.host, type: 'announce'})
  })

  node.on('unannounce', function (target, peer) {
    if(logging) console.log({ host: peer.host, type: 'unannounce'})
  })

  node.on('lookup', function (target, peer) {
    if(logging) console.log({ host: peer.host, type: 'lookup'})
  })
}

if(!process.env['MODE']) {
  if(!process.argv[2]) throw new Error("NO_COMMAND")
  if(process.argv[2] === 'server') startServer()
  if(process.argv[2] === 'full') startNode()
} else {
  if (process.env['MODE'] === 'server') startServer()
  if (process.env['MODE'] === 'full') startNode()
}