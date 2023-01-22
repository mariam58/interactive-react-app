import { HeadingLarge, Text, Wrapper } from "../styledComponents/GlobalCss";
import ApplyImage from '../images/illustration-thank-you.svg';
const Result = (props) => {
    return (<Wrapper>
        <div className="text-center">
            <img className="apply-img" src={ApplyImage} alt="star svg" />
        </div>
        <Text className="text-orange text-center">You selected {props.activeRate} out of 5</Text>
        <HeadingLarge className="text-center">Thank you!</HeadingLarge>
        <Text className="text-center">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</Text>
    </Wrapper>);
}

export default Result;