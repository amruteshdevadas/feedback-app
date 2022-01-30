import Card from "../shared/Card"
import { useState ,useContext, useEffect} from "react"
import Button from "../shared/Button"
import RatingSelect from "./RatingSelect"
import { FeedbackContext } from './FeedbackContext'

function FeedbackForm() {
    const [text, setText] = useState("")
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState("")
    const [rating, setRating] = useState(10)
    const { addFeedback,feedbackEdit,updateFeedback } = useContext(FeedbackContext)
    
    useEffect(() => { 
        if (feedbackEdit.edit === true) {
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
            setBtnDisabled(false)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        }
        else if (text != '' && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage("Please enter at least 10 characters")
        }
        else {
            setBtnDisabled(false)
            setMessage(null)

        }
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }
            else {
                addFeedback(newFeedback)
            }
        }
        setText("")
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate our service with us</h2>
                <RatingSelect select={(rating) => { setRating(rating) }} />
                <div className="input-group">
                    <input type='text' placeholder='write a review' onChange={handleTextChange} value={text} />
                    <Button type="submit" isDisabled={btnDisabled} > Send</Button>
                </div>
                {message && <p className="message">{message}</p>}
            </form>
        </Card>
    )
}

export default FeedbackForm
