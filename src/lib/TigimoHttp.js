const TigimoHttp = {
    getJson: async (url, headers = {}) => {
        return fetch(url, {
            method: 'GET',
            headers: {
                ...headers,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(function (res) {
            return res.json();
        }).then(function (resJson) {
            return resJson;
        })

    },
    postJson: async (url, body = {}, headers = {}) => {
        return fetch(url, {
            method: 'POST',
            headers: {
                ...headers,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then(function (res) {
            return res.json();
        }).then(function (resJson) {
            return resJson;
        })

    }
}

export default TigimoHttp;