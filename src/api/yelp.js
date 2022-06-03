import axios from "axios";

export default axios.create({
    baseURL : "https://api.yelp.com/v3/businesses",
    headers : {
        Authorization : 'Bearer -7iysNtMAAmCh-25GKelj2x14hOm_lZcsrv2o9oODddF288r3IbVNOhV1CH-KkW0shxTxquufFyYrSCJ-8CkLADT9GwiGAsxSQJcIhUDmlS4UVsIEX8rHPWCQpCYYnYx'
    }
});