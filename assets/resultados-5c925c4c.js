import{r,u as h,j as s}from"./index-931b4482.js";import{H as j,F as m}from"./header-1adf93d6.js";import{T as i,A,M as E,S}from"./DivTexto-7e908711.js";const g="https://valorant-api.com/v1/";function p(t,c,a,o){let n=a.length;console.log(a),fetch(t).then(e=>e.json()).then(e=>{e.data.forEach(d=>{if(d.uuid!=S){let x=d.displayName,f=x.substring(0,n);a.length<=x.length&&a.toLowerCase()===f.toLowerCase()&&(o(u=>({...u,resultados:!0})),c(u=>[...u,d]))}})}),o(e=>({...e,busqueda:!0}))}function b(){const[t,c]=r.useState([]),[a,o]=r.useState([]),[n,e]=r.useState({resultados:!1,busqueda:!1}),l=h();return r.useEffect(()=>{p(g+"agents/",c,l.busqueda,e),p(g+"maps/",o,l.busqueda,e)},[]),s.jsxs(s.Fragment,{children:[s.jsx(j,{}),s.jsxs("section",{className:"encabezado-agentes",id:"Resultados",children:[t.length>0&&s.jsxs(s.Fragment,{children:[s.jsx(i,{clases:"cnt-sec cnt-sex-left",page:"resultados",texto:"Agentes:"}),s.jsx("div",{className:"carrusel-cont-r",children:s.jsx(A,{Data:t,pagina:"Agentes"})})]}),a.length>0&&s.jsxs(s.Fragment,{children:[s.jsx(i,{clases:"cnt-sec cnt-sex-left",page:"resultados",texto:"Mapas:"}),s.jsx("div",{className:"carrusel-cont-r",children:s.jsx(E,{Data:a,pagina:"Mapas"})})]}),!n.resultados&&n.busqueda?s.jsx(i,{clases:"cnt-sec cnt-sex-left",page:"resultados",texto:"No hay resultados"}):s.jsx(s.Fragment,{})]}),s.jsx(m,{})]})}export{b as default};
