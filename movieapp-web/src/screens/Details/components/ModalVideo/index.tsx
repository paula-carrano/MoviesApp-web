import React, { FC, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { url_video } from '@shared/constants/videoConfig'
import { Video } from '@screens/Details/types';

const ModalVideo: FC<{ test: Video }> = ({ test }) => {
    const [lgShow, setLgShow] = useState(false);


    return (
        <div>
            <Button variant="ligth" onClick={() => setLgShow(true)}><FontAwesomeIcon icon={faVideo} /> Trailer</Button>

            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <iframe width={560} height={315} src={`${url_video}${test.key}`} title={test.name} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Modal.Body>
            </Modal>
        </div >
    );
}

export { ModalVideo };
