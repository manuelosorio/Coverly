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
})
