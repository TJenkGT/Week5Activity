
let command = "";

const print = function () {
  let htmlStr = '';
  for ( let i = 0; i < employeeList.length; i++ ) {
      htmlStr += `<div class="entry"><p> ${employeeList[i].name}</p><p> ${employeeList[i].officeNum}</p><p> ${employeeList[i].phoneNum}</p></div>`;
    }
render(htmlStr);
}
// Add function to add names -------------------------------------------------
const add = function() {
  const userName = $('#name').val;
  const officeNum = $('#office').val;
  const phoneNum = $('#phone').val;
  employeeList.push({
    name: userName,
    officeNum: officeNum,
    phoneNum: phoneNum
  })
  print();
}
// Veridy function to confirm names -------------------------------------------
const verify = function () {
  const userName = $('#name').val();
  let htmlStr = 'Not in List';
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name === userName) {
      htmlStr = 'Name is in List';
    }
  }
  render(htmlStr);
}
// Udpdate function to update employee list -----------------------------------
const update = function () {
  const userName = $('#name').val;
  const officeNum = $('#office').val;
  const phoneNum = $('#phone').val;
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name === userName) {
      employeeList[i].officeNum = officeNum;
      employeeList[i].phoneNum = phoneNum;
    }    
  }
  print(); 
}
// Removed function ---------------------------------------------------------
const remove = function () {
  const userName = $('#name').val;
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name === userName) {
      employeeList.splice(i, 1);
    }
  }
  print();
}
// Run commands to call specific funtions--------------------------------------
const runCommand = function (event) {
  console.log('add');
  event.preventDefault();
  switch (command) {
    case 'add':
        add();
        break;
    case 'verify':
        verify();
        break;
    case 'update':
        update();
        break;
    case 'delete':
        remove();
        break;
  }
}
// Setting the function variables---------------------------------------------
const viewData = function () {
  $('#list').empty();
  command = '';
  $('form').hide();
  print();
}

const addData = function () {
  $('#list').empty();
  command = 'add';
  $('form').show();
  $('.extra-inputs').show();
}

const verifyData = function () {
  $('#list').empty();
  command = 'verify';
  $('form').show();
  $('.extra-inputs').hide();
}

const updateData = function () {
  $('#list').empty();
  command = 'update';
  $('form').show();
  $('.extra-inputs').show();
}

const dataDelete = function () {
  $('#list').empty();
  command = 'delete';
  $('form').show();
  $('.extra-inputs').hide();
}
  
// render function----------------------------------------------------------------
const render = function(htmlStr) {
  $('#list').html(htmlStr);
}



$('#view').on('click', viewData);
$('#add').on('click', addData);
$('#verify').on('click', verifyData);
$('#update').on('click', updateData);
$('#delete').on('click', dataDelete);
$('#submit').on('click', runCommand);

