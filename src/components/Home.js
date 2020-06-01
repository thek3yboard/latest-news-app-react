import React, { Component } from 'react'
import '../App.css'

var vanillaUrl = 'https://newsapi.org/v2/top-headlines?apiKey=e75e2e49fd7f4230911a5352c02c8c46&';

export default class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = { articles: [], currentCountry: '' };
        this.changeCountry = this.changeCountry.bind(this);
        this.changeTopic = this.changeTopic.bind(this);
    }
    
    componentDidMount() {
        this.setState ({ currentCountry: 'country=ar' }, console.log(this.state.currentCountry));
        this.changeCountry('ar');
        
    }

    async apiCall(url) {
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ articles: data.articles });
    }
    
    changeCountry(countryCode) {
        let url = vanillaUrl + 'country=' + countryCode;
        this.setState ({ currentCountry: 'country=' + countryCode }, console.log(this.state.currentCountry));
        this.apiCall(url);
    }

    changeTopic(newTopic) {
        let url = vanillaUrl + this.state.currentCountry + '&category=' + newTopic;
        this.apiCall(url);
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="row" id="search-parameter">
                            <h3>Search by country</h3>
                        </div>

                            <button type="button" className="btn btn-outline-warning" onClick={() => this.changeCountry('ar')}>
                                Argentina
                            </button>

                            <button type="button" className="btn btn-outline-warning" onClick={() => this.changeCountry('us')}>
                                Estados Unidos
                            </button>

                            <button type="button" className="btn btn-outline-warning" onClick={() => this.changeCountry('gb')}>
                                Reino Unido
                            </button>

                        <div className="row" id="search-parameter">
                            <h3>Search by topic</h3>
                        </div>

                            <button type="button" className="btn btn-outline-warning" onClick={() => this.changeTopic('business')}>
                                Business
                            </button>

                            <button type="button" className="btn btn-outline-warning" onClick={() => this.changeTopic('entertainment')}>
                                Entertainment
                            </button>

                            <button type="button" className="btn btn-outline-warning" onClick={() => this.changeTopic('general')}>
                                General
                            </button>

                            <button type="button" className="btn btn-outline-warning" onClick={() => this.changeTopic('health')}>
                                Health
                            </button>

                            <button type="button" className="btn btn-outline-warning" onClick={() => this.changeTopic('science')}>
                                Science
                            </button>

                            <button type="button" className="btn btn-outline-warning" onClick={() => this.changeTopic('sports')}>
                                Sports
                            </button>

                            <button type="button" className="btn btn-outline-warning" onClick={() => this.changeTopic('technology')}>
                                Technology
                            </button>
                    </div>
                    
                    <div className="col-10">
                        {this.state.articles.map((item, index) => {
                            return (
                                <div>
                                    <h2>
                                        <br/>{item.title}
                                    </h2>
                                    <h4>
                                        <br/>{item.description}
                                    </h4>
                                        <br/><img src={item.urlToImage} className="img-fluid" alt="Responsive image"></img>
                                    <h6>
                                        <br/>{item.author}
                                    </h6>
                                    <hr></hr>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}