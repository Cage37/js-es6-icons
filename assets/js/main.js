const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];


// Milestone 1:
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

// Milestone 2 Coloriamo le icone per tipo

icons.forEach((icon) => {
    document.getElementById("mainsection").insertAdjacentHTML("beforeend", 
    `<div class="divicon">
        <i class="${icon.family} ${icon.prefix}${icon.name} ${icon.type}"></i>
        <p class="pmain">${icon.name}</p>
    </div>`)
});


// Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icon

let select = document.getElementById("select");

select.addEventListener("change", function() {
        
        let selectEl = select.value;
        
        if (selectEl === "all") {
            
            document.getElementById("mainsection").innerHTML = "";
            
            icons.forEach((icon) => {
                document.getElementById("mainsection").insertAdjacentHTML("beforeend", 
                `<div class="divicon">
                    <i class="${icon.family} ${icon.prefix}${icon.name} ${icon.type}"></i>
                    <p class="pmain">${icon.name}</p>
                </div>`)
            });

            return;
        } 
        
        const selectedIcon = icons.filter((icon) => {
            if (icon.type === selectEl) {
                return true;
            } 
                return false;
        });

        document.getElementById("mainsection").innerHTML = "";

        selectedIcon.forEach((icon) => {
            document.getElementById("mainsection").insertAdjacentHTML("beforeend", 
            `<div class="divicon">
                <i class="${icon.family} ${icon.prefix}${icon.name} ${icon.type}"></i>
                <p class="pmain">${icon.name}</p>
            </div>`)
        });
        
});

