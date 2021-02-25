import {toast} from "react-toastify";
const api = require('qbittorrent-api-v2')

async function qbConnection(hostAddress, hostName, hostUser, hostPassword) {
    if (!hostAddress || !hostName || !hostUser || !hostPassword) {
        toast.error("One or more field(s) is/are blank")
        return false;
    }
    await api.connect(hostAddress, hostUser, hostPassword)
        .then(qbt => {
            qbt.torrents()
                .then(torrents => {
                    console.log(torrents)
                    return true
                })
                .catch(err => {
                    console.error(err)
                })
        })
        .catch(err => {
            console.error(err)
            return false
        })
}

export default qbConnection;
