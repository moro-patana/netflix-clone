import React from 'react'
import Jumbotron from "../components/jumbotron"
import jumbonData from "../fixtures/jumbo.json"
export default function JumbotronContainer() {
    return (
        <div>
            <Jumbotron.Container>
                {jumbonData.map((item) => (
                    <Jumbotron key={item.id} direction={item.direction}>
                        <Jumbotron.Pane>
                            <Jumbotron.Title>{item.title}</Jumbotron.Title>
                            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                        </Jumbotron.Pane>
                        <Jumbotron.Pane>
                           <Jumbotron.Image src={item.image} alt={item.alt}></Jumbotron.Image>
                        </Jumbotron.Pane>
                    </Jumbotron>
                ))}
            </Jumbotron.Container>

        </div>
    )
}
