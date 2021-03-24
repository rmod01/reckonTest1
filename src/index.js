const express = require("express");
const app = express();
const port = 9999;

const rangeInfo = {
    lower: 1,
    upper: 100
}

const divisorInfo = {
    outputDetails: [
    {
        divisor: 3,
        output: "Boss"
    },
    {
        divisor: 5,
        output: "Hogg"
    },
    {
        divisor: 9,
        output: "Foggie"
    },
  ]
};

app.get("/", (req, res) => {
let response = "<div>Test1 response</div>";
res.set("Content-Type", "text/html")
res.send(response)
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
});
