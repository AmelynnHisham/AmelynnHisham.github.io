function LoadUser() {
    let url = "https://randomuser.me/api/"

    fetch(url)
    .then((response) => response.json())
    .then(data => {
        let fn = document.getElementById("firstName")
        let ln = document.getElementById("lastName")
        let phone = document.getElementById("phone")
        let img = document.getElementById("userImg")

        fn.innerHTML = data.results[0].name.first
        ln.innerHTML = data.results[0].name.last
        phone.innerHTML = data.results[0].phone
        img.src = data.results[0].picture.large
    })
}

let elLoadUser = document.getElementById("getRandomUser")
elLoadUser.addEventListener("click", function() {
    LoadUser()
})





let elLoadMultipleUsers = document.getElementById("getMultipleUser")
elLoadMultipleUsers.addEventListener("click", function() {
    let userCount = document.getElementById("userCount")
    LoadMultipleUsers(userCount.value)
})

function LoadMultipleUsers(userCount) {
    let url = "https://randomuser.me/api/?results=" + userCount
    let temp = ""

    fetch(url)
    .then((response) => response.json())
    .then(data => {
        let allUsers = document.getElementById("allUsers")
        for(let i=0; i < data.results.length; i++) {
            let fn = '<div' + data.results[i].name.first + '</div>'
            let ln = '<div>' + data.results[i].name.last + '</div>'
            let phone = '<div>' + data.results[i].phone + '</div>'
            let img = '<img src="' + data.results[i].picture.large + '">'
            
            temp = temp + fn + ln + phone + img
        }

        allUsers.innerHTML = temp
    })
}





let elLoadGender = document.getElementById("getGenderUser")
elLoadGender.addEventListener("click", function() {
    console.log("Load Gender clicked!")

    // get the gender
    let gender = document.getElementById('userGender')
    console.log("Selected Gender: " + gender.value)

    // get the number of result
    let userGenderCount = document.getElementById("userGenderCount")

    // call loadGender() and pass gender and number of result
    LoadGender(gender.value, userGenderCount.value)
})

function LoadGender(gender, userCount) {
    let url = "https://randomuser.me/api/?results=" + userCount + "&gender=" + gender

    // call fetch, loop results and change the innerHTML for all GenderUsers
    let temp = ""

    fetch(url)
    .then((response) => response.json())
    .then(data => {
        let allGenderUsers = document.getElementById("allGenderUsers")
        for(let i=0; i < data.results.length; i++) {
            let fn = '<div' + data.results[i].name.first + '</div>'
            let ln = '<div>' + data.results[i].name.last + '</div>'
            let phone = '<div>' + data.results[i].phone + '</div>'
            let img = '<img src="' + data.results[i].picture.large + '">'
            
            temp = temp + fn + ln + phone + img
        }

        allGenderUsers.innerHTML = temp
    })

}