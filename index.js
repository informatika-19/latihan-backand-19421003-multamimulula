const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json({
  extend: true,
  limit: '20mb'
}))

app.use(bodyParser.urlencoded({
  extend:true,
  limit: '20mb',
}))

app.get('/', function (req, res) {
  res.send('Multami Mulula')
})

app.get('/frofile/:Daerah/:id', (req, res) =>{
    const Daerah = req.params.Daerah
    const idDaerah = req.params.id
res.send('Anda di' + Daerah + 'id Daerah='+idDaerah)
})

app.post('/register',(reg, res)=>{
  console.log(req.body)
  res.json(req.body)
})

app.listen(3000, function(){
    console.log('Server Started')
})