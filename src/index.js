const express = require("express");
const app = express();
const axios = require("axios");
const port = 9999;

async function getRangeInfo(retryCount){
    try{
    console.log("Retry Count - getRangeInfo", retryCount);
        const response = await axios.get("https://join.reckon.com/test1/rangeInfo") 
        /*
        const rangeInfo = {
            lower: 1,
            upper: 100
        }
        */
        if (response.statusText === "OK"){
        return response.data
        }else{
            console.log("Retrying RangeAPICall");            
            return getRangeInfo(++retryCount);
        }         
    }catch(err){
console.log("Err in rangeInfo: ", err.response.status)
if (err.response.statusText !== "OK"){
        return getRangeInfo(++retryCount);
    }else{
        return response.data        
    }         
  }
}

async function getDivisorInfo(retryCount){
    try{
    console.log("Retry Count - getDivisorInfo:", retryCount);
    const response = await axios.get("https://join.reckon.com/test1/divisorInfo")
        /*
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
        */
        if (response.statusText === "OK"){
            return response.data}else{
            console.log("Retrying DivisorAPICall");
            return getDivisorInfo(++retryCount);
        }
    }catch(err){
        console.log("Err in divisorInfo: ", err.response.status)
        if (err.response.statusText !== "OK"){
            return getDivisorInfo(++retryCount);
        }else{
            return response.data;        
        }     
    }
}

async function callAPIs(){
    let apisResponses=[];
        apisResponses.push(await getRangeInfo(0))
        apisResponses.push(await getDivisorInfo(0))
        return apisResponses;
}

function performOperationAndRespond(apisResponses){
    let response = "";
    for (let i=apisResponses[0].lower; i<=apisResponses[0].upper; i++){
    let outputStr = "";
    apisResponses[1].outputDetails.forEach((item) => {
        if (i % item.divisor === 0){
            outputStr = outputStr + item.output;
        }        
    });
    response = response + "<div>" + i + ": " + outputStr + "</div>";    
}
    return response;    
}

async function solveTest1(req,res){
    try{
        console.log("-----------------------START-----------------------")        
        const apisResponses = await callAPIs();        
        res.set("Content-Type", "text/html")
        res.send(performOperationAndRespond(apisResponses))
        console.log("-----------------------END-----------------------")
}
catch(err){
    console.log("Error: ", err)
    }
}

app.get("/", (req, res) => {
    solveTest1(req,res)    
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
});

module.exports = performOperationAndRespond;