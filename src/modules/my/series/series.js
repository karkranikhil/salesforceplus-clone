import { LightningElement, api } from 'lwc';
import seriesList from '../../../data/seriesList'
export default class Series extends LightningElement {
   result=[]
   connectedCallback(){
    
     this.result = seriesList.data.seriesList.map(item=>{
       const code = item.seriesColor+"96"
       const singleColor = `background:${this.hexToRGB(item.seriesColor)}`
       const hide = item.publishStatus === "Coming soon"
       const carClasses = hide? 'card series card-shadow pointernone' : 'card series card-shadow'
       const seriesLen = `${item.episodes.length} Episode Series`
       const seriesId = item.episodes && item.episodes[0] &&  item.episodes[0].seriesId 
       const playSeries =`https://www.salesforce.com/plus/series/${seriesId}/episode/episode-0`
       const gotoseries = `https://www.salesforce.com/plus/series/${seriesId}`
       const bgColor = `background: linear-gradient(transparent 40.63%, ${this.hexAToRGBA(code)} 59.36%,${this.hexToRGB(item.seriesColor)} 79.03%, ${this.hexToRGB(item.seriesColor)} 100%)`
       return {...item, bgColor, singleColor, hide,playSeries, gotoseries,carClasses, seriesLen }
     })
     console.log(this.result)
   }
  hexAToRGBA(h) {
    let r = 0, g = 0, b = 0, a = 1;
  
    if (h.length == 5) {
      r = "0x" + h[1] + h[1];
      g = "0x" + h[2] + h[2];
      b = "0x" + h[3] + h[3];
      a = "0x" + h[4] + h[4];
  
    } else if (h.length == 9) {
      r = "0x" + h[1] + h[2];
      g = "0x" + h[3] + h[4];
      b = "0x" + h[5] + h[6];
      a = "0x" + h[7] + h[8];
    }
    a = +(a / 255).toFixed(3);
  
    return  "rgba(" + +r + "," + +g + "," + +b + "," + a + ")";
  }

  hexToRGB(h) {
    let r = 0, g = 0, b = 0;
  
    // 3 digits
    if (h.length == 4) {
      r = "0x" + h[1] + h[1];
      g = "0x" + h[2] + h[2];
      b = "0x" + h[3] + h[3];
  
    // 6 digits
    } else if (h.length == 7) {
      r = "0x" + h[1] + h[2];
      g = "0x" + h[3] + h[4];
      b = "0x" + h[5] + h[6];
    }
    
    return "rgb("+ +r + "," + +g + "," + +b + ")";
  }
}
