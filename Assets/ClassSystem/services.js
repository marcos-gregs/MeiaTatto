

class Service{
    constructor(name,contact, date, hours, value, tipServices){
        this.name = name,
        this.contact = contact,
        this.date = date,
        this.hours = hours,
        this.value = value,
        this.tipServices = tipServices    }
    async AddServices(){
        const info_service = {
            nome:this.name,
            contact:this.contact,
            date:this.date,
            hours:this.hours,
            value:this.value,
            tipServices:this.tipServices
        }
        const call_post = await fetch('http://localhost:3000/services',{
            method:'POST',
            headers:{
                    'Content-Type':'application-json'
            },
            body:JSON.stringify(info_service)
        })
        const send_post = await call_post.json();
        console.log(send_post)
        console.log(info_service);
    }

   AddCalendar(){
        const info_service = {
            nome:this.name,
            contact:this.contact,
            date:this.date,
            hours:this.hours,
            value:this.value,
            tipServices:this.tipServices
        }
   
    }
}
export default Service;