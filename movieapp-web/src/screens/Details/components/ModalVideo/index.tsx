import React, { FC, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { url_video } from '@shared/constants/videoConfig'
import { Video } from '@screens/Details/types';

const ModalVideo: FC<{ trailer: Video }> = ({ trailer }) => {
    const [lgShow, setLgShow] = useState(false);


    return (
        <div>
            <Button variant="ligth" onClick={() => setLgShow(true)}><FontAwesomeIcon icon={faPlayCircle} /> Trailer</Button>

            <Modal className="modalBody bg-dark"
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="trailer"
            >
                <Modal.Body>
                    <iframe className="responsive-iframe" width="100%" height={500} src={`${url_video}${trailer.key}`} title={trailer.name} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Modal.Body>
            </Modal>
        </div >
    );
}

export { ModalVideo };
