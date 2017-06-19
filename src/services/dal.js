export let fetchProps = function (url, method, body) {
    this.url = url;
    this.method = method;
    this.body = body;
    this.headers = new Headers();
};

let dal = (function () {
    let _instance;
    let _queue = [];

    function createInstance() {
        let object = new Object({url: '', method: ''});
        return object;
    }

    function fetchUrl(params) {
        if (!(params instanceof fetchProps)) 
            return;
        let url = params.url;
        let request = {
        method: params.method || 'GET',
        headers: params.headers
        };
    if (params.method === 'POST') {
        request = Object.assign(request, {body: params.body});
    }
    return (fetch(url, request).then((data) => {
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
return {fetch: fetchUrl};
})();

export default dal;