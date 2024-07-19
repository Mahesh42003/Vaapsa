import './index.css'

const EachMovie= (props) => {
    const {eachOne}=props  
    const {title,images, publishers,publishDate,language,authorName}=eachOne 
   
    if(authorName === undefined){
        return(
        <li className="background-of-each-card"> 
            <img src={images} className='image-height' alt="random-dog"/>
            <h2 className='font-size-of-text'>Unknown Author</h2>
        </li>
        )
    } 
    if(language === undefined){
        return(
        <li className="background-of-each-card"> 
        <img src={images} className='image-height' alt="random-dog"/>
        <p className='font-size-of-text'>Published by : {publishers}</p>
           <p className='font-size-of-text'>Written by : {authorName}</p> 
           <p className='font-size-of-text'>Released In the Year: {publishDate}</p>
        <p className='font-size-of-text'>Not Available in Any Language</p>

      </li>)
    }
    return( 
        <li className="background-of-each-card">
            <img src={images} className='image-height' alt="random-dog"/>
           <h3 className='font-size-of-text'>{title}</h3> 
           <p className='font-size-of-text'>Published by : {publishers}</p>
           <p className='font-size-of-text'>Written by : {authorName}</p> 
           <p className='font-size-of-text'>Released In the Year: {publishDate}</p>
           <p className='font-size-of-text'>Available in {language.length} languages</p>
        </li>
    )
} 
export default EachMovie