const express = require('express');
const app = express()
const port = 3650
const worldCup = [

{
    country: "Nigeria",
    player: "Victor Oshimen",
    coach: "Finidi George"
},

{
    country: "Argentina",
player: "Lionel Messi",
coach: "Lionel Scaloni"
},

{
    Country: "France",
player: "Kylian Mbappe",
coach: "Didier Deschamps"
},
{
    Country: "Brazil",
player: "Neymar Jr",
coach: "Tite"
},
{
    country: "Germany",
player: "Manuel Neuer",
coach: "Hansi Flick"
},
{
    country: "Spain",
player: "Sergio Ramos",
coach: "Luis Enrique"
}


]

app.get("/worldCup", (req, res) => {
    res.send('welcome to backend class')
    // console.log('I have accessed the path');
    
})

app.get("/worldcup", (req, res) => {
    res.send(worldCup)
})

app.get("/hurray", (req, res) => {
    res.send("Hurray! I have built my first API 😁😁")
})

app.listen(port, ()=> {
console.log(`server running on port ${port}`);

})