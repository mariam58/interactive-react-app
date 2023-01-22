import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #232A34;
    padding: 32px;
    width: 341px;
    border-radius: 30px;
    color: white;
    ul {
        display: flex;
        justify-content: space-between;
        margin: 24px 0 32px 0;
    }
    .img-star {
        padding: 15px;
        background-color: #262E38;
        border-radius: 360px;
        margin-bottom: 30px;
    }
    .apply-img {
        margin: 13px 0 30px 0;
    }
    .text-center {
        text-align: center;
    }
    .text-orange {
        color: #FC7614;
        background-color: #262E38;
        border-radius: 22.5px;
        padding: 4px 20px;
        margin-bottom: 32px;
    }
`
export const HeadingLarge = styled.h1`
    font-family: Overpass;
    font-size: 28px;
    font-weight: 700;
    line-height: 35px;
    letter-spacing: 0px;
    margin-bottom: 7px;
    text-transform: capitalize;

`
export const Text = styled.p`
    font-family: Overpass;
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-transform: capitalize;
`