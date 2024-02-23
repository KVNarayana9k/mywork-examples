let colors=['green' ,'blue', 'black', 'pink' ,'orang' ,'white']
function change ()
{
    let randomIndex = Math.floor(Math.random() * 6 )
    consolelog(colors[randomIndex])
    document.body.style.backgroundColor=colors[ randomIndex ]
}
console.log(randomColors)