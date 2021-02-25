
async function qbConnection(hostAddress, hostName, hostUser, hostPassword) {
    if (!hostAddress || !hostName || !hostUser || !hostPassword) {
        return false;
    }
        console.log(hostAddress,hostName, hostUser ,hostPassword)
    return true;
}

export default qbConnection;
