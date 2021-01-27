import React from 'react';

class Weather extends React.Component {
    constructor(props){
        super(props);
        this.state = {weatherData: ''}
    }
    componentDidMount(){
        
    }
    getWeather(){
        return (
            $.ajax({
                url: `api.openweathermap.org/data/2.5/weather?q=SanFrancisco&appid=c58f3df49305ab9f3c38f23e58a53a4a`,
                method: 'GET'
            }).then(res =>{this.setState({weatherData: res})})
        );
    }
    render (){

    }
}
export default Weather;