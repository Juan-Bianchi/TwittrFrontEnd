import { useParams } from "react-router-dom";
import { StyledContainer } from "../../../components/common/Container"
import { StyledH3 } from "../../../components/common/text"
import { Message } from "../../../service";
import { useEffect, useRef } from "react";

interface ChatFeedProps {
  messages: Message[];
}

const ChatFeed = ({messages}: ChatFeedProps) => {

  const to = useParams().contactId as string;
  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {

    if (lastMessageRef?.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(()=> {
    scrollToBottom();
  }, [messages])

  return (
    <StyledContainer height="85%" marginBottom="5%">
      <StyledH3>Messages</StyledH3>
      <StyledContainer overflowY="auto">
      {
        messages.map((message, i, self) => {
            const align = message.from === to ? 'start' : 'end';
            const color = message.from === to ? 'rgb(229 231 235)' : 'rgb(134 239 172)';
            const isLastMessage = i === self.length - 1;

            return (
              isLastMessage ? 
                <StyledContainer key={i} alignItems={align}  width="100%"  height="45px" ref={lastMessageRef}>
                  <StyledContainer 
                    key={i} 
                    borderRadius='10px' 
                    backgroundColor={color} 
                    margin='8px' 
                    width="fit-content" 
                    padding="8px"
                    height="35px"
                  >
                      <span>{message.body}</span>
                  </StyledContainer>
                </StyledContainer>
              :
                <StyledContainer key={i} alignItems={align}  width="100%"  height="45px">
                  <StyledContainer 
                    key={i} 
                    borderRadius='10px' 
                    backgroundColor={color} 
                    margin='8px' 
                    width="fit-content" 
                    padding="8px"
                    height="35px"
                  >
                      <span>{message.body}</span>
                  </StyledContainer>
                </StyledContainer>
            )
        })
      }
      </StyledContainer>

    </StyledContainer>
  )
}

export default ChatFeed
