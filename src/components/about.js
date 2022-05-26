import * as React from "react"

import {AboutImg} from "../components/about-img";
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Sidebar,
    Visibility,
  } from 'semantic-ui-react'

/*   const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      mobile: 0,
      tablet: 768,
      computer: 1024,
    },
  }) */
const About = () => {
    return (
      <div className="about-section" >
    <Container >
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3' style={{ color:'white', fontSize: '2em' }}>
              Honest & Efficient Work
              </Header>
              <p style={{ fontSize: '1.33em' }}>
              Estia städ AB är ett väletablerat företag som funnits i branschen sedan år 2018.
Företaget ägs och drivs av Metaxia Bokou. Vi är verksamma i Kävlinge, Lund och
Malmö kommun med omnejd. Estia städ AB utför städtjänster och andra
hushållsnära tjänster åt privat personer och företag. Vi städar såväl hem som
kontor med högsta kvalitet och strävar efter 100% nöjda kunder. Vi hjälper dig
gärna med hemstädning, flyttstädning, storstädning, fönsterputsning och
företagsstädning.
              </p>
              <p style={{ fontSize: '1.33em' }}>
              Vårt mål är att underlätta vardagen för dig och på så sätt skapa bättre
förutsättningar för trivsel och en lugn och avkopplande daglig rutin.
Flexibilitet, noggrannhet, hög kvalitet och fulländad service är vad vi erbjuder
med stor respekt för vara kunder.
Kontakta oss idag för att boka ett kostnadsfritt hembesök. Vi kan även skapa en
städplan tillsammans, som passar just dig.
Priset är fast och beror på hur ofta och vilken typ av städning du vill ha.
              </p>
             
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
            <AboutImg/>
            </Grid.Column>
          </Grid.Row>
          
        </Grid>
      </Segment>
      </Container>
      </div>
)}
export default About
