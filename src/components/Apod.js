/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";

export default function Apod() {
  const [picUrl, setPicUrl] = useState("");

  //   useEffect(() => {
  //     fetch(
  //       "https://api.nasa.gov/planetary/apod?api_key=EoYtedjwbk4WhsYN09QEBFsaffFSX9iMi6j45gP3"
  //     )
  //       .then((res) => res.json())
  //       .then((json) => setPicUrl(json));

  //     //  {   console.log(json);
  //     //   } );
  //   }, []);

  useEffect(() => {
    const apiKey = "JL3so5Ey6zWp4vxltlRXL0eEQEQDrl8QpNGtCWZJ";
    const getUrl = async () => {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const result = await response.json();
      setPicUrl(result);
    };
    getUrl();
  }, []);

  return (
    <>
      <img src={picUrl.url} />
      <h3>{picUrl.title}</h3>
      <p>{picUrl.explanation}</p>
    </>
  );
}
