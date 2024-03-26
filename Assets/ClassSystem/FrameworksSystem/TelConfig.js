class InputTelphone{
    constructor(inputClient){
        this.inputClient = document.getElementById(inputClient)
    }

    ActionEvent(){
        this.inputClient.addEventListener('keyup',(event)=>{
            let input = event.target
            input.value = this.TemplateMaskPhone(input.value)
        })
    }

    TemplateMaskPhone(value)
    {
        
        if (!value) return ''
        value = value.replace(/\D/g,'')
        value = value.replace(/(\d{2})(\d)/,"($1) $2")
        value = value.replace(/(\d)(\d{4})$/,"$1 - $2")
        return value
    }
}
export default InputTelphone
