import React, { FC } from 'react';
import { Col, Pagination } from 'react-bootstrap';
import { Paginate } from './types'
import './styles.css'

const Paginator: FC<Paginate> = ({ totalcount, currentPage, handleChange, firstPage, prevPage, nextPage, lastPage }) => {
    let PageNumber = [];


    for (let number = 0; number < totalcount; number++) {
        PageNumber.push(
            <Pagination.Item className="paginator_item" key={number} active={(number + 1) === (currentPage)} onClick={() => handleChange(number)} >
                {number}
            </Pagination.Item>
        );
    }

    return (
        <Col className="d-flex justify-content-center mt-2">
            <Pagination>
                <Pagination.First className="paginator_item" onClick={firstPage} />
                <Pagination.Prev className="paginator_item" onClick={prevPage} />

                {PageNumber.slice(currentPage, (currentPage + 10))}

                <Pagination.Next className="paginator_item" onClick={nextPage} />
                <Pagination.Last className="paginator_item" onClick={lastPage} />
            </Pagination>
        </Col>
    )
}

export { Paginator };
