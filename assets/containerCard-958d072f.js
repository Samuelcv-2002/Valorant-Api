import{r as n,j as s}from"./index-b66a9544.js";import{T as c,A as p,M as i}from"./DivTexto-f924d600.js";async function x(a,t){const r=await(await fetch("https://valorant-api.com/v1/"+a+"/")).json();t(r.data)}function m({seccion:a,page:t,filter:e}){const[r,o]=n.useState([]);return n.useEffect(()=>{x(a=="Agentes"?"agents":"maps",o)},[]),s.jsx(s.Fragment,{children:s.jsxs("div",{className:"container-card",children:[s.jsx(c,{clases:a!="Mapas"?"cnt-sec":"cnt-sec cnt-sex-left",page:t,texto:a}),s.jsxs("div",{id:a=="Mapas"&&"mapas",className:a!="Mapas"?"carrusel-cont":"carrusel-cont-r",children:[a=="Agentes"&&s.jsx(p,{Data:r,pagina:t,filtro:e}),a=="Mapas"&&s.jsx(i,{Data:r,pagina:t,filtro:e})]})]})})}export{m as C};
