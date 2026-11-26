/*
  - Example: Order tracking app
    - Instantly: Order placed ✅
    - After 4 seconds: Order is being prepared 🥘
    - After 20 seconds: Order prepared 🎉
    - After 10 seconds: Order handed over to the delivery person 📦
    - After 6 seconds: Order is on the way 🛵
    - After 16 seconds: Order reached it's desination 📌
    - After 8 seconds: Order has been delivered. Enjoy your meal 🍽️

    Total order processing time = 4+20+10+6+16+8 = 64 seconds
*/

let orderNo = 0

const placeOrder = () => {
  orderNo++

  createOrderCard(orderNo)

  document.getElementById(`order-status-img-${orderNo}`).src = 'assets/order-confirmed.gif'
  document.getElementById(`order-status-txt-${orderNo}`).innerText = 'Order placed'
  
  orderBeingPrepared(orderNo)
    .then((orderNo) => orderPrepared(orderNo))
    .then((orderNo) => orderHandedOver(orderNo))
    .then((orderNo) => orderOnTheWay(orderNo))
    .then((orderNo) => orderReachedDestination(orderNo))
    .then((orderNo) => orderDelivered(orderNo))
    .then((orderNo) => console.log(`TRACKING FOR ORDER ID: 20260011000${orderNo} ENDED!`))
    .catch(() => console.log('SOMETHING WENT WRONG!'))
}

const orderBeingPrepared = (orderNo) => new Promise((resolve, reject) => {
  setTimeout(() => {
    document.getElementById(`order-status-img-${orderNo}`).src = 'assets/order-being-prepared.gif'
    document.getElementById(`order-status-txt-${orderNo}`).innerText = 'Order is being prepared'
    resolve(orderNo)
  }, 4000)
})

const orderPrepared = (orderNo) => new Promise((resolve, reject) => {
  setTimeout(() => {
    document.getElementById(`order-status-img-${orderNo}`).src = 'assets/order-prepared.gif'
    document.getElementById(`order-status-txt-${orderNo}`).innerText = 'Order prepared'
    resolve(orderNo)
  }, 20000)
})

const orderHandedOver = (orderNo) => new Promise((resolve, reject) => {
  setTimeout(() => {
    document.getElementById(`order-status-img-${orderNo}`).src = 'assets/order-handed-over.gif'
    document.getElementById(`order-status-txt-${orderNo}`).innerText = 'Order handed over to the delivery person'
    resolve(orderNo)
  }, 10000)
})

const orderOnTheWay = (orderNo) => new Promise((resolve, reject) => {
  setTimeout(() => {
    document.getElementById(`order-status-img-${orderNo}`).src = 'assets/order-on-the-way.gif'
    document.getElementById(`order-status-txt-${orderNo}`).innerText = 'Order is on the way'
    resolve(orderNo)
  }, 6000)
})

const orderReachedDestination = (orderNo) => new Promise((resolve, reject) => {
  setTimeout(() => {
    document.getElementById(`order-status-img-${orderNo}`).src = 'assets/order-reached-destination.gif'
    document.getElementById(`order-status-txt-${orderNo}`).innerText = `Order reached it's desination`
    resolve(orderNo)
  }, 16000)
})

const orderDelivered = (orderNo) => new Promise((resolve, reject) => {
  setTimeout(() => {
    document.getElementById(`order-status-img-${orderNo}`).src = 'assets/order-delivered.gif'
    document.getElementById(`order-status-txt-${orderNo}`).innerText = 'Order has been delivered'
    resolve(orderNo)
  }, 8000)
})


/*
  <div class="col-md-4 col-sm-6 mb-4">
    <div class="card text-center order-card">
      <span class="badge text-bg-light order-id">
        Order ID: 202600110001
      </span>
      <div class="card-body">
        <img id="order-status-img" width="80">
        <h5 class="card-title" id="order-status-txt"></h5>
        <button class="btn btn-sm btn-danger mt-4">Cancel order</button>
      </div>
      <span class="badge text-bg-light order-time">
        Order time: 26/11/2026, 23:50:35
      </span>
    </div>
  </div>
*/


function createOrderCard(orderNo) {
  const orderList = document.getElementById('order-list')

  const colDiv = document.createElement('div')
  colDiv.classList.add('col-md-4', 'col-sm-6', 'mb-4')

  const cardDiv = document.createElement('div')
  cardDiv.classList.add('card', 'text-center', 'order-card')

  const orderIdSpan = document.createElement('span')
  orderIdSpan.classList.add('badge', 'text-bg-light', 'order-id')
  orderIdSpan.innerText = `Order ID: 20260011000${orderNo}`

  const cardBodyDiv = document.createElement('div')
  cardBodyDiv.classList.add('card-body')

  const orderStatusImg = document.createElement('img')
  orderStatusImg.id = `order-status-img-${orderNo}`
  orderStatusImg.width = 80

  const orderStatusTxt = document.createElement('h5')
  orderStatusTxt.classList.add('card-title')
  orderStatusTxt.id = `order-status-txt-${orderNo}`

  const cancelOrderBtn = document.createElement('h5')
  cancelOrderBtn.classList.add('btn', 'btn-sm', 'btn-danger', 'mt-4')
  cancelOrderBtn.innerText = 'Cancel order'

  cardBodyDiv.append(orderStatusImg, orderStatusTxt, cancelOrderBtn)

  const orderTimeSpan = document.createElement('span')
  orderTimeSpan.classList.add('badge', 'text-bg-light', 'order-time')
  let now = new Date().toLocaleString()
  orderTimeSpan.innerText = `Order time: ${now}`

  cardDiv.append(orderIdSpan, cardBodyDiv, orderTimeSpan)

  colDiv.append(cardDiv)

  orderList.append(colDiv)
}