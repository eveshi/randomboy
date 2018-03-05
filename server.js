const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const cors = require('cors')

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const getData = async(link) => {
  const response = await axios.get(link, {});
  const content = response.data;
  const $ = cheerio.load(content);
  let arrayTitle = [];
  let len = $('.article .title a').length;
  let element = '';
  for(let i=0; i<len; i++){
    element = $('.article .title a').eq(i).text();
    arrayTitle = [...arrayTitle, element]
  };
  return arrayTitle;
} 

app.get('/api/movielist', async(req, res, next) => {
  const link = 'https://www.douban.com/doulist/105743/?start=' + req.query.page + '&sort=time&sub_type='
  const arrayTitle = await getData(link)
  res.send({ arrayTitle })
});

app.get('/api/albumList', async(req,res,next) => {
  const liOrder = req.query.liOrder
  if( liOrder === 0 ){
  const link = 'https://www.douban.com/doulist/200195/?start=' + req.query.page + '&sort=time&sub_type='
  const arrayTitle = await getData(link)
  res.send({ arrayTitle })
  }else{
  const link='https://www.douban.com/doulist/200253/?start=' + req.query.page + '&sort=time&sub_type='
  const arrayTitle = await getData(link)
  res.send({ arrayTitle })
  }
})

app.listen(port, () => console.log(`Listening on port ${port}`));