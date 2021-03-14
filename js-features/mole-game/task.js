const deadMole = document.getElementById('dead');
const lostMole = document.getElementById('lost');

getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);

    hole.onclick = () => {
        if (hole.classList.contains('hole_has-mole')) {
            deadMole.textContent++;
        } else {
            lostMole.textContent++;
        };

        if (deadMole.textContent >=10) {
            alert("Вы выиграли!")
            deadMole.textContent = 0;
            lostMole.textContent = 0;
        } else if (lostMole.textContent >=5) {
            alert("Вы проиграли!")
            deadMole.textContent = 0;
            lostMole.textContent = 0;
        };
    };
};