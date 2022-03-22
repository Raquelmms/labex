import axios from "axios";
import { useEffect, useState } from "react";
import { URL_BASE } from "../constants/BASE_URL";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AUTH_TOKEN } from "../constants/TOKEN_AUTH";
import CardHomeTrips from "../components/CardTrips";
import HeaderTextIcon from "../components/HeaderTextIcon";
import styled from "styled-components";
import Button from "@mui/material/Button";
import universeImg from "../assets/Preview.svg";
import CardCandidates from "../components/CardCandidates";
import CardListApproved from "../components/CardListApproved";

const BodyContent = styled.div`
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  overflow: auto;

  min-height: 100vh;
  top: 0;
  margin: 0;
  padding: 0;
  left: 0;
  display: grid;
  grid-template-rows: 150px 1fr;
  flex-grow: 1;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 10px;
  flex-direction: column;
  width: 100vw;
  align-items: center;
`;
const Title = styled.h1`
  color: white;
  text-shadow: 2px 2px 5px #000000;
`;
const SubTitle = styled.h3`
  color: white;
  text-shadow: 2px 2px 5px #000000;
`;

function TripDetailsPage() {
  const [trips, setTrip] = useState([]);
  const [candidate, setCandidates] = useState([]);
  const [aprove, setAprove] = useState([]);
  useProtectedPage();
  const pathParams = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getTripDetail();
  }, []); 

  const getTripDetail = () => {
    axios
      .get(`${URL_BASE}/trip/${pathParams.id}`, {
        headers: {
          auth: `${AUTH_TOKEN}`,
        },
      })
      .then((response) => {
        setTrip(response.data.trip);
        setCandidates(response.data.trip.candidates);
        setAprove(response.data.trip.approved);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const decideCandidate = (candidateId, choice) => {
    const body = {
      approve: choice,
    };

    axios
      .put(
        `${URL_BASE}/trips/${pathParams.id}/candidates/${candidateId}/decide`,
        body,
        {
          headers: {
            auth: `${AUTH_TOKEN}`,
          },
        }
      )
      .then((response) => {
        getTripDetail();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const goBack = () => {
    navigate(-1);
  };

  const candidatesList = candidate.map((candidate) => {
    return (
      <CardCandidates
        key={candidate.id}
        name={candidate.name}
        age={candidate.age}
        applicationText={candidate.applicationText}
        country={candidate.country.label}
        profession={candidate.profession}
        decideCandidateApprove={() => decideCandidate(candidate.id, true)}
        decideCandidateReject={() => decideCandidate(candidate.id, false)}
      />
    );
  });

  const aprovedList = aprove.map((candidate) => {
    return (
      <CardListApproved name={candidate.name}/>
    );
  });

  return (
    <BodyContent style={{ backgroundImage: `url(${universeImg})` }}>
      <HeaderTextIcon />

      <Container>
        <Button variant="contained" onClick={goBack}>
          Voltar
        </Button>
        <Title>{trips.name}</Title>
        <CardHomeTrips
          name={trips.name}
          description={trips.description}
          planet={trips.planet}
          period={trips.durationInDays}
          date={trips.date}
        />

        <Title>Candidatos </Title>
        {candidate.length !== 0 ? (
          <Container>{candidatesList}</Container>
        ) : (
          <SubTitle>Não há candidatos 😞 </SubTitle>
        )}

        <Title>Aprovados 🎉</Title>
        {aprove.length !== 0 ? (
          <div>{aprovedList}</div>
        ) : (
          <SubTitle>Não há candidatos aprovados</SubTitle>
        )}
      </Container>
    </BodyContent>
  );
}

export default TripDetailsPage;
