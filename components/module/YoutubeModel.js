import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CiPlay1 } from 'react-icons/ci';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/PLk9MbzUnoM?si=EhZ7nbrskx9e6Jxt'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen
      ></iframe>
    </Modal>
  );
}

function YoutubeModel() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button
        onClick={() => setModalShow(true)}
        className='bg-transparent text-white border-0 play_btn_focus'
      >
        <CiPlay1 className='play_btn_res'/>
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
export default YoutubeModel;
