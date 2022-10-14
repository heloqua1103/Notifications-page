const headerBtn = document.querySelector('.header .header-btn')
const listItem = document.querySelectorAll('.list-item .item')
const quantity = document.querySelector('.header .quantity')
const dot = document.querySelectorAll('.item-noti .item-noti-dot')

var numberNoti = 0

function countNoti() {
    listItem.forEach((item) => {
        if (item.classList.contains('active')) {
            numberNoti = numberNoti + 1
        }
    })
    quantity.innerText = numberNoti
}
countNoti()


function handleMark() {
    listItem.forEach((item) => {
        item.classList.remove('active')
    })
    dot.forEach((dot) => {
        dot.remove()
    })
    quantity.remove()
}

