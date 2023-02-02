import React, { useState, useEffect } from "react";
import useStore from "../../useStore";
import { useNavigate } from "react-router-dom";

const Language = (lang : any) => {
  const { T, update }: any = useStore();
  const [path, setPath] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
     console.log(lang.lang);
     update({lang : lang.lang});
     if(lang.lang === "en-US") setPath(`/en/edit`); 
     if(lang.lang === "sw-SW") setPath(`/sv/edit`); 
     if(lang.lang === "es-ES") setPath(`/es/edit`); 
  }, []);

  useEffect(() => {
    if(path === "") return;
    navigate(path);
  }, [path])
  return (
    <>  
      <h1>Redirecting...</h1>
    </>
  );
};

export default Language;
