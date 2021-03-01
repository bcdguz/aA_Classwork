import React from 'react';

class Weather extends React.Component {
    constructor(props){
        super(props);
        this.state = {weatherData: undefined}
        this.getWeather = this.getWeather.bind(this);
    }
    
    componentDidMount() {
        this.getWeather();
    }

    getWeather(){
        // return (
        //     $.ajax({
        //         url: `api.openweathermap.org/data/2.5/weather?q=SanFrancisco&appid=c58f3df49305ab9f3c38f23e58a53a4a`,
        //         method: 'GET'
        //     }).then(res =>{this.setState({weatherData: res})})
        // );
        // var request = new XMLHttpRequest();
        // request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=San+Francisco&appid=c58f3df49305ab9f3c38f23e58a53a4a', true);
        // request.onload = function () {
        //     if (this.status >= 200 && this.status < 400) {
        //         // Success!
        //         var resp = this.response;
        //     } else {
        //         // We reached our target server, but it returned an error
        //         console.log('There is an error!')
        //     }
        // };
        // request.send();
        // this.setState({weatherData: resp});
        fetch('http://api.openweathermap.org/data/2.5/weather?q=San+Francisco&appid=c58f3df49305ab9f3c38f23e58a53a4a')
        .then((weatherData) => 
        this.setState({ weatherData }));
    }
    render (){
        if (!this.state.weatherData) return null;
        return (
            <div>
                {this.state.weatherData.coord.lon}
            </div>
        )
    }
}
export default Weather;