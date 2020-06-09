import React, { Component } from 'react'
import '../App.css'

var defaultUrl = 'https://newsapi.org/v2/top-headlines?apiKey=e75e2e49fd7f4230911a5352c02c8c46&country=ar'; //Default api call, url to search by topic. Just gives the top headlines

var urlAll = 'https://newsapi.org/v2/everything?apiKey=e75e2e49fd7f4230911a5352c02c8c46'; //Url to fetch api call by search, language and sort. Gives all the record of news.

export default class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = { articles: [], search: '', currentLanguage: null, sortBy: null };
    }
    
    componentDidMount() {
        this.apiCall(defaultUrl);
    }

    async apiCall(url) {
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ 
            articles: data.articles 
        });
    }

    //API CALL TO HEADLINES = ONLY SEARCH BY TOPIC

    changeTopic(newTopic) {
        let url = defaultUrl + '&category=' + newTopic;
        this.apiCall(url);
    }

    //API CALL TO EVERYTHING = SEARCH BY KEYWORD, SET LANGUAGE AND SORT BY

    onChangeSearch = (e) => {
        this.setState({
            search: e.target.value
        }, () => {
            console.log(this.state.search);
        })
    }

    onSubmitSearch = (e) => {
        e.preventDefault();
        if(this.state.sortBy == null && this.state.currentLanguage == null){
            let url = urlAll + '&q=' + this.state.search;
            url = encodeURI(url);
            this.apiCall(url);
        }else if(this.state.sortBy == null || this.state.currentLanguage == null){
            if(this.state.sortBy == null){
                let url = urlAll + '&q=' + this.state.search + '&language=' + this.state.currentLanguage;
                url = encodeURI(url);
                this.apiCall(url);
            }else{
                let url = urlAll + '&q=' + this.state.search + '&sortBy=' + this.state.sortBy;
                url = encodeURI(url);
                this.apiCall(url);
            }
        }else{
            let url = urlAll + '&q=' + this.state.search + '&language=' + this.state.currentLanguage + '&sortBy=' + this.state.sortBy;
            url = encodeURI(url);
            this.apiCall(url);
        }
    }

    onChangeLanguage = (e) => {
        this.setState({ 
            currentLanguage: e.target.value
        }, () => {
            if(this.state.sortBy == null){
                let url = urlAll + '&language=' + this.state.currentLanguage + '&q=' + this.state.search;
                url = encodeURI(url);
                this.apiCall(url);
            }else{
                let url = urlAll + '&language=' + this.state.currentLanguage + '&q=' + this.state.search + '&sortBy=' + this.state.sortBy;
                url = encodeURI(url);
                this.apiCall(url);
            }
        })
    }

    onChangeSortBy = (e) => {
        this.setState({ 
            sortBy: e.target.value
        }, () => {
            if(this.state.currentLanguage == null){
                let url = urlAll + '&sortBy=' + this.state.sortBy + '&q=' + this.state.search;
                url = encodeURI(url);
                this.apiCall(url);
            }else{
                let url = urlAll + '&sortBy=' + this.state.sortBy + '&q=' + this.state.search + '&language=' + this.state.currentLanguage;
                url = encodeURI(url);
                this.apiCall(url);
            }
        })
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="row" id="search-parameter">
                            <h3>Search by keyword</h3>
                        </div>

                            <h6>
                                <svg class="bi bi-exclamation-triangle text-success" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M7.938 2.016a.146.146 0 0 0-.054.057L1.027 13.74a.176.176 0 0 0-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 0 0 .066-.017.163.163 0 0 0 .055-.06.176.176 0 0 0-.003-.183L8.12 2.073a.146.146 0 0 0-.054-.057A.13.13 0 0 0 8.002 2a.13.13 0 0 0-.064.016zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                                    <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                                </svg> Do a search before changing parameters.
                            </h6>

                            <form className="form-inline" onSubmit={this.onSubmitSearch}>
                                <input
                                className="form-control mr-sm-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                onChange={this.onChangeSearch}
                                value={this.state.search}
                                />
                                <h1><br/></h1>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>

                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Choose language</label>
                                <select class="form-control" id="exampleFormControlSelect1" onChange={this.onChangeLanguage} value={this.state.currentLanguage}>
                                <option value="" disabled selected>Select your language</option>
                                <option value="es">Español</option>
                                <option value="en">Inglés</option>
                                <option value="pt">Portugués</option>
                                <option value="fr">Francés</option>
                                <option value="it">Italiano</option>
                                <option value="de">Alemán</option>
                                </select>
                            </div>
 
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Sort by</label>
                                <select class="form-control" id="exampleFormControlSelect1" onChange={this.onChangeSortBy} value={this.state.sortBy}>
                                <option value="" disabled selected>Select your sort order</option>
                                <option value="relevancy">relevancy</option>
                                <option value="popularity">popularity</option>
                                <option value="publishedAt">published at</option>
                                </select>
                            </div>


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