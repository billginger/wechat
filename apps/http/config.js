/*
HTTP Congif
host: Array, host provided list
domain: Array, bound domin name list
proxy: String, reverse proxy URL
*/

const config = {
    host: [
        {
            domain: ['wx.em.gs'],
            proxy: 'http://localhost:3001'
        }
    ]
}

module.exports = config;