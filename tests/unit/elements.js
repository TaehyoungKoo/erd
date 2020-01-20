function findLabel(wrapper, text) {
  let selectedLabel
  
  const labelList = wrapper.findAll('label')

  for (var i = 0; i < labelList.length; i++) {
    if (labelList.at(i).text() === text){
      return labelList.at(i)
    }
  }

  if (selectedLabel === undefined)
    console.log(`There is no [${text}] label`)
}


function findRadioButtonByValue(wrapper, value) {
  const radioList = wrapper.findAll('input[type="radio"]')

  for (var i = 0; i < radioList.length; i++) {

    //console.log(radioList.at(i).attributes().value)

    if (radioList.at(i).attributes().value === value) {
      return radioList.at(i)
    }
  }
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


function findCheckboxByValue(wrapper, value) {
  const checkboxList = wrapper.findAll('input[type = "checkbox"]')

  for (var i = 0; i < checkboxList.length; i++) {
    if (checkboxList.at(i).attributes().value === value) {
      return checkboxList.at(i)
    }
  }
}

function findCheckbox(wrapper, text) {
  const checkboxList = wrapper.findAll('div[id^="checkbox-container"]')

  for (var i = 0; i < checkboxList.length; i++) {
    const checkbox = checkboxList.at(i).find('input[type="checkbox"]')
    const label = checkboxList.at(i).find('label')

    if (label.text() === text) {
      return checkbox
    }
  }  
}

export {
  findLabel, 
  
  findRadioButton, 
  findRadioButtonByValue,
  
  findCheckbox,
  findCheckboxByValue,
}