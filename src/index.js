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
let response = "";
for (let i=rangeInfo.lower; i<=rangeInfo.upper; i++){
    let outputStr = "";
    divisorInfo.outputDetails.forEach((item) => {
        if (i % item.divisor === 0){
            outputStr = outputStr + item.output;
        }        
    });
    response = response + "<div>" + i + ": " + outputStr + "</div>"
}

res.set("Content-Type", "text/html")
res.send(response)
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
});
