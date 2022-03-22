import style from "styled-components";
import Planet01 from '../assets/planet-01.svg';
import Planet02 from '../assets/planet-02.svg'
import Planet03 from '../assets/planet-03.svg'
import Planet04 from '../assets/planet-04.svg'
import Planet05 from '../assets/planet-05.svg'
import Planet06 from '../assets/planet-06.svg'
import Planet07 from '../assets/planet-07.svg'
import Planet08 from '../assets/planet-08.svg'
import Planet09 from '../assets/planet-09.svg'
import Planet10 from '../assets/planet-10.svg'
import Planet11 from '../assets/planet-11.svg'
import Planet12 from '../assets/planet-12.svg'
import Planet13 from '../assets/planet-13.svg'
import Planet14 from '../assets/planet-14.svg'
import Planet15 from '../assets/planet-15.svg'


const CardPlanetContent = style.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-left: 1rem;
margin-bottom: 1.5rem;

`

function CardPlanet(){
    return (
<>
<CardPlanetContent>
<img src={Planet01}  alt="Planeta"/>
<h2>Marte</h2>
</CardPlanetContent>
<CardPlanetContent>
<img src={Planet02} alt="Planeta" />
<h2>Mercúrio</h2>
</CardPlanetContent>

<CardPlanetContent>
<img src={Planet03} alt="Planeta" />
<h2>Vênus</h2>
</CardPlanetContent>

<CardPlanetContent>
<img src={Planet04} alt="Planeta" />
<h2>Jupter</h2>
</CardPlanetContent>

<CardPlanetContent>
<img src={Planet05} alt="Planeta" />
<h2>Urano</h2>
</CardPlanetContent>

<CardPlanetContent>
<img src={Planet06} alt="Planeta" />
<h2>Saturno</h2>
</CardPlanetContent>

<CardPlanetContent>
<img src={Planet07} alt="Planeta" />
<h2>Lua</h2>
</CardPlanetContent>

<CardPlanetContent>
<img src={Planet08} alt="Planeta" />
<h2>Plutão</h2>
</CardPlanetContent>

<CardPlanetContent>
<img src={Planet09} alt="Planeta" />
<h2>Éris</h2>
</CardPlanetContent>

<CardPlanetContent>
<img src={Planet10} alt="Planeta" />
<h2>Ceres</h2>
</CardPlanetContent>

<CardPlanetContent>
<img src={Planet11} alt="Planeta" />
<h2>Haumea</h2>
</CardPlanetContent>

<CardPlanetContent>
<img src={Planet12} alt="Planeta" />
<h2>Makemake</h2>
</CardPlanetContent>

<CardPlanetContent>
<img src={Planet13} alt="Planeta" />
<h2>Terra</h2>
</CardPlanetContent>

<CardPlanetContent>
<img src={Planet14} alt="Planeta" />
<h2>XO-4</h2>
</CardPlanetContent>

<CardPlanetContent>
<img src={Planet15} alt="Planeta" />
<h2>HD 107146</h2>
</CardPlanetContent>
</>
    )
}

export default CardPlanet;