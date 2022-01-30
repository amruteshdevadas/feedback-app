import { useState ,useContext} from "react";
import PropTypes from 'prop-types'
import Card from "../shared/Card";
import { motion ,AnimatePresence} from 'framer-motion'
import { FeedbackContext } from './FeedbackContext'
import { FaEdit, FaTimes } from 'react-icons/fa'
function FeedbackList() {
  const [rating, setRating] = useState(7);
  const { feedback,deleteFeedback,editFeedback } = useContext(FeedbackContext)
  
  return !feedback || feedback.length === 0 ? (
    <p>No items to Display </p>
  ) : (
    <div className="feedback-list">
      {feedback.map((item) => {
        return (
          <AnimatePresence>
          <Card key={item.id} reverse={false}>
            <motion.div initial={{opacity:0}} animate ={{opacity:1,transition:{duration:1}}}
            exit={{opacity:0}}
            >
            <div className="num-display">{item.rating}</div>
            <button className ="close" onClick={() => deleteFeedback(item.id)}>
                  <FaTimes color="purple"/>
                </button>
                <button className="edit" onClick = {()=> editFeedback(item)} >
                  <FaEdit color = "purple"/>
                </button>
            
            <div className="text-display">{item.text}</div>
            </motion.div>
          </Card>
          </AnimatePresence>
        );
      })}
      
    </div>
  );
}

// FeedbackList.prototypes ={
//     feedbackList : PropTypes.arrayOf(
//         PropTypes.shape({
//             id : PropTypes.string,
//             text : PropTypes.string,
//             rating : PropTypes.string
//         })
//     )
// }
export default FeedbackList;
