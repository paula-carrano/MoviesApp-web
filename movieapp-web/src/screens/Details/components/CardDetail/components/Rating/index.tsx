import { FC, useEffect, useState } from 'react';
import { Star, StarFill, StarHalf } from 'react-bootstrap-icons';

const Rating: FC<{ average: number }> = ({ average }) => {

    const [fillStar, setFillStar] = useState<number>(0);
    const [halfStar, setHalfStar] = useState<number>(0);
    const [emptyStar, setEmptyStar] = useState<number>(0);

    const totalStar = 10;
    const roundedScore = Math.round(average * 2) / 2;
    const fillStarsValue = Math.floor(roundedScore)
    const halfStarsValue = roundedScore !== Math.round(roundedScore) ? 1 : 0;
    const emptyStarsValue = (totalStar - halfStarsValue - fillStarsValue);

    useEffect(() => {
        setFillStar(fillStarsValue);
        setHalfStar(halfStarsValue);
        setEmptyStar(emptyStarsValue)
    }, [fillStarsValue, halfStarsValue, emptyStarsValue]);


    return (
        <div>
            {Array.from(Array(fillStar).keys()).map((v) => <StarFill color="#FAFD4E" key={v} />)}

            {halfStar && <StarHalf color="#FAFD4E" />}

            {Array.from(Array(emptyStar).keys()).map((v) => <Star key={v} />)}
        </div>
    );
}
export { Rating };
