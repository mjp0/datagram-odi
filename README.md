![Datagram Open Discovery Index](media/header.png)
> Datagram Open Discovery Index is a decentralized discovery database for datagrams. Non-logging public service available at datagram.network

[![license](https://img.shields.io/badge/license-AGPL_3.0-brightgreen.svg)](LICENSE) [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmachianists%2Fdatagram-odi.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmachianists%2Fdatagram-odi?ref=badge_shield) [![web-datagram](https://img.shields.io/badge/web-datagramjs.com-blue.svg)](https://datagramjs.com) [![twitter-machianists](https://img.shields.io/badge/twitter-@machianists-blue.svg)](https://twitter.com/machianists)

- [💡 What is Datagram Open Discovery Index?](#-what-is-datagram-open-discovery-index)
  - [👀 Privacy in ODI](#-privacy-in-odi)
  - [📡 Datagram.Network public service](#-datagramnetwork-public-service)
- [🔌 Getting started](#-getting-started)
  - [🐳 Docker](#-docker)
  - [🛠 Node.js](#-nodejs)
  - [⚙️ Options](#️-options)
- [☕️ Roadmap](#️-roadmap)
- [🛠 The team](#-the-team)
- [📝 License](#-license)

## 💡 What is Datagram Open Discovery Index?
Open Discovery Index is an integral part of the Datagram project which enables you to create secure shared databases and data structures with anyone. Open Discovery Index, ODI for short, is the system that enables you and other users to find each other on the internet.

When you share your datagram with someone, their computer needs to know your computer's Internet address. ODI is a database for storing and finding this information.

### 👀 Privacy in ODI
ODI is a decentralized and distributed database. Anyone can participate in hosting ODI to help to keep it decentralized and become "a node" in datagram.network. This means that when you search for a datagram, your request will be routed to the nearest node. This means faster connection times, but it also means that the node host can see your IP address and which datagram address you searched for.

We are constantly evaluating more private ways to build ODI. In the meantime, we are doing everything we can to preserve users' privacy.

For example, the node host can see what you search for, but because the data in ODI is encrypted, they can't read the datagram you searched for.

If the user is willing to run their own node, they can set their datagram searches to go to their own node. If the node is hosted on a 3rd party server, it will act as a proxy for all datagram searches.

### 📡 Datagram.Network public service
Machian Collective offers a free, non-logging and non-censored public ODI at odi.datagram.network. We don't keep any logs of searches, and we don't censor who can utilize odi.datagram.network.

## 🔌 Getting started
### 🐳 Docker
The fastest way to get started is to go with the pre-built Docker image.

> Note that `LOGGING=1` is optional and added to show how to use options with Docker.

```shell
$ docker run -e LOGGING=1 -p 10000:10000/udp -it machian/datagram-odi

-> Datagram Open Discovery Index Server instance listening on 10000...
-> Datagram Open Discovery Index Database started and listening for connections...
```

### 🛠 Node.js
You can start ODI via npm scripts.

> Note that `LOGGING=1` is optional and added to show how to use options with Node.js.
> 
```shell
$ LOGGING=1 npm start

-> Datagram Open Discovery Index Server instance listening on 10000...
-> Datagram Open Discovery Index Database started and listening for connections...
```

### ⚙️ Options
ODI has few options you can set via environment variables.

```
LOGGING   =   1               // enable logging IPs and action types
PORT      =   10000           // which port to listen
MODE      =   full|server     // server mode starts only the server
```

Please refer to Docker and Node.js examples above how to use variables.

## ☕️ Roadmap
Currently, Datagram Open Discovery Index uses a Kademlia based distributed hash table.

Kademlia was chosen due to mature implementations available, but the next steps in ODI projects should focus on research & development of more privacy-friendly solutions.

## 🛠 The team

Datagram Open Discovery Index is a user-driven project maintained by [Machian Collective](https://machian.com), an open-source collective focused on solving human digitalization.

Current primary maintainer is [Marko Polojärvi](https://twitter.com/markopolojarvi). Significant direct and indirect contributions have come from Mathias Buus and Paul Frazee.

> **If you are interested in working with peer-to-peer technologies and solving the hardest & most fascinating issues with digital privacy and security, contact [Marko Polojärvi](https://twitter.com/markopolojarvi).**


## 📝 License

We consider Datagram Open Discovery Index as a public utility project and public utilities should be available to all regardless of their status, skills or resources.

All Datagram Open Discovery Index code is licensed under AGPL v3.0 (AGPL-3.0-or-later).