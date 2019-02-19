const $ = function (selector) {
    const employeeList = document.querySelectorAll(selector);
  
    const text = function(content){
      for (let i = 0; i < employeeList.length; i++) {
        employeeList[i].innerText = content;
      }
    }
    
    const html = function(content){
      for (let i = 0; i < employeeList.length; i++) {
        employeeList[i].innerHTML = content;
      }
    }
  
    const addClass = function(className){
      for (let i = 0; i < employeeList.length; i++) {
        employeeList[i].classList.add(className);
      }
    }
  
    const removeClass = function(className){
      for (let i = 0; i < employeeList.length; i++) {
        employeeList[i].classList.remove(className);
      }
    }
  
    const toggleClass = function(className){
      for (let i = 0; i < employeeList.length; i++) {
        employeeList[i].classList.toggle(className);
      }
    }
  
    const empty = function(){
      for (let i = 0; i < employeeList.length; i++) {
        employeeList[i].innerHTML = '';
      }
    }
  
    const append = function(content){
      for (let i = 0; i < employeeList.length; i++) {
        employeeList[i].innerHTML += content;
      }
    }
  
    const prepend = function(content){
      for (let i = 0; i < employeeList.length; i++) {
        employeeList[i].innerHTML = content + employeeList[i].innerHTML;
      }
    }
  
    const val = function (content) {
        if(content === undefined){
          return employeeList[0].value; 
        } else {
          employeeList[0].value = content;
        }     
    }
  
    const on = function (action, cb) {
      for (let i = 0; i < employeeList.length; i++) {
        employeeList[i].addEventListener(action, cb);
      }
    }

    const show = function (action, cb) {
      for (let i = 0; i < employeeList.length; i++) {
        employeeList[i].style.display = '';
      }
    }

    const hide = function (action, cb) {
      for (let i = 0; i < employeeList.length; i++) {
        employeeList[i].style.display = 'none';
      }
    }
  
    return {
      text: text,
      html: html,
      addClass: addClass,
      removeClass: removeClass,
      toggleClass: toggleClass,
      empty: empty,
      append: append,
      prepend: prepend,
      on: on,
      val: val,
      show: show,
      hide: hide
    };
  }
  