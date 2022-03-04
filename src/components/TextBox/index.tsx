import { useState } from "react";
import {Container, Content, TextInputArea} from "./styles"

export function TextBox(){
    const [text, setText] = useState('');

    function CapslockText(){
        return(
            // 
            <div>
               <form action=""> <textarea value ={text}></textarea> </form>
            </div>
        )
    }

    function FormText(){
        console.log(text);

        return(
            <form> <textarea onChange={event =>setText(event.target.value.toUpperCase())} placeholder = "Digite seu texto aqui">{text}</textarea> </form>
            
        )
        
    }

    
    return(
        <Container> 
            <Content>
                <TextInputArea>
                    <p> Converta seu texto para caixa alta:</p>
                    {FormText()}
                    {CapslockText()}
                </TextInputArea>
                
            </Content>
            
        </Container>
    )

}