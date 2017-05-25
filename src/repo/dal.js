
export let fetchProps = function(url, method){
    this.url = url;
    this.method = method;
};

let dal = (function () {
    let _instance;
    let _queue = [];



    function createInstance() {
        let object = new Object({url: '', method: ''});
        return object;
    }

    function fetchUrl(params) {
        if(!(params instanceof fetchProps)) return;         
        let url = params.url;
        return (fetch(url).then((data) => {
            return data.json();        
        }).catch(() => {}));
    }

    function getDal() {
        if (!_instance) {
            return _instance = createInstance();
        } else {
            return _instance;
        }
    }
    return {
        fetch: fetchUrl
    };
})();

//http://api-dev.nana10.co.il/Epg/getall'

// var f = dal.fetch();
// var s = dal.fetch('');

// console.log(f === s, s);

export default dal;