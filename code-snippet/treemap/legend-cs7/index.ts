


let fruits:Object[] = [{ fruit:'Apple', count:5000 },
                       { fruit:'Mango', count:3000 },
                       { fruit:'Orange', count:2300 },
                       { fruit:'Banana', count:500 },
                       { fruit:'Grape', count:4300 },
                       { fruit:'Papaya', count:1200 },
                       { fruit:'Melon', count:4500 }
                     ];

import { TreeMap } from '@syncfusion/ej2-treemap';
let treemap: TreeMap = new TreeMap({
    dataSource: fruits ,
    weightValuePath: 'count',
    rangeColorValuePath:'count',
    legendSettings:{
        visible:true
    },
    leafItemSettings: {
        labelPath: 'fruit',
        colorMapping:[
            {
               from:500,
               to:2500,
               minOpacity:0.2,
               maxOpacity:0.5,
               color:'orange'
           },
           {
               from:3000,
               to:4000,
               minOpacity:0.5,
               maxOpacity:0.8,
               color:'green'
           },
           {
               color:'red'
           }
        ]
     }
}, '#container');



