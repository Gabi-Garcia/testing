/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

const MainContain = styled.main`
display: flex;
flex-direction: column;
flex-wrap: wrap;
width:90%;
height: 70vh;
margin-top:0px;
margin: auto;
/* border:2px solid violet; */
`
const MainMain = ()=>{
    return(
        <>
        <MainContain>
            <cajaGiphy>     
                <div className='cajaTextoGiphy'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit nobis possimus excepturi 
                        laboriosam reprehenderit mollitia asperiores eveniet id sed dolor
                         quaerat perferendis, illum quisquam eaque perspiciatis, ea voluptatem nesciunt neque?
                         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit nobis possimus excepturi 
                        laboriosam reprehenderit mollitia asperiores eveniet id sed dolor
                         quaerat perferendis, illum quisquam eaque perspiciatis, ea voluptatem nesciunt neque?
                    </p>

                    <img className='giphyImg'  src="https://media.giphy.com/media/Z5xk7fGO5FjjTElnpT/giphy.gif?cid=790b761192q4t8zcoy3uoqxy8sgbjn25ypjkn7o66zy43qd6&ep=v1_gifs_trending&rid=giphy.gif&ct=g" alt="giphyImg" />
                </div>
            </cajaGiphy>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae maiores, porro quibusdam 
                ab eligendi necessitatibus, enim provident eos earum numquam, eaque voluptatem quasi vel.
                 Minus iusto aut eum mollitia consequuntur!</p>
        </MainContain>
        </>
    )
}
export default MainMain;