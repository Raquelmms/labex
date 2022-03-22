import axios from "axios";
import { URL_BASE } from "../constants/BASE_URL";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AUTH_TOKEN } from "../constants/TOKEN_AUTH";
import useFormHook from "../Hooks/useFormHook";
import universeImg from "../assets/Preview.svg";
import HeaderTextIcon from "../components/HeaderTextIcon";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  justify-content: center;
  flex-direction: column;
  

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



const Btns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
`;

const Title = styled.h1`
color:white;
text-shadow: 2px 2px 5px #000000;
`

const CtnInput = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`;


function CreateTripPage() {
  useProtectedPage();
  const navigate = useNavigate();

  const { form, onChangeForm, cleanFields } = useFormHook({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const goBack = () => {
    navigate(-1);
  };

  const createTrip = (event) => {
    event.preventDefault();
    const body = {
      ...form,
      durationInDays: Number(form.durationInDays),
    };
    axios
      .post(`${URL_BASE}/trips`, body, {
        headers: {
          auth: `${AUTH_TOKEN}`,
        },
      })
      .then((response) => {
        cleanFields();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const todayDate = new Date().toISOString().slice(0, 10);

  return (
    <BodyContent style={{ backgroundImage: `url(${universeImg})` }}>
      <HeaderTextIcon />

      <Container>
      <Title>Crie uma viagem!</Title>
      <Content>
       
        <form onSubmit={createTrip}>
          <CtnInput>
          <TextField
            placeholder="Nome"
            value={form.name}
            onChange={onChangeForm}
            pattern={"^.{5,}"}
            // inputProps={{ pattern: "^.{5,}" }}
            title={"O nome deve ter no mínimo 5 caracteres"}
            required
            name={"name"}
          />
          </CtnInput>
          <CtnInput>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Planeta
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={form.planet}
              onChange={onChangeForm}
              label="Planeta"
              required
              name={"planet"}
            >
              <MenuItem value={"Marte"}>Marte</MenuItem>
              <MenuItem value={"Mercúrio"}>Mercúrio</MenuItem>
              <MenuItem value={"Vênus"}>Vênus</MenuItem>
              <MenuItem value={"Jupter"}>Jupter</MenuItem>
              <MenuItem value={"Urano"}>Urano</MenuItem>
              <MenuItem value={"Saturno"}>Saturno</MenuItem>
              <MenuItem value={"Lua"}>Lua</MenuItem>
              <MenuItem value={"Plutão"}>Plutão</MenuItem>
              <MenuItem value={"Plutão"}>Netuno</MenuItem>
              {/* <MenuItem value={"Éris"}>Éris</MenuItem>
          <MenuItem value={"Ceres"}>Ceres</MenuItem>
          <MenuItem value={"Haumea"}>Haumea</MenuItem>
          <MenuItem value={"Makemake"}>Makemake</MenuItem> */}
              <MenuItem value={"Terra"}>Terra</MenuItem>
              {/* <MenuItem value={"XO-4"}>XO-4</MenuItem>
          <MenuItem value={"HD 107146"}>HD 107146</MenuItem> */}
            </Select>
          </FormControl>
          </CtnInput>
          <CtnInput>
          <TextField
            placeholder="Data"
            value={form.date}
            onChange={onChangeForm}
            type="date"
            required
            name={"date"}
            min={todayDate}
          />
          </CtnInput>
          <CtnInput>
          <TextField
            placeholder="Descrição"
            value={form.description}
            onChange={onChangeForm}
            required
            pattern={"^.{30,}"}
            title={"O texto deve ter no mínimo 30 caracteres"}
            name={"description"}
          />
          </CtnInput>
          <CtnInput>
          <TextField
            placeholder="Duração em dias"
            value={form.durationInDays}
            onChange={onChangeForm}
            required
            type={"number"}
            min={50}
            title={"O número de dias deve ser no mínimo 50"}
            name={"durationInDays"}
          />
           </CtnInput>
          <Btns>
          <Button variant="contained" onClick={goBack}>Voltar</Button>
          <Button variant="contained" type={"submit"}>Criar</Button>
          </Btns>
        </form>
      </Content>
      </Container>
    </BodyContent>
  );
}

export default CreateTripPage;
