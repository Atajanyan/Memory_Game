import america from '../assets/america.jpg'
import loki from '../assets/loki.jpg'
import men from '../assets/men.png'
import pantera from '../assets/pantera.jpg'
import tanos from '../assets/tanos.jpeg'
import thor from '../assets/thor.jpg'
import spider from '../assets/spider.jpg'
import xalk from '../assets/xalk.jpg'
import gamora from '../assets/gamora.jpg'
import doctor from '../assets/doctor.jpg'
import vanda from '../assets/vanda.jpg'
import grud from '../assets/grud.jpg'

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

  let secondArrayCards = [
    {image:america,status:false},
    {image:loki,status:false},
    {image:men,status:false},
    {image:pantera,status:false},
    {image:tanos,status:false},
    {image:thor,status:false},
    {image:spider,status:false},
    {image:xalk,status:false},
    {image:grud,status:false},
    {image:vanda,status:false},
    {image:doctor,status:false},
    {image:gamora,status:false},
  ]
  const AllCards = [...initialArrayCards,...initialArrayCards]
 export const AllSecondCards = [...secondArrayCards,...secondArrayCards]

  export default AllCards
