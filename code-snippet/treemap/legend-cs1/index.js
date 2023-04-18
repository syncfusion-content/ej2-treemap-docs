var treemap = new ej.treemap.TreeMap({
    dataSource: [
        { fruit:'Apple', count:5000 },
        { fruit:'Mango', count:3000 },
        { fruit:'Orange', count:2300 },
        { fruit:'Banana', count:500 },
        { fruit:'Grape', count:4300 },
        { fruit:'Papaya', count:1200 },
        { fruit:'Melon', count:4500 }
    ],
	weightValuePath: 'count',
    rangeColorValuePath:'count',
    legendSettings: {
        visible: true,
        position: 'Top'
    },
    leafItemSettings: {
        labelPath: 'fruit',
        colorMapping:[
            {
               from:500,
               to:3000,
               color:'orange'
           },
           {
               from:3000,
               to:5000,
               color:'green'
           }
        ]
    }
}, '#container');


