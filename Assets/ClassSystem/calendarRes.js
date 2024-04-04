export default class CalendarAplication {
    constructor(){
        this.newDate = new Date(),
        this.date = '',
        this.day = '',
        this.months ='',
        this.years = '',
        this.hours ='',
        this.calendar ={
            "Janeiro":
            [
              {"day":'01',"services":[]} ,
                {"day":'02',"services":[]} ,
                {"day":'03',"services":[]} ,
                {"day":'04',"services":[]} ,
                {"day":'05',"services":[]} ,
                {"day":'06',"services":[]} ,
                {"day":'07',"services":[]} ,
                {"day":'08',"services":[]} ,
                {"day":'09',"services":[]} ,
                {"day":'10',"services":[]} ,
                {"day":'11',"services":[]} ,
                {"day":'12',"services":[]} ,
                {"day":'13',"services":[]} ,
                {"day":'14',"services":[]} ,
                {"day":'15',"services":[]} ,
                {"day":'16',"services":[]} ,
                {"day":'17',"services":[]} ,
                {"day":'18',"services":[]} ,
                {"day":'19',"services":[]} ,
                {"day":'20',"services":[]} ,
                {"day":'21',"services":[]} ,
                {"day":'22',"services":[]} ,
                {"day":'23',"services":[]} ,
                {"day":'24',"services":[]} ,
                {"day":'25',"services":[]} ,
                {"day":'26',"services":[]} ,
                {"day":'27',"services":[]} ,
                {"day":'28',"services":[]} ,
                {"day":'29',"services":[]} ,
                {"day":'30',"services":[]} ,
                {"day":'31',"services":[]} 
              ],
            "Fevereiro":[
                {"day":'01',"services":[]} ,
                {"day":'02',"services":[]} ,
                {"day":'03',"services":[]} ,
                {"day":'04',"services":[]} ,
                {"day":'05',"services":[]} ,
                {"day":'06',"services":[]} ,
                {"day":'07',"services":[]} ,
                {"day":'08',"services":[]} ,
                {"day":'09',"services":[]} ,
                {"day":'10',"services":[]} ,
                {"day":'11',"services":[]} ,
                {"day":'12',"services":[]} ,
                {"day":'13',"services":[]} ,
                {"day":'14',"services":[]} ,
                {"day":'15',"services":[]} ,
                {"day":'16',"services":[]} ,
                {"day":'17',"services":[]} ,
                {"day":'18',"services":[]} ,
                {"day":'19',"services":[]} ,
                {"day":'20',"services":[]} ,
                {"day":'21',"services":[]} ,
                {"day":'22',"services":[]} ,
                {"day":'23',"services":[]} ,
                {"day":'24',"services":[]} ,
                {"day":'25',"services":[]} ,
                {"day":'26',"services":[]} ,
                {"day":'27',"services":[]} ,
                {"day":'28',"services":[]} ,
                {"day":'29',"services":[]} 
              ],
            "Março":[{"day":'01',"services":[]} ,
              {"day":'02',"services":[]} ,
              {"day":'03',"services":[]} ,
              {"day":'04',"services":[]} ,
              {"day":'05',"services":[]} ,
              {"day":'06',"services":[]} ,
              {"day":'07',"services":[]} ,
              {"day":'08',"services":[]} ,
              {"day":'09',"services":[]} ,
              {"day":'10',"services":[]} ,
              {"day":'11',"services":[]} ,
              {"day":'12',"services":[]} ,
              {"day":'13',"services":[]} ,
              {"day":'14',"services":[]} ,
              {"day":'15',"services":[]} ,
              {"day":'16',"services":[]} ,
              {"day":'17',"services":[]} ,
              {"day":'18',"services":[]} ,
              {"day":'19',"services":[]} ,
              {"day":'20',"services":[]} ,
              {"day":'21',"services":[]} ,
              {"day":'22',"services":[]} ,
              {"day":'23',"services":[]} ,
              {"day":'24',"services":[]} ,
              {"day":'25',"services":[]} ,
              {"day":'26',"services":[]} ,
              {"day":'27',"services":[]} ,
              {"day":'28',"services":[]} ,
              {"day":'29',"services":[]} ,
              {"day":'30',"services":[]} ,
              {"day":'31',"services":[]} 
            ],
            "Abril":[{"day":'01',"services":[]} ,
                {"day":'02',"services":[]} ,
                {"day":'03',"services":[]} ,
                {"day":'04',"services":[]} ,
                {"day":'05',"services":[]} ,
                {"day":'06',"services":[]} ,
                {"day":'07',"services":[]} ,
                {"day":'08',"services":[]} ,
                {"day":'09',"services":[]} ,
                {"day":'10',"services":[]} ,
                {"day":'11',"services":[]} ,
                {"day":'12',"services":[]} ,
                {"day":'13',"services":[]} ,
                {"day":'14',"services":[]} ,
                {"day":'15',"services":[]} ,
                {"day":'16',"services":[]} ,
                {"day":'17',"services":[]} ,
                {"day":'18',"services":[]} ,
                {"day":'19',"services":[]} ,
                {"day":'20',"services":[]} ,
                {"day":'21',"services":[]} ,
                {"day":'22',"services":[]} ,
                {"day":'23',"services":[]} ,
                {"day":'24',"services":[]} ,
                {"day":'25',"services":[]} ,
                {"day":'26',"services":[]} ,
                {"day":'27',"services":[]} ,
                {"day":'28',"services":[]} ,
                {"day":'29',"services":[]} ,
                {"day":'30',"services":[]} 
              ],
           "Maio":[
            {"day":'01',"services":[]} ,
              {"day":'02',"services":[]} ,
              {"day":'03',"services":[]} ,
              {"day":'04',"services":[]} ,
              {"day":'05',"services":[]} ,
              {"day":'06',"services":[]} ,
              {"day":'07',"services":[]} ,
              {"day":'08',"services":[]} ,
              {"day":'09',"services":[]} ,
              {"day":'10',"services":[]} ,
              {"day":'11',"services":[]} ,
              {"day":'12',"services":[]} ,
              {"day":'13',"services":[]} ,
              {"day":'14',"services":[]} ,
              {"day":'15',"services":[]} ,
              {"day":'16',"services":[]} ,
              {"day":'17',"services":[]} ,
              {"day":'18',"services":[]} ,
              {"day":'19',"services":[]} ,
              {"day":'20',"services":[]} ,
              {"day":'21',"services":[]} ,
              {"day":'22',"services":[]} ,
              {"day":'23',"services":[]} ,
              {"day":'24',"services":[]} ,
              {"day":'25',"services":[]} ,
              {"day":'26',"services":[]} ,
              {"day":'27',"services":[]} ,
              {"day":'28',"services":[]} ,
              {"day":'29',"services":[]} ,
              {"day":'30',"services":[]} ,
              {"day":'31',"services":[]} 
            ],
            "Junho":[
              {"day":'01',"services":[]} ,
                {"day":'02',"services":[]} ,
                {"day":'03',"services":[]} ,
                {"day":'04',"services":[]} ,
                {"day":'05',"services":[]} ,
                {"day":'06',"services":[]} ,
                {"day":'07',"services":[]} ,
                {"day":'08',"services":[]} ,
                {"day":'09',"services":[]} ,
                {"day":'10',"services":[]} ,
                {"day":'11',"services":[]} ,
                {"day":'12',"services":[]} ,
                {"day":'13',"services":[]} ,
                {"day":'14',"services":[]} ,
                {"day":'15',"services":[]} ,
                {"day":'16',"services":[]} ,
                {"day":'17',"services":[]} ,
                {"day":'18',"services":[]} ,
                {"day":'19',"services":[]} ,
                {"day":'20',"services":[]} ,
                {"day":'21',"services":[]} ,
                {"day":'22',"services":[]} ,
                {"day":'23',"services":[]} ,
                {"day":'24',"services":[]} ,
                {"day":'25',"services":[]} ,
                {"day":'26',"services":[]} ,
                {"day":'27',"services":[]} ,
                {"day":'28',"services":[]} ,
                {"day":'29',"services":[]} ,
                {"day":'30',"services":[]} 
              ],
            "Julho":[
              {"day":'01',"services":[]} ,
                {"day":'02',"services":[]} ,
                {"day":'03',"services":[]} ,
                {"day":'04',"services":[]} ,
                {"day":'05',"services":[]} ,
                {"day":'06',"services":[]} ,
                {"day":'07',"services":[]} ,
                {"day":'08',"services":[]} ,
                {"day":'09',"services":[]} ,
                {"day":'10',"services":[]} ,
                {"day":'11',"services":[]} ,
                {"day":'12',"services":[]} ,
                {"day":'13',"services":[]} ,
                {"day":'14',"services":[]} ,
                {"day":'15',"services":[]} ,
                {"day":'16',"services":[]} ,
                {"day":'17',"services":[]} ,
                {"day":'18',"services":[]} ,
                {"day":'19',"services":[]} ,
                {"day":'20',"services":[]} ,
                {"day":'21',"services":[]} ,
                {"day":'22',"services":[]} ,
                {"day":'23',"services":[]} ,
                {"day":'24',"services":[]} ,
                {"day":'25',"services":[]} ,
                {"day":'26',"services":[]} ,
                {"day":'27',"services":[]} ,
                {"day":'28',"services":[]} ,
                {"day":'29',"services":[]} ,
                {"day":'30',"services":[]} ,
                {"day":'31',"services":[]} 
              ],
            "Agosto":[
              {"day":'01',"services":[]} ,
                {"day":'02',"services":[]} ,
                {"day":'03',"services":[]} ,
                {"day":'04',"services":[]} ,
                {"day":'05',"services":[]} ,
                {"day":'06',"services":[]} ,
                {"day":'07',"services":[]} ,
                {"day":'08',"services":[]} ,
                {"day":'09',"services":[]} ,
                {"day":'10',"services":[]} ,
                {"day":'11',"services":[]} ,
                {"day":'12',"services":[]} ,
                {"day":'13',"services":[]} ,
                {"day":'14',"services":[]} ,
                {"day":'15',"services":[]} ,
                {"day":'16',"services":[]} ,
                {"day":'17',"services":[]} ,
                {"day":'18',"services":[]} ,
                {"day":'19',"services":[]} ,
                {"day":'20',"services":[]} ,
                {"day":'21',"services":[]} ,
                {"day":'22',"services":[]} ,
                {"day":'23',"services":[]} ,
                {"day":'24',"services":[]} ,
                {"day":'25',"services":[]} ,
                {"day":'26',"services":[]} ,
                {"day":'27',"services":[]} ,
                {"day":'28',"services":[]} ,
                {"day":'29',"services":[]} ,
                {"day":'30',"services":[]} 
              ],
            "Setembro":[
              {"day":'01',"services":[]} ,
                {"day":'02',"services":[]} ,
                {"day":'03',"services":[]} ,
                {"day":'04',"services":[]} ,
                {"day":'05',"services":[]} ,
                {"day":'06',"services":[]} ,
                {"day":'07',"services":[]} ,
                {"day":'08',"services":[]} ,
                {"day":'09',"services":[]} ,
                {"day":'10',"services":[]} ,
                {"day":'11',"services":[]} ,
                {"day":'12',"services":[]} ,
                {"day":'13',"services":[]} ,
                {"day":'14',"services":[]} ,
                {"day":'15',"services":[]} ,
                {"day":'16',"services":[]} ,
                {"day":'17',"services":[]} ,
                {"day":'18',"services":[]} ,
                {"day":'19',"services":[]} ,
                {"day":'20',"services":[]} ,
                {"day":'21',"services":[]} ,
                {"day":'22',"services":[]} ,
                {"day":'23',"services":[]} ,
                {"day":'24',"services":[]} ,
                {"day":'25',"services":[]} ,
                {"day":'26',"services":[]} ,
                {"day":'27',"services":[]} ,
                {"day":'28',"services":[]} ,
                {"day":'29',"services":[]} ,
                {"day":'30',"services":[]} ,
                {"day":'31',"services":[]} 
              ],
            "Outubro":
            [
              {"day":'01',"services":[]} ,
                {"day":'02',"services":[]} ,
                {"day":'03',"services":[]} ,
                {"day":'04',"services":[]} ,
                {"day":'05',"services":[]} ,
                {"day":'06',"services":[]} ,
                {"day":'07',"services":[]} ,
                {"day":'08',"services":[]} ,
                {"day":'09',"services":[]} ,
                {"day":'10',"services":[]} ,
                {"day":'11',"services":[]} ,
                {"day":'12',"services":[]} ,
                {"day":'13',"services":[]} ,
                {"day":'14',"services":[]} ,
                {"day":'15',"services":[]} ,
                {"day":'16',"services":[]} ,
                {"day":'17',"services":[]} ,
                {"day":'18',"services":[]} ,
                {"day":'19',"services":[]} ,
                {"day":'20',"services":[]} ,
                {"day":'21',"services":[]} ,
                {"day":'22',"services":[]} ,
                {"day":'23',"services":[]} ,
                {"day":'24',"services":[]} ,
                {"day":'25',"services":[]} ,
                {"day":'26',"services":[]} ,
                {"day":'27',"services":[]} ,
                {"day":'28',"services":[]} ,
                {"day":'29',"services":[]} ,
                {"day":'30',"services":[]}  
              ],
            "Novembro":[
              {"day":'01',"services":[]} ,
                {"day":'02',"services":[]} ,
                {"day":'03',"services":[]} ,
                {"day":'04',"services":[]} ,
                {"day":'05',"services":[]} ,
                {"day":'06',"services":[]} ,
                {"day":'07',"services":[]} ,
                {"day":'08',"services":[]} ,
                {"day":'09',"services":[]} ,
                {"day":'10',"services":[]} ,
                {"day":'11',"services":[]} ,
                {"day":'12',"services":[]} ,
                {"day":'13',"services":[]} ,
                {"day":'14',"services":[]} ,
                {"day":'15',"services":[]} ,
                {"day":'16',"services":[]} ,
                {"day":'17',"services":[]} ,
                {"day":'18',"services":[]} ,
                {"day":'19',"services":[]} ,
                {"day":'20',"services":[]} ,
                {"day":'21',"services":[]} ,
                {"day":'22',"services":[]} ,
                {"day":'23',"services":[]} ,
                {"day":'24',"services":[]} ,
                {"day":'25',"services":[]} ,
                {"day":'26',"services":[]} ,
                {"day":'27',"services":[]} ,
                {"day":'28',"services":[]} ,
                {"day":'29',"services":[]} ,
                {"day":'30',"services":[]} ,
                {"day":'31',"services":[]} 
              ],
            "Dezembro":[
              {"day":'01',"services":[]} ,
                {"day":'02',"services":[]} ,
                {"day":'03',"services":[]} ,
                {"day":'04',"services":[]} ,
                {"day":'05',"services":[]} ,
                {"day":'06',"services":[]} ,
                {"day":'07',"services":[]} ,
                {"day":'08',"services":[]} ,
                {"day":'09',"services":[]} ,
                {"day":'10',"services":[]} ,
                {"day":'11',"services":[]} ,
                {"day":'12',"services":[]} ,
                {"day":'13',"services":[]} ,
                {"day":'14',"services":[]} ,
                {"day":'15',"services":[]} ,
                {"day":'16',"services":[]} ,
                {"day":'17',"services":[]} ,
                {"day":'18',"services":[]} ,
                {"day":'19',"services":[]} ,
                {"day":'20',"services":[]} ,
                {"day":'21',"services":[]} ,
                {"day":'22',"services":[]} ,
                {"day":'23',"services":[]} ,
                {"day":'24',"services":[]} ,
                {"day":'25',"services":[]} ,
                {"day":'26',"services":[]} ,
                {"day":'27',"services":[]} ,
                {"day":'28',"services":[]} ,
                {"day":'29',"services":[]} ,
                {"day":'30',"services":[]} ,
                {"day":'30',"services":[]} 
              ],
        }
    }
    testDate(){
      console.log(this.newDate)
    }
    CallProp(){
      const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Augosto", "Setembro", "Outuber", "Novembro", "Dezembro"];  this.date = this.newDate.getDate();
      let hours = `${this.newDate.getHours()}:${this.newDate.getMinutes()}`
      this.hours = hours;
      this.day =  this.newDate.getDay();
      this.months =  months[this.newDate.getMonth()];
      this.years = this.newDate.getFullYear();
    }
    
    respawnMonthYear(id_div,id_text){
      let textString = `${this.years} ${this.months}`
      let getDiv = document.getElementById(`${id_div}`)
      let newText = document.createElement('h2')
      newText.className = id_text
      newText.innerText = textString
      getDiv.append(newText)
    }

    respawnCalendar(div_calendar,div_tb, monthVar = this.months){
      
      const getDiv = document.querySelector(`.${div_calendar}`)
      
      let ArrayCalendar = this.calendar[`${monthVar}`]

      ArrayCalendar.forEach((element) => {
        let CreateColunm = document.createElement('th')
        CreateColunm.innerText = element.day
        CreateColunm.className = 'removed-column'
        let export_day = element.day

        div_tb.forEach(element =>{
          // ConfigVar
          let String_Format_text = element.split('-')[0]
          let Dinamic_class_name = `${export_day}-${monthVar}-${String_Format_text}`
          // Create Row
          let getRow = document.getElementById(`${element}`)
          let CreateRow = document.createElement('td')
          CreateRow.className =`${Dinamic_class_name} row-table remove-row`
          let createButtomModal =  document.createElement('button')
          createButtomModal.className ='js-modal-trigger'
          createButtomModal.textContent='+'
          createButtomModal.dataset.target = 'modal-js'
          CreateRow.append(createButtomModal)
          
          getRow.appendChild(CreateRow)
        })
        getDiv.appendChild(CreateColunm)
      });

      // let hors_table = ['08:00','09:00','10:00','12:00','13:00','14:00','15:00' ,'16:00','17:00','18:00','19:00','20:00','21:00' ,'22:00']
           

    }

    respawnMonthModal(div_element,inject_div,dinamic_class_hours,id_inject_div,div_text){
      const getDiv = document.querySelector(`#${div_element}`)
      const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];  this.date = this.newDate.getDate();
      
      months.forEach((element,index) =>{
        let id_dinamic = `modal-${index}-${element}`
        let create_buttom = document.createElement('button');
        create_buttom.textContent = element
        create_buttom.id = id_dinamic
        create_buttom.value = index
        getDiv.append(create_buttom)
 
        let action_modal = document.querySelector(`#${id_dinamic}`);
        action_modal.addEventListener('click',()=>{
          let month_index = index
          const getInjectDiv = document.querySelector(`.${inject_div}`)
          
          this.removeTable(id_inject_div,dinamic_class_hours)
          this.respawnCalendar(inject_div,dinamic_class_hours,element)
          this.injectMonthYear(div_text,element)

        })
       
        // let create_div = document.createElement('div')
        // let text_div = document.createElement('h1');
        // let id_dinamic = `modal-${index}-${element}`
        // text_div.innerText = element
        // create_div.id = id_dinamic

        // create_div.append(text_div)
        // getDiv.append(create_div)

        // let action_modal = document.querySelector(id_dinamic);
        // action_modal.addEventListener('click',()=>{
        //   console.log(`foi ${id_dinamic}`)
        // })
        
      
      })
    }

    removeTable(div_column,div_row){
      const remove_div_column = document.querySelector(`#${div_column}`)
      while(remove_div_column.firstElementChild){
        remove_div_column.removeChild(remove_div_column.firstElementChild)
      }
    
      div_row.forEach(element =>{
        const remove_div_row = document.getElementById(`${element}`)
        while(remove_div_row.firstElementChild){
          remove_div_row.removeChild(remove_div_row.firstElementChild)
        } 
      })     
      
      // let testnode = remove_column.parentNode;
      // console.log(testnode)
     
      // remove_column.parentNode.removeChild()
      
    }
    injectMonthYear(div_text,month){
      let textString = `${this.years} ${month}`
      let getText = document.querySelector(`.${div_text}`)
      getText.innerHTML = `${textString}`
    
    }

  }