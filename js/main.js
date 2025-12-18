





let elList = document.querySelector(".List")
let elPostList = document.querySelector(".post-list")
let elCommentList = document.querySelector(".comment-list")
elList.innerHTML = `
<li class="font-bold text-[25px]">Loading...</li>
`




function renderUser(arr , list){
    list.innerHTML = null
    arr.forEach(item => {
        let elItem = document.createElement("li")
        list.appendChild(elItem)
        elItem.outerHTML = `
        <li class=" w-[400px] bg-green-400 text-white p-2 rounded-[10px] text-[20px]  "> 
        <strong>ID:${item.id}</strong>
        <h2 class=" font-bold text-[20px] mb-[10px]  ">ism: ${item.name} <br>  telefon rqami: ${item.phone}</h2>
        <p> yasash joyi: ${item.address.city}</p>
        <button onclick = "handleBtn(${item.id})" class=" py-2 px-4 bg-blue-400 text-white rounded-md m-2 cursor-pointer ">Show post</button>
        </li>
        `
    });
}



async function getUser() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    return data
}





getUser().then(res =>{
renderUser(res , elList)

})






function renderPosts (arr , list){
    list.innerHTML = null
    arr.forEach(item => {
        let elItem = document.createElement("li")
        list.appendChild(elItem)
        elItem.outerHTML = `
        <li class=" w-[400px] bg-red-500 text-white p-2 rounded-[10px] text-[20px]  "> 
        <p>userID: ${item.userId}</p>
        <p>ID: ${item.id}</p>
        <p>title: ${item.title}</p>
        <button onclick="showCommentBtn(${item.id})" class=" py-2 px-3 rounded-md text-white bg-slate-600 m-2 ">Show Comments</button>
        </li>
        `
    });
}


async function getPosts(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const data = await res.json()
    return data
}

function handleBtn(id){
    getPosts(id).then(res => {
    renderPosts(res , elPostList)
})
}
// //===================================

function renderComment (arr , list){
    list.innerHTML = null
    arr.forEach(item => {
        let elItem = document.createElement("li")
        list.appendChild(elItem)
        elItem.outerHTML = `
        <li class=" w-[400px] bg-yellow-500 text-white p-2 rounded-[10px] text-[20px]  "> 
        <p>postID: ${item.postId}</p>
        <p>ID: ${item.id}</p>
        <p> Name:${item.name}</p>
        <p> Email:${item.email}</p>
        </li>
        `
    });
}


async function getComment(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    const data = await res.json()
    return data
}

function showCommentBtn(id){
    getComment(id).then(res => {
    renderComment(res , elCommentList)
})
}











