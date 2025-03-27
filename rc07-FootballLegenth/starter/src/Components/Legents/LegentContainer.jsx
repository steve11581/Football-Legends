import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import {data} from "../../helpers/data"
import Card from 'react-bootstrap/Card';
import CardFooter from "react-bootstrap/esm/CardFooter";
import Form from 'react-bootstrap/Form';
import {useState} from "react"


const LegendContainer =() => {
    console.log(data)
    const [search,setSearch]= useState("")
    const handleChange = (e) => {
        setSearch(e.target.value)

    }
    console.log(search)
    const filteredData = data.filter(legend=> legend.name.toLowerCase().includes(search.trim().toLowerCase()))
    return(
        <>
        <Form.Control type="Search" onChange={(e)=>handleChange(e)} placeholder="Search legends..." />
        <Container>
            <Row>
                {data.map(legend=><Col xs={10} sm={8} md={6} lg={4} xl={3}>
                <Card>
                  <Card.Img variant="top" title={legend.name} src={legend.img}  />
                     <Card.Body>
                      <Card.Title>{legend.name}</Card.Title>
                      <Card.Text>
                       <ul>
                        {legend.statistics.map(item=><li>{item}</li>)}
                       </ul>
                      </Card.Text>
                      <CardFooter>
                        career Years :{legend.official_career }
                      </CardFooter>
                      
                     </Card.Body>
                   </Card>
                </Col>)}


            </Row>

        </Container>
        </>
    )
}

export default LegendContainer;