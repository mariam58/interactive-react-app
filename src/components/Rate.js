import { SubmitButton } from "../styledComponents/Button";
import star from '../images/icon-star.svg';
import { ListItem } from "../styledComponents/RateItem";
import { HeadingLarge, Text, Wrapper } from "../styledComponents/GlobalCss";
const Rate = (props) => {
    const arr = [1, 2, 3, 4, 5]
    return (
        <Wrapper>
            <img className="img-star" src={star} alt="star svg" />
            <HeadingLarge>how did we do?</HeadingLarge>
            <Text>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</Text>
            <ul>
                {arr.map(item => <ListItem color={props.activeRate == item} onClick={() => props.setActiveRate(item)}>{item}</ListItem>)}
            </ul>
            <SubmitButton onClick={() => {
                if (props.activeRate == null) return; 
                 props.setSubmit(true)
            }}>submit</SubmitButton>
        </Wrapper>
    );
}

export default Rate;