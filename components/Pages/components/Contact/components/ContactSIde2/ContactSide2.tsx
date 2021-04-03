import React from 'react';
import './ContactSide2.scss';
import $ from 'jquery';

const ContactSide2 = ()=> {

     let className = 'label';
     $("*").on("click", function(){
        let focused = document.activeElement;
        let clickedDataBrand = $(focused).attr("data-brand");
       
        $(".textarea").each(function(){
          let inputDataBrand = $(this).attr("data-brand");
          // if the input element is focused, move label out
          if(inputDataBrand === clickedDataBrand){
            moveOut(inputDataBrand);
        // if the input is not empty, move label out
          }else if($(this).val()){
              moveOut(inputDataBrand);
       // all others move label in
          }else{
              moveIn(inputDataBrand);
          }
        });
       })

    function moveOut(labelId:string){
        $("#"+labelId).css({"bottom":"0px","right":"0px","color":"blue"});
    }
    function moveIn(labelId:string){
      $("#"+labelId).each(function(){
         $(this).css({"bottom":"-41.2px","right":"-25px","color":"#585858"});
      })
   }

  // if form is empty, warning user
  const checkEmpty = (event:any)=>{
    if(!$(".messagetextArea").val()){
        event.preventDefault();
        alert("Message can't be empty");
      } 
  }

return   <section className="side2Container contactContainer" >
<h2 className="party2__body__title2">CONTACT <span className="part2__body__h2"></span>
    <span className="part2__body__shadowtext1">CONTACT</span> 
   </h2>
   <p className="words">I am not afraid of growing slowly, I am only afraid of standing still. -- Darcy Xian</p>

    <form
    action="https://formspree.io/f/mzbklkga"
    method="POST"
    className="form">
<div className="form__name">
        <svg className="form__name__svg  formicon" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002.002zM8 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z" clip-rule="evenodd"></path></svg>
        <label id='name' className={className}>name:</label>
        <input data-brand='name'   className="nameTextArea textarea global_contact-form-icon__QkbqA" type="text" name="name"></input>
</div>
<div className="form__phone">
    <svg className="form__name__svg  formicon" stroke="currentColor " fill="currentColor" stroke-width="0" viewBox="0 0 16 16"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11 1H5a1 1 0 00-1 1v12a1 1 0 001 1h6a1 1 0 001-1V2a1 1 0 00-1-1zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M8 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
    <label id='phone' className={className}>Phone:</label>
    <input data-brand='phone' className="phoneTextAreas textarea global_contact-form-icon__QkbqA" type="text" name="phone"></input>
</div>
<div className="form__email">
    <svg className="form_email__svg formicon" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 14 16"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"></path></svg>
    <label id='email' className={className}>Email: </label>
    <input data-brand='email'  className="emailTextArea textarea global_contact-form-icon__QkbqA" type="email" name="email"></input>
</div>
<div className="form__message">
    <svg className="formicon" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14.5 3h-13a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M3 5.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM3 8a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8zm0 2.5a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5z" clip-rule="evenodd"></path></svg>
    <label id='message' className={className}>message:</label>
    <textarea data-brand='message'   className="messagetextArea textarea global_contact-form-icon__QkbqA" name="message"></textarea>
</div>

    <button type="submit" className="formButton" onClick={checkEmpty}><div className="span"></div><div className="send">SEND</div></button>
  </form>
</section >
}

export default ContactSide2;