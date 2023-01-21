import america from '../assets/america.jpg'
import loki from '../assets/loki.jpg'
import men from '../assets/men.png'
import pantera from '../assets/pantera.jpg'
import tanos from '../assets/tanos.jpeg'
import thor from '../assets/thor.jpg'
import spider from '../assets/spider.jpg'
import xalk from '../assets/xalk.jpg'

let initialArrayCards = [
    {image:america,status:false},
    {image:loki,status:false},
    {image:men,status:false},
    {image:pantera,status:false},
    {image:tanos,status:false},
    {image:thor,status:false},
    {image:spider,status:false},
    {image:xalk,status:false},
  ]

  const AllCards = [...initialArrayCards,...initialArrayCards]

  export default AllCards
