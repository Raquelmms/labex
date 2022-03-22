import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import { URL_BASE } from "../constants/BASE_URL";
import { AUTH_TOKEN } from "../constants/TOKEN_AUTH";
import { useRequestData } from "../Hooks/useRequestData";
import axios from "axios";
import CardTripsBtn from "../components/CardTripsBtn";
import HeaderTextIcon from "../components/HeaderTextIcon";
import styled from "styled-components";
import universeImg from "../assets/Preview.svg";
import Button from "@mui/material/Button";

const BodyContent = styled.div`

background-size: cover;
min-height: 100vh;

top:0;
margin: 0;
padding: 0;
color: white;
display:grid;
grid-template-rows: 150px 1fr;
flex-grow: 1;
height: 100%;

-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
overflow: auto;
`;

const CenterList = styled.div`
display: grid;
justify-items: center;

`

const Btns = styled.div`
display: flex;
grid-template-columns: 1fr 1fr 1fr;
column-gap: 1rem;

`

const Title = styled.h1`
color:white;
text-shadow: 2px 2px 5px #000000;
`


function AdminHomePage() {
  useProtectedPage();
  const navigate = useNavigate();

  const [trips, isLoadingTrips, errorTrips, getTrips] = useRequestData(
    `${URL_BASE}/trips`
  );

  const goToTripDetailsPage = (id) => {
    navigate(`/admin/trips/${id}`);
  };
  const tripList =
    trips &&
    trips.trips.map((travel) => {
      return (
              <CardTripsBtn
                key={travel.id}
                name={travel.name}
                description={travel.description}
                planet={travel.planet}
                period={travel.durationInDays}
                date={travel.date}
                viewMore={() => goToTripDetailsPage(travel.id)}
                toDelete={()=> deleteTrip(travel)}
              />
      )
    })

  const deleteTrip = (travel) => {
    if (
      window.confirm(`Tem certeza que deseja deletar a viagem ${travel.name}`)
    ) {
      axios
        .delete(`${URL_BASE}/trips/${travel.id}`, {
          headers: {
            auth: `${AUTH_TOKEN}`,
          },
        })
        .then((response) => {
          alert("Viagem deletada com sucesso!");
          getTrips(`${URL_BASE}/trips`);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const goBack = () => {
    navigate("/");
  };

  const goToCreateTripPage = () => {
    navigate("/admin/trips/create");
  };

  const logoutUser = () => {
    window.localStorage.clear();
    navigate("/login");
  };

  return (
    <BodyContent style={{ backgroundImage: `url(${universeImg})` }}>
      <HeaderTextIcon/>
      <CenterList>
      <Title>Painel Administrativo</Title>
      <Btns>
      <Button variant="contained" onClick={goBack}>Voltar</Button>
      <Button variant="contained" onClick={goToCreateTripPage}>Criar Viagem</Button>
      <Button variant="contained" onClick={logoutUser}>Logout</Button>

      </Btns>
   
      {isLoadingTrips && (
        <div className="ui active dimmer">
          <div className="ui text loader">Carregando...</div>
        </div>
      )}
      {!isLoadingTrips && errorTrips && <p>Ocorreu um erro na requisição</p>}
      {!isLoadingTrips && trips && tripList}
      {!isLoadingTrips && trips && trips.length === 0 && (
        <p>Não há nenhuma viagem</p>
      )}
      </CenterList>
    </BodyContent>
  );
}

export default AdminHomePage;
