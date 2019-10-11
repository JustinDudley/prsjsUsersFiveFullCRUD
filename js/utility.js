
let Utilities = {
    parseUrlParameters : (url) => {
        let urlparms = url.split("?");
        let kvs = urlparms[1].split("&");
        let parms = {};
        for(let kv of kvs) {
            let parm = kv.split('=');
            parms[parm[0]]=parm[1];
        }
        return parms;
    }
}


            // document.URL is the way that you can capture an entire url.


            // I THINK THE TEXT BELOW BELONGS IN A DIFFERENT FILE
// let urlParms = Utilities.parseUrlParameters(document.URL);
