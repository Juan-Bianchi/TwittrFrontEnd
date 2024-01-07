import { useParams } from "react-router-dom"
import { StyledContainer } from "../../components/common/Container"
import { useSocket } from "../../hooks/useSocket"
import ChatFeed from "./components/ChatFeed"
import ChatInput from "./components/ChatInput"
import { useFormik } from "formik"
import * as Yup from 'yup';
import { MyInputVariant } from "../../components/my-input/StyledMyInputContainer"


const ChatPage = () => {

  const to = useParams().contactId as string;
  const from = useParams().userId as string;
  const { messages, sendMessage } = useSocket({from, to})
  const formik = useFormik({
    initialValues: {message: ''},
    validationSchema: 
      Yup.object({
        message: Yup.string().required(),
      }),
    onSubmit: values => handleSubmit(values.message)
  })

  const handleSubmit = (message: string)=> {
    sendMessage(message);
    formik.setValues({ message: '' });
  }

  return (
    <>
      <StyledContainer
        borderRight={"1px solid #ebeef0"}
        flex={2}
        maxWidth={"700px"}
        padding="3rem"
      >
        <ChatFeed messages={messages} />
        <ChatInput 
          {...formik.getFieldProps('message')} 
          placeholder="Write a message..."
          handleSubmit={()=> formik.handleSubmit()} 
          variant={MyInputVariant.OUTLINED}
          autocomplete="off"
        />
      </StyledContainer>
    </>
  )
}

export default ChatPage