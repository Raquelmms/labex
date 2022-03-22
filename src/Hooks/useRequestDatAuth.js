import { useEffect, useState } from "react";
import axios from "axios";
import { AUTH_TOKEN } from "../constants/TOKEN_AUTH"

export function useRequestDataAuth(url) {
  const [data, setData] = useState(undefined);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getTrips(url);
    },[url]);

  
  const getTrips = (url) => {
    setLoading(true);
    axios
      .get(url , {
        headers: {
          auth: `${AUTH_TOKEN}`,
        }
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };



 

  return [data, isLoading, error, getTrips];
};
