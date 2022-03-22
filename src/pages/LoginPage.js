import { useNavigate } from "react-router-dom";
import axios from "axios";
import { URL_BASE } from "../constants/BASE_URL";
import HeaderTextIcon from "../components/HeaderTextIcon";
import styled from "styled-components";
import useFormHook from "../Hooks/useFormHook";
import universeImg from "../assets/Preview.svg";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Container = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 10px;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  
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
`;
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
  color: white;
  display: grid;
  grid-template-rows: 150px 1fr;
  flex-grow: 1;
  height: 100%;
`;

const ContentInputs = styled.div`
  margin-bottom: 1rem;
`;
const ContentBtns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
`;
function LoginPage() {
  const { form, onChangeForm } = useFormHook({ email: "", password: "" });

  const onSubmitLogin = (event) => {
    event.preventDefault();

    axios
      .post(`${URL_BASE}/login`, form)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        navigate("/admin/trips/list");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <BodyContent style={{ backgroundImage: `url(${universeImg})` }}>
      <HeaderTextIcon />

      <Container>
        <h1>LoginPage</h1>
        <Content>
          <form onSubmit={onSubmitLogin}>
            <ContentInputs>
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                name="email"
                type="email"
                value={form.email}
                onChange={onChangeForm}
                required
              />
            </ContentInputs>
            <ContentInputs>
              <TextField
                id="standard-basic"
                label="Senha"
                variant="standard"
                name="password"
                type="password"
                value={form.password}
                onChange={onChangeForm}
                required
                inputProps={{ pattern: "^.{3,}" }}
                title={"Sua senha deve ter no mínimo 3 caracteres"}
              />
            </ContentInputs>

            <ContentBtns>
              <Button variant="contained" onClick={goBack}>
                Voltar
              </Button>
              <Button variant="contained" type={"submit"}>
                Fazer Login
              </Button>
            </ContentBtns>
          </form>
        </Content>
      </Container>
    </BodyContent>
  );
}

export default LoginPage;
