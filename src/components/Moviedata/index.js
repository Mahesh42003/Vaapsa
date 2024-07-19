import { Component } from "react" 
import EachMovie from '../EachMovie'
import { CiSearch } from "react-icons/ci";
import { Rings } from 'react-loader-spinner'
import './index.css'

class MovieData extends Component{
    state={listOfMovies:[],searchingMovie:"",totalNumberOfMovies:1,searchedMovie:"",errorMessage:""}

    componentDidMount(){
        this.getMoviesData()
    } 

    enteringMovieName=(Event) => {
        this.setState({searchingMovie:Event.target.value})
    }  

    clickingMovie=() => {
        const {searchingMovie}=this.state 
        this.setState({searchedMovie:searchingMovie,searchingMovie:"",errorMessage:"",listOfMovies:[]},this.getMoviesData)
    }


    getMoviesData=async () => {
        const {searchedMovie}=this.state
        const MoviesUrl=`https://openlibrary.org/search.json?q=${searchedMovie}/`
        
        const response=await fetch(MoviesUrl) 
        
        const randomImage=await fetch("https://dog.ceo/api/breeds/image/random")
        const response1=await randomImage.json() 
        const {message}=response1 
        
        if(response.ok === true){
            const data=await response.json() 
            const {docs}=data 
            const totalData=docs.map(each => ({
                title:each.title,
                publishDate:each.first_publish_year,
                authorName:each.author_name,
                publishers:each.publisher,
                language:each.language,
                authorKey:each.author_key,
                images:message
            })) 
            this.setState({listOfMovies:totalData})
        } 
        else {
            
            this.setState({errorMessage:"Movie Name Not Found"})
        }
    }

   
    render(){  
        const {listOfMovies,searchingMovie,errorMessage,searchedMovie}=this.state 
        
        if(errorMessage.length > 0){
            return(
                <div className="total-background">
                <input type="search" placeholder="Enter Any Movie Name" className="width-of-search-input" onChange={this.enteringMovieName} value={searchingMovie}/>
                <button  className="search-icon" onClick={this.clickingMovie}><CiSearch alt="search" className="search-icon2"/></button>
                <div className="width-and-height-of-text">
                  <button className="button-styling"><CiSearch alt="search" className="search-icon1 "/></button>
                  <h1>{errorMessage}</h1>
                </div>
              </div>
            )
        }
    
        if(errorMessage.length === 0 && searchedMovie.length > 0){
            return(
            <div className="total-background">
                <input type="search" placeholder="Enter Any Movie Name" className="width-of-search-input" onChange={this.enteringMovieName} value={searchingMovie}/>
                <button  className="search-icon" onClick={this.clickingMovie}><CiSearch alt="search" className="search-icon2"/></button>
                <ul className="flexing-of-list-of-movies">
                    {
                        listOfMovies.map(each => <EachMovie eachOne={each} key={each.authorName}/>)
                    }
                </ul> 
            </div>
            ) 
        } 
        
        return(
            <div className="total-background">
              <input type="search" placeholder="Enter Any Movie Name" className="width-of-search-input" onChange={this.enteringMovieName} value={searchingMovie}/>
              <button  className="search-icon" onClick={this.clickingMovie}><CiSearch alt="search" className="search-icon2"/></button>
              <div className="width-and-height-of-text">
              <Rings type="ThreeDots" color="#0b69ff" height="50" width="50" />
              <h1>Search For Any Movie</h1>
              </div>
            </div>
        )
    }
    
} 
export default MovieData