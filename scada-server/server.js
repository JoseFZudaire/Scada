import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

var active_alarms = [["Trip1","100"], ["Alert2","305"], 
    ["Trip3","403"], ["Alarm4","404"],
    ["Alarm5","405"], ["Alarm4","406"],
    ["Alarm4","407"], ["Alarm4","408"], 
    ["Alarm4","410"], ["Alarm4","411"],
    ["Alarm4","412"], ["Alarm4","413"],
    ["Alarm4","414"], ["Alarm4","415"],
    ["Alarm4","416"], ["Alarm4","417"]];

app.get("/", (req, res) => {
    res.send("Soy el server");
})

app.get("/active_measurements_boiler", async(req, res) => {
    res.json(getVariables(350, 74, 3, 89))
})

app.get("/active_measurements_condenser", async(req, res) => {
    res.json(getVariables(207, 25, 3, 126))
})

app.get("/active_measurements_distillation", async(req, res) => {
    res.json(getVariables(128, 25, 3, 98))
})

app.get("/active_measurements_storage", async(req, res) => {
    res.json(getVariables(25, 1, 112, 115))
})

app.get("/active_alarms", async(req, res) => {
    res.json({
        valor: active_alarms
    });
})

function getVariables(baseTemp, basePressure, baseVolFlow, baseSulfur) {
    return {
        temp: Math.round((baseTemp + Math.random())*100)/100,
        pressure: Math.round((basePressure + Math.random())*100)/100,
        volFlow: Math.round((baseVolFlow + Math.random())*100)/100,
        sulfur: Math.round(baseSulfur + Math.random()*10)
    };
}

app.listen(5500, () => {
    console.log("Server running on port 5500.");
});
