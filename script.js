const loadpost = async () =>{
const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
const data = await response.json()
displayPost(data.categories);

}
const displayPost = (posts) =>{
    const postContainer = document.getElementById('display-container');
    posts.forEach(post => {
        const div = document.createElement('div');
        div.innerHTML =`
        <div class="flex flex-col lg:flex-row border rounded-lg  p-4 md:p-3 items-center ">
                        <div class="images rounded-lg ">
                            <img src=${post.strCategoryThumb} alt="" class=" w-96 rounded-lg">
                        </div>
                        <div class="lg:ml-4 mt-7 lg:mt-0">
                            <h2 class="font-bold text-2xl text-[#010d78] mb-4">${post.strCategory}</h2>
                            <p class="mb-4">${post.strCategoryDescription.slice(0,100)}</p>
                            <a class=" btn bg-yellow-400 hover:bg-[#010d78] hover:text-white text-black  " href="">View Details </a>
                        </div>
                    </div>
        `
        postContainer.appendChild(div)
    });
}
loadpost();