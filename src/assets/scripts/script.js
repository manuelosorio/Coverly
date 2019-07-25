window.addEventListener("load", () => {
  let hamburgerMenu = document.querySelector('.nav--hamburger'),
      navList = document.querySelector('.nav--list'),
      userGroup = document.querySelector('.user--group')
      userProfile = document.querySelector('.user--profile'),
      userArrow = document.querySelector('.user--arrow'),
      userAvatar = document.querySelector('.user--avatar'),
      favorite = document.querySelector('.favorite'),
      singleProductAmount = document.querySelector('#amount'),
      singleProductAmount2 = document.querySelector('#amount2'),
      singleProductSubtract = document.querySelector('#subtract'),
      singleProductAdd = document.querySelector('#add'),
      singleProductSubtract2 = document.querySelector('#subtract2'),
      singleProductAdd2 = document.querySelector('#add2'),
      singleProductInput = document.querySelector('#input'),
      singleProductInput2 = document.querySelector('#input2'),
      singleProductButton = document.querySelector('.single-product--button')
  try {
    favorite.addEventListener("click", (e) => {
      if (favorite.classList.contains('mo-heart-outline')){
        favorite.classList.remove('mo-heart-outline')
        favorite.classList.add('mo-heart-fill')
      } else {
        favorite.classList.remove('mo-heart-fill')
        favorite.classList.add('mo-heart-outline')
      }
  })
  } catch (err) {
    console.log(err)
  }  try {
      singleProductSubtract.addEventListener('click', () => {
        if (singleProductInput.value == "" || singleProductInput.value == "0" || singleProductInput.value < "0") {
        } else if (singleProductInput.value > "0") {
          singleProductInput.value--;
        }
      })
      singleProductAdd.addEventListener('click', () => {
        if (singleProductInput.value < "99")
          singleProductInput.value++;
      })
    } catch (err) {
      console.log(err)
    }
  try {
    singleProductSubtract2.addEventListener('click', () => {
      if (singleProductInput2.value == "" || singleProductInput2.value == "0" || singleProductInput2.value < "0") {
      } else if (singleProductInput2.value > "0") {
        singleProductInput2.value--;
      }
    })
    singleProductAdd2.addEventListener('click', () => {
      if (singleProductInput2.value < "99") {
        singleProductInput2.value++;
      }
    })
  } catch (err) {
    console.log(err)
  }
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
  for (var j = 0; j < singleProductSubtract.length; ++j){
    singleProductSubtract[j].addEventListener("click", (e) => {
      console.log(singleProductInput[j])
      console.log(j)
    })
  }
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
    } catch (err) {
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
    } catch(err) {
      if (err)
      console.log(err)
    }
  }
  try {
    document.addEventListener("change", function() {
      var input = document.querySelectorAll(".form--input");
      for (var j = 0; j < input.length; j++) {
        if (input[j].value === ""){
          input[j].classList.remove('has-value');
        } else {
          input[j].classList.add('has-value');
        }
      }

      var checkbox = document.querySelector('#checkbox');
      var hideable = document.querySelectorAll(".hideable");
      if (checkbox.checked == true) {
        for (var k = 0; k < hideable.length; k++) {
          hideable[k].classList.add('hide');
        }
      } else {
        for (var l = 0; l < hideable.length; l++) {
          hideable[l].classList.remove('hide');
        }
      }
    })
  } catch (err) {

  }
})
