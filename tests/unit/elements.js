//------------------------------------------------------------------
function hasPageTitle(wrapper, title) {
  let hasPageTitle = false
  const pageTitle = wrapper.find('div[class="page-title"]')

  if(pageTitle !== undefined){
    if(pageTitle.text() === title)
      hasPageTitle = true
  }

  return hasPageTitle
}

//------------------------------------------------------------------
function findLabel(wrapper, text) {
  let selectedLabel

  const labelList = wrapper.findAll('label')

  for (var i = 0; i < labelList.length; i++) {
    if (labelList.at(i).text() === text) {
      return labelList.at(i)
    }
  }
}

//------------------------------------------------------------------
function findRadioButtonByValue(wrapper, value) {
  const radioList = wrapper.findAll('input[type="radio"]')

  for (var i = 0; i < radioList.length; i++) {

    if (radioList.at(i).attributes().value === value) {
      return radioList.at(i)
    }
  }
}

function selectRadioButton(wrapper, text) {
  const radioButton = findRadioButton(wrapper, text)

  radioButton.element.checked = 'checked'
  radioButton.trigger('change')
}

function unSelectRadioButton(wrapper, text) {
  const radioButton = findRadioButton(wrapper, text)

  radioButton.element.checked = ''
  radioButton.trigger('change')
}

function findRadioButton(wrapper, text) {
  //id^ 의 ^는 id의 value중 특정 값을 포함하는지 체크(wildcard* 와 같이)
  const radioGroupList = wrapper.findAll('div[id^="radio-button-container"]')

  for (var i = 0; i < radioGroupList.length; i++) {
    const radio = radioGroupList.at(i).find('input[type="radio"]')
    const label = radioGroupList.at(i).find('label')

    if (label.text() === text) {
      return radio
    }
  }
}

//------------------------------------------------------------------
function findCheckboxByValue(wrapper, value) {
  const checkboxList = wrapper.findAll('input[type = "checkbox"]')

  for (var i = 0; i < checkboxList.length; i++) {
    if (checkboxList.at(i).attributes().value === value) {
      return checkboxList.at(i)
    }
  }
}

function findCheckbox(wrapper, text) {
  let selectedCheckbox
  const checkboxList = wrapper.findAll('div[id^="checkbox-container"]')

  for (var i = 0; i < checkboxList.length; i++) {
    const checkbox = checkboxList.at(i).find('input[type="checkbox"]')
    const label = checkboxList.at(i).find('label')

    if (label.text() === text) {
      selectedCheckbox = checkbox
    }
  }

  return {
    object: selectedCheckbox,
    exist: (selectedCheckbox === undefined ? false : true),

    checked: (
      selectedCheckbox !== undefined &&
        selectedCheckbox.element.checked ? true : false
      //or selectedCheckbox.attributes().checked === 'checked' ? true : false
    ),

    disabled: (
      selectedCheckbox !== undefined &&
        selectedCheckbox.element.disabled ? true : false
    ),
  }
}

function checkCheckbox(wrapper, text) {
  const checkbox = findCheckbox(wrapper, text).object

  checkbox.element.checked = 'checked'
  checkbox.trigger('change')
}

function unCheckCheckbox(wrapper, text) {
  const checkbox = findCheckbox(wrapper, text).object

  checkbox.element.checked = ''
  checkbox.trigger('change')
}

//------------------------------------------------------------------
function findDropdownlist(wrapper, name) {
  const selectList = wrapper.findAll('select')

  for (var i = 0; i < selectList.length; i++) {
    if (selectList.at(i).attributes().name === name) {
      return selectList.at(i)
    }
  }
}

function getOptionList(wrapper, selectName){
  const select = findDropdownlist(wrapper, selectName)

  const optionList = select.findAll('option')
  //optionList.at(1).setSelected()

  return optionList.length
}

//------------------------------------------------------------------
function findInputById(wrapper, id) {
  const inputList = wrapper.findAll('input[type = "input"]')

  for (var i = 0; i < inputList.length; i++) {
    if (inputList.at(i).attributes().id === id) {
      return inputList.at(i)
    }
  }
}

function enterInput(wrapper, id, value) {
  const input = findInputById(wrapper, id)

  //https://vue-test-utils.vuejs.org/api/wrapper/#setvalue
  //input.element.value = value
  //textInput.trigger('input')

  input.setValue(value)
  input.trigger('change')
}

//------------------------------------------------------------------
function findTextareaById(wrapper, id) {
  const textareaList = wrapper.findAll('textarea')

  for (var i = 0; i < textareaList.length; i++) {
    if (textareaList.at(i).attributes().id === id) {
      return textareaList.at(i)
    }
  }
}

//------------------------------------------------------------------
function findButton(wrapper, text) {
  const buttonList = wrapper.findAll('button')

  for (var i = 0; i < buttonList.length; i++) {
    if (buttonList.at(i).text() === text) {
      return buttonList.at(i)
    }
  }
}

export {
  hasPageTitle, 

  findLabel,

  findRadioButton,
  findRadioButtonByValue,
  selectRadioButton,
  unSelectRadioButton,

  findCheckbox,
  findCheckboxByValue,
  checkCheckbox,
  unCheckCheckbox,

  findDropdownlist,
  getOptionList,

  findInputById,
  enterInput,

  findTextareaById,

  findButton,
}