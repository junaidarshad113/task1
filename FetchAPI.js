var posts = [];
fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res)=>{ return res.json();})
            .then((data)=>{
                console.log(data.title);
                document.getElementById("root")
               .innerHTML=data.title;
               data.map((values)=>{
               posts=values.data()
               .innerHTML=posts.tittle; 
            });
        }).catch((err)=>{
            console.log(err);
        })

