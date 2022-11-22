import styled from "styled-components";



export const Forms = styled.section`

background-color: #FFFFFF;
box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.15);
width: 60rem;
height: 30rem;
display: flex;
justify-content: center;
margin: 0 auto;
border-radius: 15px;
margin-top: 3rem;


form{
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    flex-wrap: wrap;
    gap: 1rem;
    div{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
   
}



input{
    width: 18rem;
    height: 2.5rem;
    background-color: #f5f8fa;

    color: #33475b;
    border: 1px solid #cbd6e2;
    font-size: 1rem;
    border-radius: 15px;
}

button{
    background-color: #EA6D27;
    color: #FFFFFF;
    font-weight: 500;
    width: 6.5rem;
    height: 1.813rem;
    border: none;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.15);
    border-radius: 1rem;
}



`