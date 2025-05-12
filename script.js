        // Podrazumevani JSON podaci za jela
        
        // Funkcija za učitavanje JSON podataka iz localStorage ili korišćenje podrazumevanih
        function loadMeals() {
            let meals = {
                breakfast: JSON.parse(localStorage.getItem('breakfast')) || defaultMeals.breakfast,
                lunch: JSON.parse(localStorage.getItem('lunch')) || defaultMeals.lunch,
                dinner: JSON.parse(localStorage.getItem('dinner')) || defaultMeals.dinner
            };
            return meals;
        }
        
        // Funkcija za generisanje slučajnog menija
        function generateMenu() {
            const meals = loadMeals();
            document.getElementById('loading').style.display = 'block';
            document.getElementById('menu-container').style.display = 'none';
            
            setTimeout(() => {
                // Prikazujemo datum
                const today = new Date();
                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                document.getElementById('current-date').textContent = today.toLocaleDateString('sr-RS', options);
                
                // Generišemo doručak - slučajno biramo 2 jela
                displayMeals('breakfast-items', getRandomItems(meals.breakfast, 2));
                
                // Generišemo ručak - slučajno biramo 1 jelo
                displayMeals('lunch-items', getRandomItems(meals.lunch, 1));
                
                // Generišemo večeru - slučajno biramo 1-2 jela
                displayMeals('dinner-items', getRandomItems(meals.dinner, Math.random() > 0.5 ? 2 : 1));
                
                document.getElementById('loading').style.display = 'none';
                document.getElementById('menu-container').style.display = 'block';
            }, 800); // Simuliramo učitavanje
        }
        
        // Funkcija za slučajno biranje elemenata iz niza
        function getRandomItems(array, count) {
            const shuffled = [...array].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, count);
        }
        
        // Funkcija za prikazivanje jela u HTML-u
        function displayMeals(containerId, meals) {
            const container = document.getElementById(containerId);
            container.innerHTML = '';
            
            meals.forEach(meal => {
                const mealElement = document.createElement('div');
                mealElement.className = 'meal-item';
                mealElement.innerHTML = `
                    <h3>${meal.name}</h3>
                    <div class="ingredients">Sastojci: ${meal.ingredients}</div>
                `;
                container.appendChild(mealElement);
            });
        }
        
        // Funkcija za otvaranje taba u podešavanjima
        function openTab(evt, tabName) {
            const tabcontent = document.getElementsByClassName("tabcontent");
            for (let i = 0; i < tabcontent.length; i++) {
                tabcontent[i].classList.remove("active");
            }
            
            const tablinks = document.getElementsByClassName("tablinks");
            for (let i = 0; i < tablinks.length; i++) {
                tablinks[i].classList.remove("active");
            }
            
            document.getElementById(tabName).classList.add("active");
            evt.currentTarget.classList.add("active");
        }
        
        // Funkcija za čuvanje podešavanja
        function saveSettings(mealType) {
            try {
                const jsonText = document.getElementById(`${mealType}-json`).value;
                const jsonData = JSON.parse(jsonText);
                localStorage.setItem(mealType, jsonText);
                alert(`Podešavanja za ${getMealTypeName(mealType)} su uspešno sačuvana!`);
                generateMenu(); // Regenerišemo meni sa novim podacima
            } catch (e) {
                alert('Greška u JSON formatu! Proverite unos.');
            }
        }
        
        // Pomoćna funkcija za dobijanje naziva obroka
        function getMealTypeName(mealType) {
            switch(mealType) {
                case 'breakfast': return 'doručak';
                case 'lunch': return 'ručak';
                case 'dinner': return 'večera';
                default: return mealType;
            }
        }
        
        // Inicijalizacija nakon učitavanja stranice
        document.addEventListener('DOMContentLoaded', () => {
            // Učitavamo početni meni
            generateMenu();
            
            // Dodajemo event listenere
            document.getElementById('generate-btn').addEventListener('click', generateMenu);
            
            // Modal za podešavanja
            const modal = document.getElementById('settings-modal');
            const settingsIcon = document.getElementById('settings-icon');
            const closeBtn = document.getElementsByClassName('close')[0];
            
            settingsIcon.onclick = function() {
                // Učitavamo trenutne podatke u textarea
                const meals = loadMeals();
                document.getElementById('breakfast-json').value = JSON.stringify(meals.breakfast, null, 2);
                document.getElementById('lunch-json').value = JSON.stringify(meals.lunch, null, 2);
                document.getElementById('dinner-json').value = JSON.stringify(meals.dinner, null, 2);
                
                modal.style.display = 'block';
            }
            
            closeBtn.onclick = function() {
                modal.style.display = 'none';
            }
            
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = 'none';
                }
            }
        });