function head(title){
    document.write(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="im.css">
</head>

<body>
    <header>
        <a href="./">${title}</a>  
          
    </header>
    <nav>
        <ul>
            <li><a href="image.html">home</a></li>
            <li><a href="page1.html">enjoy</a></li>
            <li><a href="page2.html">natural</a></li>
            <li><a href="page3.html">lion</a></li>
            <li><a href="page4.html">flower</a></li>
            <li><a href="page5.html">books</a></li>

            
        </ul>
    </nav>
    <section>
`);
}
function post(count){
    let p=1
    do{
        document.write(`
        <div class="post">
                
                <h1>study books</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos et magnam saepe atque obcaecati nam rerum dolor amet, omnis veniam exercitationem, sit hic sed repudiandae id tenetur doloribus temporibus aspernatur. Unde a repellendus sit dolore tempore sapiente sint voluptatibus, commodi voluptas voluptates voluptate deserunt nam exercitationem enim praesentium ipsam sunt est neque amet quidem facere architecto! Non, culpa, distinctio aut architecto consequatur laboriosam explicabo quaerat, id tenetur ut modi! Et odit quas neque, magni eveniet explicabo voluptates necessitatibus voluptatem rerum. Odit repellendus distinctio quod dolor asperiores esse rem officia error, eius voluptas quam ut? Velit, maxime omnis et consequuntur dolores alias magni aspernatur inventore facilis tempora nisi esse sit ipsa delectus obcaecati commodi doloribus ducimus. Perferendis laboriosam enim quasi! Nulla, eligendi iusto. Facere fugit expedita voluptate aperiam aliquam veritatis magni eius! Fuga magnam rem reiciendis iure cupiditate modi obcaecati fugiat consectetur, ex molestias beatae harum, dolores earum nulla quo provident aliquam voluptates? Iste blanditiis voluptas ut voluptatem, magnam velit eius cum mollitia. Tempore ad voluptates praesentium voluptatem amet laborum repellat exercitationem cupiditate est voluptatibus eaque similique modi quia laudantium molestiae ducimus minus, soluta odit eos animi labore numquam esse quas? Rem voluptates, maiores voluptatem distinctio a earum id dolorum exercitationem, magni ad esse amet explicabo minima illum. Eligendi optio voluptatibus nobis repellat quasi sit harum voluptatum et placeat. Ratione minima excepturi optio veniam similique qui maiores dolor consequatur, esse rem velit quod beatae. Cumque illo id, nesciunt ipsam fugiat inventore error sequi, excepturi ea ullam vero, libero facere pariatur provident!</p>
            </div>
    
        `)
     p++
    }
    while(p<=count)

}
function foot(){
    document.write(`
    </article>
        <aside>
            <marquee>this is add</marquee>
        </aside>
    </section>
    
    <footer>
        <h2>@copyright#2023</h2>
    </footer>
</body>
</html>
    `)
}