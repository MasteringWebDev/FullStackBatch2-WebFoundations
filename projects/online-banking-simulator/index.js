let accountBalance = 5283.29

updateBalance()

function updateBalance() {
  document.getElementById('account-balance').innerText = `$${accountBalance.toFixed(2)}`
}

function deposit() {
  let depositType = document.getElementById('deposit-type').value
  let depositAmount = Number(document.getElementById('deposit-amount').value)
  let depositMemo = document.getElementById('deposit-memo').value

  accountBalance += depositAmount
  updateBalance()
  document.getElementById('deposit-form').reset()

  const now = new Date()

  const statementList = document.getElementById('statement-list')

  const txnTr = document.createElement('tr')

  const txnTd1 = document.createElement('td')
  txnTd1.classList.add('text-secondary', 'small')
  const txnTd1DateDiv = document.createElement('div')
  txnTd1DateDiv.classList.add('fw-semibold')
  txnTd1DateDiv.innerText = now.toLocaleDateString()
  const txnTd1TimeDiv = document.createElement('div')
  txnTd1TimeDiv.innerText = now.toLocaleTimeString()
  
  txnTd1.append(txnTd1DateDiv, txnTd1TimeDiv)

  const txnTd2 = document.createElement('td')
  const txnTd2TransferInfo = document.createElement('div')
  txnTd2TransferInfo.classList.add('fw-semibold')
  txnTd2TransferInfo.innerText = depositType
  const txnTd2TransferMemo = document.createElement('div')
  txnTd2TransferMemo.classList.add('text-muted', 'small')
  txnTd2TransferMemo.innerText = depositMemo

  txnTd2.append(txnTd2TransferInfo, txnTd2TransferMemo)

  const txnTd3 = document.createElement('td')
  txnTd3.classList.add('text-success', 'fw-semibold')
  txnTd3.innerText = `+$${depositAmount.toFixed(2)}`

  const txnTd4 = document.createElement('td')
  txnTd4.classList.add('text-secondary', 'fw-medium')
  txnTd4.innerText = `$${accountBalance.toFixed(2)}`

  txnTr.append(txnTd1, txnTd2, txnTd3, txnTd4)
  statementList.prepend(txnTr)
}

function transfer() {
  let transferType = document.getElementById('transfer-type').value
  let transferAmount = Number(document.getElementById('transfer-amount').value)
  let transferMemo = document.getElementById('transfer-memo').value
  let recipientName = document.getElementById('recipient-name').value
  let recipientEmail = document.getElementById('recipient-email').value

  accountBalance -= transferAmount
  updateBalance()
  document.getElementById('transfer-form').reset()

  const now = new Date()

  const statementList = document.getElementById('statement-list')

  const txnTr = document.createElement('tr')

  const txnTd1 = document.createElement('td')
  txnTd1.classList.add('text-secondary', 'small')
  const txnTd1DateDiv = document.createElement('div')
  txnTd1DateDiv.classList.add('fw-semibold')
  txnTd1DateDiv.innerText = now.toLocaleDateString()
  const txnTd1TimeDiv = document.createElement('div')
  txnTd1TimeDiv.innerText = now.toLocaleTimeString()
  
  txnTd1.append(txnTd1DateDiv, txnTd1TimeDiv)

  const txnTd2 = document.createElement('td')
  const txnTd2TransferInfo = document.createElement('div')
  txnTd2TransferInfo.classList.add('fw-semibold')
  txnTd2TransferInfo.innerText = `${transferType} · ${recipientName}`
  const txnTd2TransferMemo = document.createElement('div')
  txnTd2TransferMemo.classList.add('text-muted', 'small')
  txnTd2TransferMemo.innerText = transferMemo

  txnTd2.append(txnTd2TransferInfo, txnTd2TransferMemo)

  const txnTd3 = document.createElement('td')
  txnTd3.classList.add('text-danger', 'fw-semibold')
  txnTd3.innerText = `-$${transferAmount.toFixed(2)}`

  const txnTd4 = document.createElement('td')
  txnTd4.classList.add('text-secondary', 'fw-medium')
  txnTd4.innerText = `$${accountBalance.toFixed(2)}`

  txnTr.append(txnTd1, txnTd2, txnTd3, txnTd4)
  statementList.prepend(txnTr)
}