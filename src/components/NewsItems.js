import NewCard from './NewCard'
import React, { Component } from 'react'


export class NewsItems extends Component {
  articles = [];
  // url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=61254b18e0494439bbb73d19466c847b';
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: true,
      page:1,
      url : `https://newsapi.org/v2/top-headlines?country=in&apiKey=61254b18e0494439bbb73d19466c847b`
    }
  }

 
  async componentDidMount() {
    let data = await fetch(this.state.url);
    let news = await data.json();
    this.setState({ articles: news.articles });
    console.log(this.state.articles);
  }

  health = async()=>{
    console.log('click next');
  this.setState({url:`https://newsapi.org/v2/top-headlines?country=in&apiKey=61254b18e0494439bbb73d19466c847b&page=${this.state.page + 1 }`});
    let data = await fetch(this.state.url);
    let newsmovie = await data.json();
    await this.setState({ articles: newsmovie.articles, page: this.state.page+1 });
    await console.log(this.state.page);
  }

 movie = async()=>{
    console.log('click prev');
    this.setState({url:`https://newsapi.org/v2/top-headlines?country=in&apiKey=61254b18e0494439bbb73d19466c847b&page=${this.state.page - 1}`});
    let data = await fetch(this.state.url);
    let newsmovie = await data.json();
    this.setState({ articles: newsmovie.articles, page: this.state.page-1 });
    console.log(this.state.page);
  }

  render() {
    return (
      <>
        <div className='container m-auto row'>
        <div>
          <button className='btn btn-dark mx-3' disabled={this.state.page<1} onClick={this.movie}>previous</button>
          <button className='btn btn-dark' onClick={this.health}>next</button>
        </div>
          
          {
          this.state.articles.map((ele) => {
            return (
              <div className='col-md-4 my-3' key={ele.url}>
                <NewCard title={ele.title} discription= {ele.description} imageUrl={ele.urlToImage}/>
              </div>
            )

          })}
        </div>
      </>
    )

  }



}
export default NewsItems;
