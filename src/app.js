const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectory = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, '../templates/views')  //this line was defined after 'views' directory was changed to 'templates'
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)   //this line was defined after 'views' directory was changed to 'Templates'
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectory))

app.get('',(req,res)=>{
    res.render('index',{
        title: 'Weather',
        name: 'Shivam Kumar'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title: 'Help',
        name: 'Shivam Kumar',
        messageInfo: 'This is a Help Text'
    })
})

app.get('/about',(req,res)=> {
    res.render('about',{
        title:'About Me',
        name: 'Shivam Kumar'
    })
})

app.get('/weather',(req,res)=>{

    if(!req.query.address){
        return res.send({
            error: 'You must provide an address!'
        })
    }
    res.send({
        location: 'Boston',
        forecast: 'It is cold',
        address: req.query.address
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title: '404',
        name : 'Shivam Kumar',
        errorMessage : 'Help article not found'
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        title: '404',
        name: 'Shivam Kumar',
        errorMessage: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})