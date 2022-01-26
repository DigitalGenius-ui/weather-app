import { InputBase, LinearProgress } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React, {useState} from 'react';
import styled from 'styled-components';

const Home = ({searchHandler, data, location, setLocation, loading}) => {
    const [change, setChange] = useState(false);
    const temp = data.main ? data.main.temp : null;
    const calculate = (temp - 32) / 1.8;

  return(
      <Container>
          <Layout data={data}>
            <Layer data={data}>
                <Weather>
                <WeatherFlex>
                    <div>
                        {data.main ?
                            <>
                                {change ?<h3>{calculate.toFixed()}C°</h3> :
                                 <h3>{data.main ? data.main.temp.toFixed() : null}F°</h3>}
                                <h6>{data.weather ? data.weather[0].main : null}</h6>
                            </>
                            : null
                        }
                    </div>
                    {data.main ? <button className='click' onClick={() => setChange(!change)}>
                        {change ? "Change to F" : "Change to C"}
                    </button> : null}
                </WeatherFlex>
                <Input>
                    {!data.main ? <h3 className='text'>Please Enter The Name OF Your City</h3> : null}
                    <SearchInput>
                        <Search/>
                        <InputBase className="input" placeholder='Search...' value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        onKeyPress={searchHandler}
                        />
                    </SearchInput>
                </Input>
                </Weather>
                { loading ? (<LinearProgress />) : data.main ?
                <Data>
                    <h3>{data.name}</h3>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <Situation>
                        <Temp>
                            <h4>Temp Min</h4>
                            <h5>{data.main ? data.main.temp_min.toFixed() : null}°</h5>
                        </Temp>
                        <Temp>
                            <h4>Temp Max</h4>
                            <h5>{data.main ? data.main.temp_max.toFixed() : null}°</h5>
                        </Temp>
                        <Temp>
                            <h4>Humidity</h4>
                            <h5>{data.main ? data.main.humidity.toFixed() : null}%</h5>
                        </Temp>
                        <Temp>
                            <h4>Wind Speed</h4>
                            <h5>{data.wind ? data.wind.speed.toFixed() : null} MPH</h5>
                        </Temp>
                    </Situation>
                </Data>
                : null
                }
            </Layer>
          </Layout>
      </Container>
  )
};

export default Home;

const Container = styled.div`
    width : 100%;
    height: 100vh;
    position : relative;
    background: linear-gradient(#0e73e6, #b93703);
`
const Layout = styled.div`
    width : 100%;
    height: 100vh;
    position : relative;
    background: ${props => props.data.weather && props.data.weather[0].main === "Clear" ? 
    `linear-gradient(#03d465d1, #f89a02a1)`:
    props.data.weather && props.data.weather[0].main === "Rain" ? `linear-gradient(#052de2bd, #db2f04a1)`:
    props.data.weather && props.data.weather[0].main === "Clouds" && `linear-gradient(#0373be83, #bf02f8c3)`
    };
`
const Layer = styled.div`
    width : 35rem;
    height: 100vh;
    margin : 0 auto;
    padding : 2rem;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    background-image: ${props => props.data.weather && props.data.weather[0].main === "Clear" ? 
    `url(https://www.nicepng.com/png/full/7-72800_png-moon-png-library-library-planet.png)`:
    props.data.weather && props.data.weather[0].main === "Rain" ? `url(https://images.vexels.com/media/users/3/240044/isolated/preview/953dfc52119c9489d00206108efe4133-rainy-clouds-color-stroke.png)`:
    props.data.weather && props.data.weather[0].main === "Clouds" && `url(https://icon-library.com/images/cloudy-icon/cloudy-icon-15.jpg)`
    };
    background-size : 15rem;
    background-position : center;
    background-repeat : no-repeat;
    @media(max-width : 780px){
        width : 90%;
    }
`
const Input = styled.div`
    .text{
        font-size : 1.1rem;
        font-weight: 500;
        text-align: center;

    }
`
const Weather = styled.div`
    color : white;
    h3{
        font-size : 4rem;
        font-weight: 200;
    }
    h6{
        text-transform : uppercase;
        font-size : 1.3rem;
        letter-spacing : 0.1rem;
    }
`
const Data = styled.div`
    color : white;
    h3{
        letter-spacing : 0.1rem;
        font-size : 2rem;
    }
    hr{
        height: 3px;
        background-color : white;
        border : 1px solid #fff;
    }
`
const Situation = styled.div`
    display : flex;
    align-items : center;
    justify-content : space-evenly;
    background-color : rgba(0 ,0 ,0, 0.3);
    padding : 0.5rem;
    color : white;
    border-radius : 3px;
`
const Temp = styled.div`
    display : flex;
    align-items : center;
    flex-direction : column;
    gap : 0.7rem;
    color : white;
`
const SearchInput = styled.div`
    display  :flex;
    align-items : center;
    background-color : rgba(0 ,0 ,0, 0.3);
    padding : 0.2rem;
    width : 20rem;
    margin : 1rem auto;
    border-radius : 3px;
    gap : 0.3rem;
    .input{
        color : white;
        width : 100%;
        ::placeholder{
            color : white;
        }
    }
`
const WeatherFlex = styled.div`
    display : flex;
    justify-content: space-between;
    .click{
        height : 1.7rem;
        padding : 0.2rem 1.5rem;
        cursor : pointer;
        border-radius : 4px;
        border : none;
    }
`