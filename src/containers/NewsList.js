import React,{useEffect,useState} from "react";
import { Container } from "../components/CommonComponents";
import NewsCard from "../components/NewsCard";
import Pagination from "../components/Pagination";
import DataService from "../services/DataService";

function NewsList() {
  const news1 = {
    id: 1,
    title:
      "Eminem Terrified As Daughteraaaaaaaaaa Begins Dating Man Raised On His Music Raised On His Mu",
    description: [
      "Triller, a budding competitor to popular short - video app TikTok, is in discussions with blank - check acquisition companies about a merger which would take the US social media ompanies about a merger which would take the US social media.",
    ],
    uploadTime: "4 min",
    image:
      "https://images.unsplash.com/photo-1636061455170-32ec066453f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
  };

  const news2 = {
    id: 2,
    title:
      "Eminem Terrified As Daughter Begins Dating Man Raised On His Music ",
    description: [
      "Triller, a budding competitor to popular short - video app TikTok.",
    ],
    uploadTime: "4 min",
    image:
      "https://images.unsplash.com/photo-1636013605963-e64b6d7ba716?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=392&q=80",
  };

  const dataService = new DataService();

  const [newsList, setNewsList] = useState([])
  const [newsLoaded, setNewsLoaded] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    // const fetchNews = async () => {
    //   const {status, data, error} = await dataService.handleGetAllNews();
    //   if(status){
    //     setNewsList(data);
    //   }else{
    //     setError(error);
    //     console.log(error);
    //   }
      
    // };
    // fetchNews();
    const fetchNews = async () => {//this is temporary for demostrate
      await fetch(" http://localhost:3005/news").then(res => res.json()).then(data => {
        console.log(data)
        setNewsList(data)
        setNewsLoaded(true)
      }).catch(e=>console.log(e));
    };
    fetchNews();

  }, [newsLoaded]);

  return (
    <Container fluid>
      {/* <Row>
        <NewsCard news={news1}/>
        <NewsCard news={news2}/>
      </Row> */}
      <Pagination
        data={newsList}
        RenderComponent={NewsCard}
        title="Posts"
        pageLimit={1}
        dataLimit={6}
      />
    </Container>
  );
}

export default NewsList;
