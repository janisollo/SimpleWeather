const express = require("express")
const https = require("https")
const app = express();


app.get("/", function (req, res) {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=2c5dcfbf7ebd20e55dc2279525d09593&units=metric"

    https.get(url, function (response) {
        console.log(response.statusCode);

        response.on("data", function (data) {
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weartherDescription = weatherData.weather[0].description
            res.write("<h1>The temperature in Bangkok is " + temp + " Degrees celcius. While the sky above us has " + weartherDescription + ".</h1>")

            res.send()
        })
    })

})


app.listen(3000, function () {
    console.log("Server is running on PORT 3000");
})