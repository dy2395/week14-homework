// upon clicking the choose button, we would randomly generate a hero.
const pickJLHero = async() => {
	const response = await fetch("dashboard/newpost/justiceLeague", {
		method: "get",
        body: JSON.stringify({
            hero_name,
            image
          }),
		headers: { "Content-Type": "application/json" },
	});

	if (response.ok) {
        // var hero_name1=document.createElement('h3');
        // image1=image[1];
        // var  = document.createElement('h3');
        // var hero_name1=document.createElement('h3');
        // hero_name1.innerHTML = "";


		document.getElementById("JLHero").appendChild("image1");
        document.getElementById("JLHero").appendChild("hero_name1");
	} else {
		alert("Failed to get a hero.");
	}
}

const pickAVHero = async( ) => {
	const response = await fetch("dashboard/newpost/Avengers", {
		method: "get",
        body: JSON.stringify({
            hero_name,
            image
          }),
		headers: { "Content-Type": "application/json" },
	});

	if (response.ok) {
        hero_name2=hero_name[1];
        image2=image[1];
		document.getElementById("AVHero").appendChild("image2");
        document.getElementById("AVHero").appendChild("hero_name2");
	} else {
		alert("Failed to get a hero.");
	}
}

document.querySelector("#JLPickButton").addEventListener("click", pickJLHero);
document.querySelector("#AvengerPickButton").addEventListener("click", pickAVHero);
