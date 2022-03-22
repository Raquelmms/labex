import { useNavigate } from "react-router-dom";
import { useRequestData } from "../Hooks/useRequestData";
import { URL_BASE } from "../constants/BASE_URL";
import { useState, useMemo } from "react";
import useFormHook from "../Hooks/useFormHook";
import axios from "axios";
import styled from "styled-components";
import universeImg from "../assets/Preview.svg";
import HeaderTextIcon from "../components/HeaderTextIcon";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import SelectMui from "@mui/material/Select";
import Button from "@mui/material/Button";
import Select from "react-select";
import countryList from "react-select-country-list";

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
  color: white;
  display: grid;
  grid-template-rows: 150px 1fr;
  flex-grow: 1;
  height: 100%;
`;

const Content = styled.div`
  width: 30%;
  background-color: white;
  border-radius: 1rem;
  padding: 2rem 0;
  display: flex;
  justify-content: center;

  box-shadow: rgba(240, 46, 170, 0.4) -5px 5px,
    rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px;
  padding: 2rem;

  color: black;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 10px;
  flex-direction: column;
  width: 100vw;
  align-items: center;
`;

const CtnInput = styled.div`
  margin-bottom: 1rem;
`;

const Btns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
`;
function ApplicationFormPage() {
  const [id, setId] = useState("");
  const [value, setValue] = useState("");

  const [trips, isLoadingTrips, errorTrips] = useRequestData(
    `${URL_BASE}/trips`
  );

  //Função dos seletores de countries
  const CountrySelector = () => {
    const options = useMemo(() => countryList().getData(), []);
    const changeHandler = (value) => {
      setValue(value);
    };

    return (
      <Select
        options={options}
        value={value}
        onChange={changeHandler}
        required
      />
    );
  };

  const { form, onChangeForm, cleanFields } = useFormHook({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const applyToTrip = (event) => {
    event.preventDefault();
    const body = {
      ...form,
      age: Number(form.age),
      country: value,
    };
    axios
      .post(`${URL_BASE}/trips/${id}/apply`, body)
      .then((res) => {
        setValue("");
        cleanFields();
        alert(
          "Você conseguiu se inscrever na viagem selecionada, em breve entraremos em contato!"
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChangeId = (event) => {
    setId(event.target.value);
  };

  const tripList =
    trips &&
    trips.trips.map((travel) => {
      return <MenuItem key={travel.id} value={travel.id}>{travel.name}</MenuItem>;
    });

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <BodyContent style={{ backgroundImage: `url(${universeImg})` }}>
      <HeaderTextIcon />
      <Container>
        <h1>Inscreva-se para uma viagem</h1>
        <Content>
          <form onSubmit={applyToTrip}>
            <CtnInput>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Escolha uma viagem
                </InputLabel>
                <SelectMui
                  label="Escolha uma viagem"
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={id}
                  onChange={onChangeId}
                  required
                >
                  {!isLoadingTrips && trips && tripList}

                  {isLoadingTrips && (
                    <div className="ui active dimmer">
                      <div className="ui text loader">Carregando...</div>
                    </div>
                  )}
                  {!isLoadingTrips && errorTrips && (
                    <p>Ocorreu um erro na requisição</p>
                  )}

                  {!isLoadingTrips && trips && trips.length === 0 && (
                    <p>Não há nenhuma viagem</p>
                  )}
                </SelectMui>
              </FormControl>
            </CtnInput>
            <CtnInput>
              <TextField
                id="standard-basic"
                label="Nome"
                variant="standard"
                onChange={onChangeForm}
                name={"name"}
                value={form.name}
                required
                inputProps={{ pattern: "^.{3,}" }}
                title={"O nome deve ter no mínimo 3 caracteres"}
              />
            </CtnInput>
            <CtnInput>
              <TextField
                id="standard-basic"
                label="Idade"
                variant="standard"
                onChange={onChangeForm}
                name={"age"}
                value={form.age}
                required
                type={"number"}
                min={18}
              />
            </CtnInput>
            <CtnInput>
              <TextField
                id="standard-basic"
                label="Texto de Candidatura"
                variant="standard"
                onChange={onChangeForm}
                name={"applicationText"}
                value={form.applicationText}
                required
                inputProps={{ pattern: "^.{30,}" }}
                title={"O texto deve ter no mínimo 30 caracteres"}
              />
            </CtnInput>
            <CtnInput>
              <TextField
                id="standard-basic"
                label="Profissão"
                variant="standard"
                onChange={onChangeForm}
                name={"profession"}
                value={form.profession}
                required
                inputProps={{ pattern: "^.{10,}" }}
                title={"A profissão deve ter no mínimo 10 caracteres"}
              />
            </CtnInput>
            <CtnInput>{CountrySelector()}</CtnInput>
            <Btns>
              <Button variant="contained" onClick={goBack}>
                Voltar
              </Button>
              <Button variant="contained" type={"submit"}>
                Enviar
              </Button>
            </Btns>
          </form>
        </Content>
      </Container>
    </BodyContent>
  );
}

export default ApplicationFormPage;
