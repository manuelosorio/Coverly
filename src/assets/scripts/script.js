window.addEventListener("load", () => {
  let hamburgerMenu = document.querySelector('.nav--hamburger'),
      navList = document.querySelector('.nav--list'),
      userGroup = document.querySelector('.user--group')
      userProfile = document.querySelector('.user--profile'),
      userArrow = document.querySelector('.user--arrow'),
      userAvatar= document.querySelector('.user--avatar')
  hamburgerMenu.addEventListener("click", (e) => {
    hamburgerMenu.classList.toggle('is-active')
    navList.classList.toggle('is-open')
  })
  userArrow.addEventListener("click", () => {
    profileSettings()
  })
  userAvatar.addEventListener("click", () => {
    profileSettings()
  })
  function profileSettings() {
    userGroup.classList.toggle('is-clicked')
    if (userGroup.classList.contains('is-clicked')) {
      userProfile.innerHTML = '<a href="#">Profile<br/>Settings</a>'
      userArrow.classList.remove('mo-arrow-right')
      userArrow.classList.add('mo-arrow-left')
    } else {
      userArrow.classList.remove('mo-arrow-left')
      userArrow.classList.add('mo-arrow-right')
      userProfile.innerHTML = ''
    }
  }
  let cartStorage = JSON.parse( localStorage.getItem("cart")) || [],
      addCartButton = document.querySelectorAll('.button--cart_add'),
      i,
      getCartStorage = JSON.parse(localStorage.getItem("cart")),
      cart = document.querySelector('.cart')
      cartAmount =  document.querySelector('.cart--amount')

  for (i = 0; i < addCartButton.length; i++){
    addCartButton[i].addEventListener("click", (e) => {
      console.log(e.target.dataset.productId)
      cartStorage.push(e.target.dataset.productId)
      localStorage.setItem('cart', JSON.stringify(cartStorage))
      updateCart()
    })
  }
  initCart()
  function updateCart () {
    try {
      if (!cart.classList.contains('.has-items'))
        cart.classList.add('has-items')
      if (JSON.parse(localStorage.getItem("cart")).length > 9)
        cartAmount.innerHTML = '9+'
      else
        cartAmount.innerHTML = JSON.parse(localStorage.getItem("cart")).length
    } catch (error) {
    }
  }
  function initCart() {
    try {
      if (getCartStorage.length > 9) {
        cartAmount.innerHTML = '9+'
        console.log("There are are over 9 products products in your cart")
        if (!cart.classList.contains('.has-items')) {
          cart.classList.add('has-items')
        }
      } else if (getCartStorage.length > 0) {
        console.log("There are " + getCartStorage.length + " products in your cart")
        cartAmount.innerHTML = getCartStorage.length
        if (!cart.classList.contains('.has-items')) {
          cart.classList.add('has-items')
        }
      }
    } catch(error) {
      if (error)
      console.log(error)
    }
  }
})
