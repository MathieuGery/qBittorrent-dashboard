import {toast} from "react-toastify";

async function qbConnection(hostAddress, hostName, hostUser, hostPassword) {
    if (!hostAddress || !hostName || !hostUser || !hostPassword) {
        toast.error("One or more field(s) is/are blank")
        return false;
    }
        console.log(hostAddress,hostName, hostUser ,hostPassword)
    return true;
}

export default qbConnection;
