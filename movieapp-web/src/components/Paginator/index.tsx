import { FC } from 'react';
import { Pagination } from 'react-bootstrap';
import { Paginate } from './types'

const Paginator: FC<Paginate> = ({ totalcount, handleChange, currentPage }) => {
    let PageNumber = [];


    for (let number = 0; number < totalcount; number++) {
        PageNumber.push(
            <Pagination.Item key={number} active={(number) === (currentPage)} onClick={() => handleChange(number)} >
                {number + 1}
            </Pagination.Item>,
        );
    }


    return (
        <div>

            <Pagination>
                {PageNumber}
            </Pagination>

        </div >
    )
}

export { Paginator };
