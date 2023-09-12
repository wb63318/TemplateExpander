

export default{
    "title":" Axon Docs",
    themeConfig:{
            sidebar:[
                
                {
                    text:'Temple Expander ',
                items:[
                {text:'Template Expander Index',link:'/index'}, 
                {text:'Queries / Get Requests',link:'/guide/queries'},
                {text:'Mutations / Post Requests',link:'/guide/mutation'},
                {text:'Examples',link:'/guide/example'},
                    ],   
                },
                
                
                {
                    'text': 'EmailSender',

                    items:[
                        {text:'Email Index',link:'/guide/emailindex.md'},
                        {text:'Queries / Get Requests ',link:'/guide/emailqueries.md'},
                        {text:'Mutations / Post Requests',link:'/guide/emailmutations.md'},
                        {text:'Examples',link:'/guide/emailexamples.md'}
                    ]
                }
            ]
    }

}