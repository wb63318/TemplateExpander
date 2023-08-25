

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
                
                
                //{text:'EndPoint',link:'/index'},
                // {
                //     'text': 'Guide',
                //     collapsed:true,
                //     items:[
                //         {text:'Home',link:'/index.md'},
                //         {text:'Queries',link:'/guide/queries.md'},
                //         {text:'Requests',link:'/guide/requests.md'},
                //         {text:'Handlers',link:'/guide/handlers.md'},
                //         {text:'Mutations',link:'/guide/mutations.md'},
                //         {text:'Expander Service',link:'/guide/expanderService.md'},
                //         {text:'Controller',link:'/guide/controller.md'},


                //     ]
                // },
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