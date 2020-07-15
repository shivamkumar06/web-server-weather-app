const path = require('path')
const express = require('express')
const app = express()

// Define paths for Express config
const publicDirectory = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, '../templates')  //this line was defined after 'views' directory was changed to 'templates'

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)   //this line was defined after 'views' directory was changed to 'Templates'

//Setup static directory to serve
app.use(express.static(publicDirectory))

app.get('',(req,res)=>{
    res.render('index',{
        title: 'Weather App',
        name: 'Shivam Kumar'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title: 'Help',
        name: 'Shivam Kumar'
    })
})

app.get('/about',(req,res)=> {
    res.render('about',{
        title:'About Page',
        name: 'Shivam Kumar'
    })
})

app.get('/weather',(req,res)=>{
    res.send({
        location: 'Boston',
        forecast: 'It is cold'

    })
})


app.listen(3000, () => {
    console.log('Server is up on port 3000')
})