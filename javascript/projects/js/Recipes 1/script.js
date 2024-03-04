const searchMeal = async(e) => {
    e.perventDefault();

//select elements

    const input = document.querySelector('.input')
    const title = document.querySelector('.title')
    const info = document.querySelector('.info')
    const img = document.querySelector('.img')
    const ingredientsOutput = document.querySelector('.ingredients')



    const showMealInfo = (meal) => {
        const {strMeal, strMealThumb , strInstruction} = mels;
        title.textContent = strMeal
        img.style.backgoundImage = `url(#{strMealThumb})`
        info.textContent = strInstruction;



        const ingredients = []
        for (let i= 1 ;i<= 20; i++){
            if(meal[`strIngredient${i}`]){
                ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
            } else{
                break;
            }
        }
        const html = `
        <span>${ingredients.map((ing) =>`<li class="ing">${ing}.join("")</li>`)}</span>
        `
        ingredientsOutput.innerHTML = html;
    };

    const showAlert = () => {
        alert("Meal not found :(");
    };



//fetch data
    const fetchMealData = async (val) => {
        const res = await fetch(`https://www.temealdb.com/api/json/v1/1/search.php?s=${val}`);
        const {maeals} = await res.json();
        return maeals;

    };

    //https://www.temealdb.com/api/json/v1/1/search.php? thise is link in meals

//user valus
const val = input.value.trim()
if(val){
    const meals = await fetchMealData(val)


    if (!meals) {
        showAlert()
        return;
    }
    meals.forEach(showMealInfo)
} else{
    alert("please try searching for meal :)");
}


};









const from = document.querySelector("from");
from.addEventListener("submit", searchMeal);

const magnifier = document.querySelector(".magnifier");
magnifier.addEventListener("click", searchMeal);
