/*
  # Rules:
    1. At least 8 characters
    2. At least one lowercase character
    3. At least one uppercase character
    4. At least one number
    5. At least one special character (!, @, #)
    6. Should not contain the following: 'test', 'password'

  # Category:
    - Strong (6/6)
    - Moderate (4-5/6)
    - Weak (0-3/6)
*/

// Collect user password
const password = prompt('Enter your password')
checkPasswordStrength(password)

// Check password strength based on rules
function checkPasswordStrength(password) {
  // Check: Password is null / '' -> Invalid password
  if(!password) {
    console.log('Invalid password')
    return
  }

  let score = 0

  // Rule 1: At least 8 characters
  if(password.length >= 8) {
    document.getElementById('rule-1-result').src = 'assets/correct.gif'
    score++
  } else {
    document.getElementById('rule-1-result').src = 'assets/incorrect.gif'
  }

  // Rule 2: At least one lowercase character
  // Rule 3. At least one uppercase character
  // Rule 4. At least one number
  let hasLowercaseChar = false
  let hasUppercaseChar = false
  let hasNumber = false

  for(let i = 0; i < password.length; i++){
    let char = password[i]
    if(char >= 'a' && char <= 'z') {
      hasLowercaseChar = true
    }
    if(char >= 'A' && char <= 'Z') {
      hasUppercaseChar = true
    }
    if(char >= '0' && char <= '9') {
      hasNumber = true
    }
  }

  if(hasLowercaseChar) {
    document.getElementById('rule-2-result').src = 'assets/correct.gif'
    score++
  } else {
    document.getElementById('rule-2-result').src = 'assets/incorrect.gif'
  }
  
  if(hasUppercaseChar) {
    document.getElementById('rule-3-result').src = 'assets/correct.gif'
    score++
  } else {
    document.getElementById('rule-3-result').src = 'assets/incorrect.gif'
  }

  if(hasNumber) {
    document.getElementById('rule-4-result').src = 'assets/correct.gif'
    score++
  } else {
    document.getElementById('rule-4-result').src = 'assets/incorrect.gif'
  }

  // Rule 5: At least one special character (!, @, #)
  if(password.includes('!') || password.includes('@') || password.includes('#')) {
    document.getElementById('rule-5-result').src = 'assets/correct.gif'
    score++
  } else {
    document.getElementById('rule-5-result').src = 'assets/incorrect.gif'
  }

  // Rule 6: Should not contain the following: 'test', 'password'
  if(!password.toLowerCase().includes('test') && !password.toLowerCase().includes('password')) {
    document.getElementById('rule-6-result').src = 'assets/correct.gif'
    score++
  } else {
    document.getElementById('rule-6-result').src = 'assets/incorrect.gif'
  }

  if(score == 6) {
    document.getElementById('score-display').innerHTML = 'Your password is <span class="badge text-bg-success">STRONG</span>'
  } else if ( score >= 4 && score <= 5) {
    document.getElementById('score-display').innerHTML = 'Your password is <span class="badge text-bg-warning">MODERATE</span>'
  } else {
    document.getElementById('score-display').innerHTML = 'Your password is <span class="badge text-bg-danger">WEAK</span>'
  }
}
