import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'f42483268b454a24b94a34d6eb23c4a1'
    }
})