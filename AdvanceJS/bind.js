class React{
    constructor()
    {
        this.library="React";
        this.server="https://localhost:300" 
        document
        .body
        .querySelector('button')
        .addEventListener('click',this.handler.bind(this))
        
    }
    handler()
        {
            console.log("clicked on hander this is bind now ");
            console.log(this.server);

        }

}
const app =new React();
