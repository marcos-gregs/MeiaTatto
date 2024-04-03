
import NewClient from './ClassSystem/client.js';
import InputTelphone from './ClassSystem/FrameworksSystem/TelConfig.js';
import Service from './ClassSystem/services.js';
// import Dayjs_Extends from '../index.cjs';
import CalendarAplication from './ClassSystem/calendarRes.js';


// import 

// Var Client.

const client_name = document.getElementById('Client_name');
const client_contato = document.getElementById('Client_contact');
const client_idade = document.getElementById('Client_age');

// Config phone
const MaskPhone = new InputTelphone('Client_contact');
MaskPhone.ActionEvent();
 
// Btn Send
const client_send = document.getElementById('Client_send');


client_send.addEventListener('click',()=>{
    
    const info_Client = new NewClient(client_name.value,client_contato.value,client_idade.value)
    info_Client.addClient()
    info_Client.GetClient();
})

// Var Services.

const services_name = document.getElementById('Services_name');
const services_contact = document.getElementById('Services_contact');
const services_data = document.getElementById('Services_date');
const services_hora = document.getElementById('Services_hours');
const services_tipService = document.getElementById('Services_TipService');
const services_value = document.getElementById('Services_value');

const services_send = document.getElementById('Services_send');

services_send.addEventListener('click',()=>{
    const service_send = new Service(
        services_name.value,
        services_contact.value,
        services_data.value,
        services_hora.value,
        services_value.value,
        services_tipService.value
    );
    
    service_send.AddCalendar();
})

// Test Calendar
let dinamic_class_hours = ["08-hours","09-hours","10-hours","11-hours","12-hours","13-hours","14-hours","15-hours","16-hours","17-hours","18-hours","19-hours","20-hours","21-hours"]
let novaData = new CalendarAplication();
novaData.CallProp()
novaData.respawnMonthYear('DateLoad','text-Dateload');
novaData.respawnCalendar('TableDay',dinamic_class_hours)
novaData.respawnMonthModal('modalCalendar','TableDay',dinamic_class_hours,`father-element`,'text-Dateload')


    