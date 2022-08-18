var axios = require("axios")
var assert = require('assert')
var id

describe('ValidateBrowserstack Local Running', () => {
    it('Browserstack Local Running', async () => {
        try {
            await axios.get(`https://www.browserstack.com/local/v1/list?auth_token=${process.env.BROWSERSTACK_ACCESS_KEY}&last=5&state=running`)
                .then((response) => {
                    console.log("Response from api", JSON.stringify(response.data))
                    assert.equal(response.status, 200, 'Status is 200 OK')
                    assert.equal(response.data['api_version'], 'v1', "App Version is v1")
                    id = response.data['id']
                })
        }
        catch (except) {
            assert.throws(except)

        }

    });
});

describe('Validate Application is up and running', () => {
    it('Application is Loading', async () => {
        await browser.url('http://127.0.0.1:8081/check');
        let title = await browser.getTitle()
        if (title == "Health Check Succesful") {
            assert.OK
        }
    });

    it('Application returns correct description', async () => {
        await browser.url('http://127.0.0.1:8081');
        let value = await browser.getPageSource()
        assert(value, 'Up and running')
    });

});

describe('Validate Browserstack Local is Disconnected', () => {
    it('Browserstack Local not running', async () => {

        await axios.delete(`https://www.browserstack.com/local/v1/${id}?auth_token=${process.env.BROWSERSTACK_ACCESS_KEY}`), {
            validateStatus: function (status) {
                return status > 200 ;
            }
        }

    });
});