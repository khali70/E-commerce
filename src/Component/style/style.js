import Styled from "styled-components";
// Button & ModelContainer styled Component
export const Button = Styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
border:0.15rem solid var(--lightBlue);
border-color:${(props) =>
  props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
color : ${(props) => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
padding:0.2rem 0.5rem;
border-radius:0.5rem;
margin:0.5rem;
cursor:pointer;
transition: all 0.5s ease-in-out;
&:hover{
  background-color: ${(props) =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color:var(--mainBlue);
}
&:focus{
  outline:none;
}
`;
export const ModelContainer = Styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.3);
display: flex;
align-items: center;
justify-content: center;
#model{
  background-color: var(--mainWhite);
}
`;
