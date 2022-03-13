const express = require('express')

const PORT = 80

const app = express()

app.set('views', './public')
app.use(express.static( __dirname + '/public'))

app.get('/*', (req, res) => { 
    res.sendFile('./public/index.html', { root: __dirname })
})

app.listen(PORT, ()=> {
    console.log('App started!')
})
