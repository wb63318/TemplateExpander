const SideBarGuide =[
    {text: 'Introduction',
    collapsed:false,

},
]

export default{
    "title":"TemplateExpander Docs",
    themeConfig:{
            sidebar:[

                {text:'EndPoint',link:'/index'},
                {text:'EndPoint',link:'/index'},
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
                    'text': 'OTHERS',
                    items:[
                        {text:'Notes',link:'/guide/notes.md'},
                    ]
                }
            ]
    }

}