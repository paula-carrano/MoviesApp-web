import React, { FC } from 'react';
import { Col, Pagination } from 'react-bootstrap';
import { Paginate } from './types'

const Paginator: FC<Paginate> = ({ totalcount, currentPage, handleChange, firstPage, prevPage, nextPage, lastPage }) => {
    let PageNumber = [];


    for (let number = 0; number < totalcount; number++) {
        PageNumber.push(
            <Pagination.Item key={number} active={(number + 1) === (currentPage)} onClick={() => handleChange(number)} >
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <Col className="d-flex justify-content-center mt-2">
            <Pagination>
                <Pagination.First onClick={firstPage} />
                <Pagination.Prev onClick={prevPage} />

                {PageNumber.slice(currentPage, (currentPage + 10))}

                <Pagination.Next onClick={nextPage} />
                <Pagination.Last onClick={lastPage} />
            </Pagination>
        </Col>
    )
}

export { Paginator };
