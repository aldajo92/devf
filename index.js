const algorithm = require('./algorithms')

const expresss = require('express');
const expressip = require('express-ip');
const app = expresss();

const PORT = process.env.PORT || 3000;

app.use(expressip().getIpInfoMiddleware)
app.set('PORT', PORT);

app.get('/', (req, res) => {
    const currentPosition = req.ipInfo.ll
    const userAgent = req.get('User-Agent')

    const data = {
        userAgent,
        position : {
            latitude: currentPosition[0],
            longitude: currentPosition[1],
        }
    }

    res.send(data)
});

app.get('/reverse_string', (req, res) => {
    
});

app.get('/short_string', (req, res) => {
    res.send(algorithm.lengthOfLongestSubstring(req.query.text))
});

app.get('/replace', (req, res) => {
    // TODO: add algorithm
});

app.listen(app.get('PORT'), () => {
    console.log("Server Running")
});