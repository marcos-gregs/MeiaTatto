class NewClient{
    constructor(name,contact,age,services = []){
        this.name = name,
        this.contact = contact,
        this.age = age,
        this.services = services
    }

    async GetClient (){
        const call_get = await fetch('http://localhost:3000/client')
        const convert_client = await call_get.json()
        console.log(convert_client)
    } 

    async addClient(database){

        let info_client ={
            Nome:this.name,
            Contato:this.contact,
            Idade:this.age,
            Historico:this.services,
        }

        
        const call_post = await fetch('http://localhost:3000/client',
            {
                method:"post",
                headers:{
                    'Content-Type':'application-json'
                },
                body:JSON.stringify(info_client)
            }
        )
        

        const send_post = await call_post.json();

        
    }

}
export default NewClient;